const { updateUserAndConfirm } = require('../../services');

const updateUser = (req, res) => {
  try {
    const { authorization } = req.headers;
    const { nome, email, senha } = req.body;

    const newUser = updateUserAndConfirm(authorization, nome, email, senha);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  updateUser
};
