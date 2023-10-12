const { displayUserTransaction } = require("../../services");

const detailUserTransaction = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;

    const response = await displayUserTransaction(authorization, id);

    if (response === 'error') {
      return res.status(400).json({ message: 'Transaction not found' });
    };

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  detailUserTransaction
};
