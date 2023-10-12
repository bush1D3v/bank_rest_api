const { updateVerifyer, updateTransaction, getIdPerHeader } = require('../../repositories');

const updateTransactionAndReturnConfirmation = async (bearer, params) => {
  try {
    const user_id = getIdPerHeader(bearer);

    const verifyer = await updateVerifyer(params[5], user_id);

    if (typeof verifyer === 'string') {
      return verifyer;
    };

    const response = await updateTransaction(params, user_id);

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  updateTransactionAndReturnConfirmation
};
