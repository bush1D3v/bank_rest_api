const { encryptPassword, insertUser } = require('./createUser/index');
const { getIdPerHeader, getUserPerId } = require('./detailUser/index');
const { updateUser } = require('./updateUser/updateUser');
const { createToken, getUserPerEmail, verifyCryptPassword } = require('./userLogin/index');

module.exports = {
  encryptPassword,
  insertUser,
  getIdPerHeader,
  getUserPerId,
  updateUser,
  createToken,
  getUserPerEmail,
  verifyCryptPassword
};
