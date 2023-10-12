const { getUserPerEmail,
        verifyCryptPassword,
        createToken
      } = require('../../repositories');

const loginUserAndReturn = async (res, email, senha) => {
  try {
    const user = await getUserPerEmail(email);

    if (typeof user === 'undefined') {
      return res.status(400).json({ message: 'Invalid email' });
    };

    const crypt = await verifyCryptPassword(user, senha);

    if (typeof crypt === 'string') {
      return res.status(401).json({ message: "Unauthorized"});
    };

    const response = createToken(user);

    return response;
  } catch (error) {
    return 'Internal server error';
  };
};

module.exports = {
  loginUserAndReturn
};
