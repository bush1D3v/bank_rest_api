const { displayAllCategories } = require('../../services');

const listCategories = async (req, res) => {
  try {
    const categories = await displayAllCategories();

    return res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  };
};

module.exports = {
  listCategories
};
