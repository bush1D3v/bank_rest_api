const bcrypt = require('bcrypt');

const verifyCryptPassword = async (user, senha) => {
  try {
    const validPassword = await bcrypt.compare(senha, user.senha);

    if (!validPassword) {
      return 'Unauthorized';
    };

    return validPassword;
  } catch (error) {
    return 'Internal server error';
  };
};

module.exports = {
  verifyCryptPassword
};
