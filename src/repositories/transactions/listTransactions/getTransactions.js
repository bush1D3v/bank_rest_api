const pool = require('../../../data/connection');

const getTransactions = async (id) => {
  try {
    const query = (`
    select * from transacoes
    where usuario_id = $1
  `);

  const { rows } = await pool.query(query, [id]);

  if (rows.length < 0) {
    return res.status(401).json({ message: 'unathorized' });
  };

  return rows;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getTransactions
};
