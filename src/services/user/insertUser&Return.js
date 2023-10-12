const { encryptPassword, insertUser } = require('../../repositories');

const insertUserAndReturn = async (nome, email, senha) => {
  try {
    const password = await encryptPassword(senha);

    const newUser = await insertUser([nome, email, password]);

    return newUser;
  } catch (error) {
    return error.message;
  };
};

module.exports = {
  insertUserAndReturn
};
