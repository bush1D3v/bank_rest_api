const { deleteTransactionAndReturnConfirmation } = require('../../services');

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deleteTransactionAndReturnConfirmation(id);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  deleteTransaction
};
