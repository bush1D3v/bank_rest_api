const { insertUserAndReturn } = require('../../services');

const createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const response = await insertUserAndReturn(nome, email, senha);

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error"});
  };
};

module.exports = {
  createUser
};
