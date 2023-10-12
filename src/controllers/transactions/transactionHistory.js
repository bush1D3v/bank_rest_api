const { getTransactions, getIdPerHeader } = require("../../repositories");
const { displayHistory } = require("../../services");

const transactionHistory = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const response = await displayHistory(authorization);

    return res.json({
      enterValue: response[0],
      exitValue: response[1]
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  transactionHistory
};
