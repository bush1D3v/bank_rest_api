const pool = require("../../data/connection");

const verifyCategorieId = async (req, res, next) => {
  try {
    const { categoria_id } = req.body;

    const { rows } = await pool.query(`
      select * from categorias
      where id = $1
    `, [categoria_id]);

    if (rows.length < 1) {
      return res.status(400).json({ message: "Invalid field 'categoria_id'" });
    };

    next();
  } catch (error) {
    throw error;
  };
};

module.exports = {
  verifyCategorieId
};
