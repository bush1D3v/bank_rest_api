const pool = require("../../../data/connection");

const updateUser = async (nome, email, encryptPassword, id) => {
  try {
    const query = `
      update usuarios
      set nome = $1, email = $2, senha = $3
      where id = $4;
    `;

    const newUser = await pool.query(
      query,
      [nome, email, encryptPassword, id]
    );

    return newUser;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  updateUser
};
