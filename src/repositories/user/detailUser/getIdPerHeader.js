const jwt = require("jsonwebtoken");
const jwtPassword = require('../../../jwt/jwtPassword');

const getIdPerHeader = (bearer) => {
  try {
    const token = bearer.split(' ')[1];

		const { id } = jwt.verify(token, jwtPassword);

    return id;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getIdPerHeader
};
