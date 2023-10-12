const pool = require("../../../data/connection");

const deleteTransaction = async (id) => {
  try {
    const { rows } = await pool.query(`
      delete from transacoes
      where id = $1
    `, [id]);

    return rows;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  deleteTransaction
};
