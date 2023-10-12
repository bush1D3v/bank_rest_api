const getExit = (exitTransactionsValues) => {
  try {
    let response = 0;

    for (let valor of exitTransactionsValues) {
      response += Number(valor);
    };

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getExit
};
