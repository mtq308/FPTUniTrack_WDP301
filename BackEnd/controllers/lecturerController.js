const Lecturer = require('../Models/lecturerModel');

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

    res.json(slots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  lecturerProfile,
  getSlotsByWeekNumber
};
