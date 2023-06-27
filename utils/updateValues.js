const sequelize = require("sequelize");
const balanceCheck = require("../model/csmartChangeP");

const updateBalance = async (acct_no,cur_bal, desc)=>{

    console.log("Checking the values",acct_no,cur_bal, desc);
    try {

       const updatedAcct = await  balanceCheck.update({current_balance:cur_bal, value_desc:desc},{ where: { account_no: acct_no } });
       console.log("Update Here",updatedAcct);
    } catch(err) {
        console.log(err)
    }
}
//updateBalance(10009199,-1.327057987629E11,"Day_Bundle_Data_Bank")

module.exports = updateBalance;
