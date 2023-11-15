const Class = require('../Models/classModel')

async function getClassBySemester(req, res, next) {
    try {
      const { semesterId } = req.params.semesterId;
  
      const result = await Class.find({
        SemesterID: semesterId
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

module.exports = {
    getClassBySemester
}