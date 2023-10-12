const express = require('express');
const routes = express();

const { createUser,
        userLogin,
        detailUser,
        updateUser,
        listCategories,
        listTransactions,
        detailUserTransaction,
        registerTransaction,
        updateTransaction,
        deleteTransaction,
        transactionHistory
      } = require('../controllers');

const { emailExists,
        verifyNameAndEmailAndPassword,
        verifyEmailAndpassword,
        auth,
        verifyTransactionBody,
        verifyCategorieId,
        verifyTransactionParams
      } = require('../middlewares');

routes.post('/usuario', emailExists, verifyNameAndEmailAndPassword, createUser);
routes.post('/login', verifyEmailAndpassword, userLogin);

routes.use(auth);

routes.get('/usuario', detailUser);
routes.put('/usuario', verifyNameAndEmailAndPassword, emailExists, updateUser);
routes.get('/categoria', listCategories);
routes.get('/transacao', listTransactions);
routes.get('/transacao/extrato', transactionHistory);
routes.get('/transacao/:id', detailUserTransaction);
routes.post('/transacao', verifyTransactionBody, verifyCategorieId, registerTransaction);
routes.put('/transacao/:id', verifyTransactionBody, verifyCategorieId, updateTransaction);
routes.delete('/transacao/:id', verifyTransactionParams, deleteTransaction);

module.exports = routes;
