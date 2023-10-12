const pool = require('../../../data/connection');

const getUserPerId = async (id) => {
  try {
    const query = `
      select * from usuarios
      where id = $1
    `;

    const user = await pool.query(query, [id]);

    const { senha: _, ...result } = user.rows[0];

    return result;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getUserPerId
};
