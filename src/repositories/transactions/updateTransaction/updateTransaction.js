const pool = require('../../../data/connection');

const updateTransaction = async (params, user_id) => {
  try {
    params.splice(params.length, 0, user_id);

    const response = await pool.query(`
      update transacoes
      set descricao = $1,
      valor = $2,
      data = $3,
      categoria_id = $4,
      usuario_id = $7,
      tipo = $5
      where usuario_id = $7
      and id = $6;
    `, params);

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  updateTransaction
};
