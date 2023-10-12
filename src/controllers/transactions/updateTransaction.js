const { updateTransactionAndReturnConfirmation } = require('../../services');

const updateTransaction = async (req, res) => {
  try {
    const { descricao, valor, data, categoria_id, tipo } = req.body;
    const { id } = req.params;
    const { authorization } = req.headers;

    const params = [descricao, valor, data, categoria_id, tipo, id];

    const response = await updateTransactionAndReturnConfirmation(authorization, params);

    if (typeof response === 'string') {
      return res.status(403).json({ message: response });
    };

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  updateTransaction
};
