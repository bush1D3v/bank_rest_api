const { insertTransaction, returnInfos, getIdPerHeader } = require('../../repositories');

const insertTransactionAndReturn = async (token, params, categoria_id) => {
  try {
    const uId = getIdPerHeader(token);
    params.splice(params.length - 1, 0, uId);

    const object = await insertTransaction(params);
    const infos = await returnInfos(object, categoria_id);

    return infos;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  insertTransactionAndReturn
};
