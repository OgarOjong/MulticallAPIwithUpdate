const {Sequelize, Op}= require("sequelize");
const balance_check = require("./csmartChangeP");

const getAccounts = async()=>{

    let accounts = await balance_check.findAll({
        where:{
            account_no:{
                [Op.in]:[10009199,10019641,10021528]
            }
        }

    });
    const acct = accounts.map((val)=>{
        const eachAcct = val.dataValues;
        let stringWithQuotes = eachAcct.msisdn;
        let stringWithoutQuote = stringWithQuotes.replace(/'/g, '');
        let accts = {account_no:eachAcct.account_no, msisdn:stringWithoutQuote};
        return accts;
    });
    return acct
    
}
getAccounts();
module.exports = getAccounts



