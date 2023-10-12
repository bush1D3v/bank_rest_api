const verifyNameAndEmailAndPassword = (req, res, next) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      response.status(400).json({mensagem: "Please, insert all values"});
    };

    next()
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  verifyNameAndEmailAndPassword
};
