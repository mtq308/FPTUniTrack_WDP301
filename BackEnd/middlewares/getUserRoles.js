const UserRole = require('../Models/userRoleModel.ts');
const Role = require('../Models/roleModel.ts');

async function getUserRole(req, res, next) {
  const { username } = req.user;

  try {
    const userRole = await UserRole.findOne({ username });

    if (!userRole) {
      return res.status(403).json({ msg: 'User role not found', status: false });
    }

    const role = await Role.findOne({ roleId: userRole.role });

    if (!role) {
      return res.status(403).json({ msg: 'Role not found', status: false });
    }

    req.user.roleName = role.roleName;
    next();
  } catch (ex) {
    next(ex);
  }
}

module.exports = getUserRole;
