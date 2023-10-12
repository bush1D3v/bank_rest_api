const { getTransaction, getIdPerHeader } = require("../../repositories");

const displayUserTransaction = async (token, transaction_id) => {
  try {
    const userId = getIdPerHeader(token);

    const transaction = await getTransaction(userId, transaction_id);

    if (transaction.length < 1) {
      return 'error';
    };

    return transaction[0];
  } catch (error) {
    return error;
  };
};

module.exports = {
  displayUserTransaction
};
