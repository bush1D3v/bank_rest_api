const { loginUserAndReturn } = require('../../services');

const userLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const response = await loginUserAndReturn(res, email, senha);

    if (response.outputSize == 0) {
      return '';
    };

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  userLogin
};
