const { verifyTransactionBody , verifyTransactionParams } = require('./transactions');
const { emailExists, verifyEmailAndpassword, verifyNameAndEmailAndPassword} = require('./user');
const { verifyCategorieId } = require('./categories');
const { auth } = require('./auth/auth');

module.exports = {
  emailExists,
  verifyNameAndEmailAndPassword,
  verifyEmailAndpassword,
  auth,
  verifyTransactionBody,
  verifyCategorieId,
  verifyTransactionParams
};
