const pool = require('../../data/connection');

const verifyTransactionBody = async (req, res, next) => {
  try {
    const { descricao, valor, data, categoria_id, tipo} = req.body;

    if (!descricao || !valor || !data || !categoria_id || !tipo) {
      return res.status(400).json({ message: "Please, fill out all the fields" });
    };

    if (tipo.toLowerCase() !== 'entrada' && tipo.toLowerCase() !== 'saida' && tipo.toLowerCase() !== 'saída') {
      return res.status(400).json({ message: "The 'tipo' field, is different from 'saida' or 'entrada'" });
    };

    const verifyCategoryId = await pool.query(`
      select * from categorias
      where id = $1
    `, [categoria_id]);

    if (!verifyCategoryId) {
      return res.status(400).json({ message: "The 'categoria_id' field, does not correspond to a category in the database" });
    };

    next();
  } catch (error) {
    throw error;
  };
};

module.exports = {
  verifyTransactionBody
};
