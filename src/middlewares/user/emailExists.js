const pool = require("../../data/connection");

const emailExists = async (req, res, next) => {
  try {
    const { email } = req.body;

    const query = (`
      select * from usuarios
      where email = $1
    `);

    const { rows } = await pool.query(query, [email]);

    if (rows.length > 0) {
      return res.status(409).json({message: 'This email already used'});
    };

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  };
};

module.exports = {
  emailExists
};
