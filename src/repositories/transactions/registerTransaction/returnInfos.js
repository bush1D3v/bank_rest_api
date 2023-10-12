const pool = require("../../../data/connection");

const returnInfos = async (object, categoria_id) => {
  try {
    const { rows } = await pool.query(`
      select descricao from categorias
      where id = $1
    `, [categoria_id]);

    Object.assign(object, { categoria_nome: rows[0].descricao });

    return object;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  returnInfos
};
