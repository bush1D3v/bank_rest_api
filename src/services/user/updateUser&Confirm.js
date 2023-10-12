const { getIdPerHeader,
        encryptPassword,
        updateUser
      } = require("../../repositories");

const updateUserAndConfirm = async (bearer, nome, email, senha) => {
  try {
    const id = getIdPerHeader(bearer);

    const newPassword = await encryptPassword(senha);

    const newUser = await updateUser(nome, email, newPassword, id);

    return newUser;
  } catch (error) {
    return error;
  };
};

module.exports = {
  updateUserAndConfirm
};
