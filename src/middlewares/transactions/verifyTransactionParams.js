const pool = require("../../data/connection");

const verifyTransactionParams = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query(`
      select * from transacoes
      where id = $1
    `, [id]);

    if (rows.length < 1) {
      return res.status(400).json({ message: "Invalid param 'id'" })
    };

    next();
  } catch (error) {
    throw error;
  };
};

module.exports = {
  verifyTransactionParams
};
