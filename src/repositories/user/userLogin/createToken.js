const jwtPassword = require('../../../jwt/jwtPassword');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  try {
    const token = jwt.sign({ id: user.id }, jwtPassword, { expiresIn: '24h' });

    const { senha: _, ...logedUser } = user;

    return {
      user: logedUser,
      token
    };
  } catch (error) {
    throw error;
  };
};

module.exports = {
  createToken
};
