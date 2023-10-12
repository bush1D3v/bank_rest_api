const jwt = require('jsonwebtoken');
const jwtPassword = require('../../jwt/jwtPassword');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return resp.status(400).json({message: "Bearer Token is required"});
    };

    const token = authorization.split(' ')[1];

    const userToken = jwt.verify(token, jwtPassword);

    next();
  } catch (error) {
    return res.status(401).json({message: "Unauthorized"});
  };
};

module.exports = {
  auth
};
