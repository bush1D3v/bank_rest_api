const { insertTransactionAndReturn } = require("../../services");

const registerTransaction = async (req, res) => {
  try {
    const { tipo, descricao, valor, data, categoria_id } = req.body;
    const { authorization } = req.headers;

    const params = [descricao, valor, data, categoria_id, tipo];

    const result = await insertTransactionAndReturn(authorization, params, categoria_id);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  registerTransaction
};
