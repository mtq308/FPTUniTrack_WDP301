const Student = require('../Models/studentModel.js');
const Class = require('../Models/classModel.js');
const Slot = require('../Models/slotModel.js');
const Period = require('../Models/periodModel.js');
const Day = require('../Models/dayModel.js');
const Semester = require('../Models/semesterModel.js');
const Subject = require('../Models/subjectModel.js');
const Grade = require('../Models/gradeModel.js')

async function lecturerProfile(req, res) {

  const lecturerId = req.user.id;
  try {
    const lecturer = await Lecturer.findOne({ id: lecturerId, role: 'lecturer' });

    if (!lecturer) {
      return res.status(404).json({ message: 'Lecturer not found' });
    }

    res.json(lecturer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getSlotsByWeekNumber(req, res) {
  const lecturerId = req.user.id;
  const weekNumber = req.user.weekNumber;

  try {
    const slots = await Slot.find({
      WeekNumber: weekNumber,
      LecturerUserName: lecturerId,
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
    res.status(500).json({ message: 'Server error' });
  }
}

async function getGradeByClass(req, res, next) {
  try {
    const { classID } = req.body;

    const result = await Grade.find({
      ClassID: classID
    });
    if (!result) {
      return null;
    }
    res.json(result);

  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getGradeByStudentId(req, res, next){
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

async function updateStudentGrade(req, res) {
  try {
    const studentId = req.params.studentId;
    const subjectId = req.params.subjectId;
    const scoreName = req.params.scoreName;
    const newGrade = req.body.grade;

    const grade = await Grade.findOne({
      'StudentGrades.StudentID': studentId,
      'StudentGrades.SubjectID': subjectId,
    });

    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    // Find the student's grade for the specified subject
    const studentGrade = grade.StudentGrades.find((student) => {
      return student.StudentID === studentId && student.SubjectID === subjectId;
    });

    if (!studentGrade) {
      return res.status(404).json({ message: 'Student grade not found' });
    }

    // Update the student's score for the specified scoreName
    const scoreToUpdate = studentGrade.Score.find((score) => score.scoreName === scoreName);
    if (scoreToUpdate) {
      scoreToUpdate.grade = newGrade; // Update the grade
    } else {
      // If the specified scoreName doesn't exist, you can add it
      studentGrade.Score.push({ scoreName, grade: newGrade });
    }

    // Save the updated grade
    await grade.save();

    res.json({ message: 'Student score updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  lecturerProfile,
  getSlotsByWeekNumber,
  getGradeByClass,
  getGradeByStudentId,
  updateStudentGrade
};
