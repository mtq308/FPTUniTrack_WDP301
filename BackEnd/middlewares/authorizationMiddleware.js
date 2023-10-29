module.exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Admin authorization required" });
    }
    next();
  };
  
  module.exports.isStudent = (req, res, next) => {
    if (req.user.role !== "student") {
      return res.status(403).json({ msg: "Student authorization required" });
    }
    next();
  };
  
  module.exports.isLecturer = (req, res, next) => {
    if (req.user.role !== "lecturer") {
      return res.status(403).json({ msg: "Lecturer authorization required" });
    }
    next();
  };
  