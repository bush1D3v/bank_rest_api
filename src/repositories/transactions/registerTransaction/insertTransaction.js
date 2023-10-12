const pool = require("../../../data/connection");

const insertTransaction = async (params) => {
  try {
    const { rows } = await pool.query(`
      insert into transacoes
      (descricao, valor, data, categoria_id, usuario_id, tipo)
      values
      ($1, $2, $3, $4, $5, $6)
      returning *
    `, params);

    return rows[0];
  } catch (error) {
    throw error;
  };
};

module.exports = {
  insertTransaction
};
