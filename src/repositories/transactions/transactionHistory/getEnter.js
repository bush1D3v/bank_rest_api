const getEnter = (enterTransactionsValues) => {
  try {
    let response = 0;

    for (let valor of enterTransactionsValues) {
      response += Number(valor);
    };

    return response;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getEnter
};
