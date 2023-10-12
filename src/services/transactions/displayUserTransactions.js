const { getIdPerHeader, getTransactions } = require("../../repositories");

const displayUserTransactions = async (token) => {
  try {
    const userId = getIdPerHeader(token);

    const transactions = await getTransactions(userId);

    return transactions;
  } catch (error) {
    return error;
  };
};

module.exports = {
  displayUserTransactions
};
