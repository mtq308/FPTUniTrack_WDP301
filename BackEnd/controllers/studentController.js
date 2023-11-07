const Student = require('../Models/studentModel.js');
const Class = require('../Models/classModel.js');
const Slot = require('../Models/slotModel.js');
const Period = require('../Models/periodModel.js');
const Day = require('../Models/dayModel.js');
const Semester = require('../Models/semesterModel.js');
const Subject = require('../Models/subjectModel.js');
const Grade = require('../Models/gradeModel.js')

async function studentProfile(req, res, next) {
  const studentId = req.user.id;
  try {
    const student = await Student.findOne({ id: studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (err) {
    console.error(err);
    next(err); // Pass the error to the next middleware or error handler
  }
}

async function getStudentClasses(req, res, next) {
  const studentId = req.body.id;
  console.log(studentId);
  try {
    const classes = await Class.find({ StudentID: { $in: [studentId] } });
    console.log(classes)
    res.json(classes);
  } catch (error) {
    console.error(error);
    next(error); // Pass the error to the next middleware or error handler
  }
}

async function getSlotsByWeekNumber(req, res, next) {
  const studentId = req.body.id;
  const weekNumber = req.body.weekNumber;

  if (!studentId || !weekNumber) {
    return res.status(400).json({ message: 'Student ID and week number are required' });
  }

  try {
    const classes = await Class.find({ StudentID: studentId });

    if (classes.length === 0) {
      return res.json([]); // No classes found for the student
    }

    const classIDs = classes.map((cls) => cls.ClassID);

    const slots = await Slot.find({
      WeekNumber: weekNumber,
      ClassID: { $in: classIDs },
    });

    const [periods, days, semesters, subjects] = await Promise.all([
      Period.find({}),
      Day.find({ DayID: { $in: slots.map((slot) => slot.DayID) } }),
      Semester.find({ SemesterID: { $in: slots.map((slot) => slot.SemesterID) } }),
      Subject.find({ SubjectID: { $in: slots.map((slot) => slot.SubjectID) } }),
    ]);

    const slotsWithModels = slots.map((slot) => ({
      ...slot.toObject(),
      Period: periods.find((period) => period.ID == slot.PeriodID),
      Day: days.find((day) => day.DayID == slot.DayID),
      Semester: semesters.find((semester) => semester.SemesterID == slot.SemesterID),
      Subject: subjects.find((subject) => subject.SubjectID == slot.SubjectID),
    }));

    res.json(slotsWithModels);
  } catch (error) {
    console.error(error);
    next(error); // Pass the error to the next middleware or error handler
  }
}

async function getGrade(req, res, next) {
  try {
    const { studentId, subjectId } = req.body;

    const result = await Grade.findOne({
      "StudentGrades.StudentID": studentId,
      "StudentGrades.SubjectID": subjectId
    });
    if (!result) {
      return null;
    }
    const matchingStudentGrade = result.StudentGrades.find(
      (studentGrade) =>
        studentGrade.StudentID === studentId &&
        studentGrade.SubjectID === subjectId
    );

    if (!matchingStudentGrade) {
      return null; // No matching StudentGrades element found
    }

    const scores = matchingStudentGrade.Score;

    res.json(scores);

  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  studentProfile,
  getStudentClasses,
  getSlotsByWeekNumber,
  getGrade
};
