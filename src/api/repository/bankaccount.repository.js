const database = require('../../helpers/database')
const BankAccount = require('../models/bankaccount')

const saveBankAccount = async (bankAccount) => {
    const query = `INSERT INTO bankAccount ` +
        `(balance, maxCredit, creditBalanceAvailable, userId) ` +
        `VALUES (` +
        `${bankAccount.balance},` +
        `${bankAccount.maxCredit},` +
        `${bankAccount.creditBalanceAvailable},` +
        `${bankAccount.userId});`

    return await database.executeQuery(query)
}

const findAccountByUserId = async (userId) => {
    const query = `SELECT * FROM bankAccount ` +
        `WHERE bankAccount.userId = ${userId};`

    const [dataFromDb] = await database.executeQuery(query)
    return dataFromDb
}

const updateCreditBalanceAvailable = async (bankAccount) => {
    const query = `UPDATE bankAccount SET ` +
        `creditBalanceAvailable = ${bankAccount.creditBalanceAvailable} ` +
        `WHERE cc = ${bankAccount.cc};`

    return await database.executeQuery(query)
}

const updateBalance = async (bankAccount) => {
    const query = `UPDATE bankAccount SET ` +
        `balance = ${bankAccount.balance} ` +
        `WHERE cc = ${bankAccount.cc};`

    return await database.executeQuery(query)
}

const findAccountByCc = async (cc) => {
    const query = `SELECT * FROM bankAccount ` +
        `WHERE cc = ${cc};`

    const [dataFromDb] = await database.executeQuery(query)
    return dataFromDb
}

module.exports = {
    saveBankAccount,
    findAccountByUserId,
    updateCreditBalanceAvailable,
    findAccountByCc,
    updateBalance
}