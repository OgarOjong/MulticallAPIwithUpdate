const express = require("express");
const getAccount = require("./model/test");
const covalenceReq = require("./utils/getBalance");
let covCall = new covalenceReq();
const updateBalance = require("./utils/updateValues");

const app = express();

  // Create an array to store all the update operations
  let updateOperations = [];


const generateBalance = async () => {
  let accounts = await getAccount();

  for (let eachAccount of accounts) {
    try {
      let resCall = await covCall.makeCall(eachAccount);
      

 
      const balanceArray =
        resCall.response.result.arguments.BALANCE_GROUPS.BALANCES;

        console.log("Checking all",balanceArray)
      for (let value of balanceArray) {
        if (value.RESOURCE_NAME === "Main Data Balance") {
           console.log("Here is the value",value);
          const updated = await updateBalance(
            eachAccount.account_no,
            value.CURRENT_BAL,
            value.DESCR
          );
          console.log(updated);
          // console.log(value.CURRENT_BAL, value.DESCR);
          //console.log(typeof value.CURRENT_BAL)
        }else {
            console.log("Here's the problem unresolved.")
            return Promise.resolve(); // Skip this iteration
        }
      }
      updateOperations.push(...updatePromises);

    } catch (error) {}
  }
};

generateBalance();
