const { insertUserAndReturn,
        loginUserAndReturn,
        getUserAndReturn,
        displayUserTransaction,
        updateUserAndConfirm
      } = require('./user');

const { displayUserTransactions,
        insertTransactionAndReturn,
        updateTransactionAndReturnConfirmation,
        deleteTransactionAndReturnConfirmation,
        displayHistory
      } = require('./transactions');

const { displayAllCategories } = require('./categories');

module.exports = {
  insertUserAndReturn,
  loginUserAndReturn,
  getUserAndReturn,
  updateUserAndConfirm,
  displayAllCategories,
  displayUserTransactions,
  displayUserTransaction,
  insertTransactionAndReturn,
  updateTransactionAndReturnConfirmation,
  deleteTransactionAndReturnConfirmation,
  displayHistory
};
