const pool = require("../../../data/connection");

const updateVerifyer = async (transaction_id, user_id) => {
  try {
    const { rows } = await pool.query(`
      select * from transacoes
      where id = $1 and
      usuario_id = $2
    `, [transaction_id, user_id]);

    if (rows.length < 1) {
      return "The User is Forbidden to Access the Requested Resource.";
    };

    return rows[0];
  } catch (error) {
    throw error;
  };
};

module.exports = {
  updateVerifyer
};
