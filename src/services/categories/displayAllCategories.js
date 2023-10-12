const { pickCategories } = require("../../repositories");

const displayAllCategories = async () => {
  try {
    const categories = await pickCategories();

    return categories;
  } catch (error) {
    return error.message;
  };
};

module.exports = {
  displayAllCategories
};
