const { getIdPerHeader, getUserPerId } = require('../../repositories');

const getUserAndReturn = async (bearer) => {
  try {
    const id = getIdPerHeader(bearer);

    const user = getUserPerId(id);

    return user;
  } catch (error) {
    return error;
  };
};

module.exports = {
  getUserAndReturn
};
