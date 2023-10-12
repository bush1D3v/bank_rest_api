const { deleteTransaction } = require("../../repositories/transactions");

const deleteTransactionAndReturnConfirmation = async (id) => {
  try {
    const response = await deleteTransaction(id);

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  deleteTransactionAndReturnConfirmation
};
