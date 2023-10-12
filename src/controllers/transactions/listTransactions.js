const pool = require("../../data/connection");
const { displayUserTransactions } = require("../../services");

const listTransactions = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { filtro } = req.query;

    if (typeof filtro !== 'undefined') {
      const numberList = [];
      const filtredList = [];

      const toCapitalize = (frase) => {
        return frase[0].toUpperCase() + frase.slice(1);
      };

      for (let filter of filtro) {
        let { rows } = await pool.query(`
          select id from categorias
          where descricao like $1
        `, [toCapitalize(filter)]);

        numberList.push(rows[0]);
      };

      for (let number of numberList) {
        let { rows } = await pool.query(`
          select * from transacoes
          where categoria_id = $1
        `, [number.id]);

        filtredList.push(rows);
      };

      return res.json(filtredList);
    };

    const transactions = await displayUserTransactions(authorization);

    return res.json(transactions);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  listTransactions
};
