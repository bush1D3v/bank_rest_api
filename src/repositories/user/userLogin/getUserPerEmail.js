const pool = require('../../../data/connection');

const getUserPerEmail = async (email) => {
  try {
    const query = `
      select * from usuarios
      where email = $1
    `;

    const user = await pool.query(query, [email]);

    return user.rows[0];
  } catch (error) {
    return 'Internal server error';
  };
};

module.exports = {
  getUserPerEmail
};
