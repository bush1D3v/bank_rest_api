const pool = require('../../../data/connection');

const pickCategories = async () => {
  try {
    const { rows } = await pool.query('select * from categorias');

    return rows;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  pickCategories
};
