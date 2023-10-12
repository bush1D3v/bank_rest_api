const bcrypt = require('bcrypt');

const encryptPassword = async (senha) => {
  try {
    const response = await bcrypt.hash(senha, 10);

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  encryptPassword
};
