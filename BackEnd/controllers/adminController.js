const bcrypt = require('bcrypt');

async function updatePassword(req, res, next) {
  try {
    const { username, newPassword } = req.body;

    const userToUpdate = await User.findOne({ username });

    if (!userToUpdate) {
      return res.status(404).json({ msg: 'User not found', status: false });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    userToUpdate.password = hashedPassword;
    await userToUpdate.save();

    res.json({ msg: 'Password updated successfully', status: true });
  } catch (ex) {
    next(ex);
  }
}

module.exports = {
  updatePassword,
};
