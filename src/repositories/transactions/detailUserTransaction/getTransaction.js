const pool = require("../../../data/connection");

const getTransaction = async (userId, trasactionId) => {
  try {
    const query = `
      select * from transacoes
      where usuario_id = $1
      and id = $2
    `;

    const { rows } = await pool.query(query, [userId, trasactionId]);

    return rows;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getTransaction
};
