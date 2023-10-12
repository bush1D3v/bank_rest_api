const { getTransaction } = require('./detailUserTransaction/getTransaction');
const { getTransactions } = require('./listTransactions/getTransactions');
const { insertTransaction, returnInfos} = require('./registerTransaction/index');
const { updateTransaction, updateVerifyer } = require('./updateTransaction/index');
const { deleteTransaction } = require('./deleteTransaction/deleteTransaction');
const { getEnter, getExit, transactionFilter } = require('./transactionHistory');

module.exports = {
  getTransaction,
  getTransactions,
  insertTransaction,
  returnInfos,
  updateTransaction,
  updateVerifyer,
  deleteTransaction,
  getEnter,
  getExit,
  transactionFilter
};
