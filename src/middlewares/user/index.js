const { emailExists } = require('./emailExists');
const { verifyEmailAndpassword } = require('./verifyEmail&Password');
const { verifyNameAndEmailAndPassword } = require('./verifyName&Email&Password');

module.exports = {
  emailExists,
  verifyEmailAndpassword,
  verifyNameAndEmailAndPassword
};
