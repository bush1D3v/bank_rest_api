const pool = require('../../../data/connection');

const insertUser = async (params) => {
  try {
    const { rows } = await pool.query(`
      insert into usuarios
      (nome, email, senha)
      values
      ($1, $2, $3)
      returning id, nome, email
    `, params);

    return rows[0];
  } catch (error) {
    throw error;
  };
};

module.exports = {
  insertUser
};
