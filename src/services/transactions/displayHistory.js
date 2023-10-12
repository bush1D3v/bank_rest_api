const { getTransactions, getIdPerHeader } = require("../../repositories");
const { getExit, getEnter, transactionFilter } = require("../../repositories/transactions");

const displayHistory = async (token) => {
  try {
    const uId = getIdPerHeader(token);

    const transactionsList = await getTransactions(uId);

    const transactionsFiltred = transactionFilter(transactionsList);

    const enterValue = getEnter(transactionsFiltred[0]);
    const exitValue = getExit(transactionsFiltred[1]);

    return [enterValue, exitValue];
  } catch (error) {
    throw error;
  };
};

module.exports = {
  displayHistory
};
