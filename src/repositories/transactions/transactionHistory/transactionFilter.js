const transactionFilter = (transactionsList) => {
  try {
    let exitList = [];
    let enterList = [];

    for (let transaction of transactionsList) {
      if (transaction.tipo == 'entrada') {
        enterList.push(transaction.valor);
      };

      if (transaction.tipo == 'saida' || transaction.tipo == 'saída') {
        exitList.push(transaction.valor);
      };
    };

    return [enterList, exitList];
  } catch (error) {
    throw error;
  };
};

module.exports = {
  transactionFilter
};
