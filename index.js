const express = require("express");
const getAccount = require("./model/test");
const covalenceReq = require("./utils/getBalance");
let covCall = new covalenceReq();

const app = express();



const generateBalance = async () => {
    let accounts = await getAccount();
    let finalValue = []; // Initialize an array to store the objects
  
    for (let eachAccount of accounts) {
      let resCall = await covCall.makeCall(eachAccount);
      const balanceArray = resCall.response.result.arguments.BALANCE_GROUPS.BALANCES;
      let obj = balanceArray.find(val => {val.RESOURCE_NAME === 'Main Data Balance'
      return val
    });
    console.log(obj);
  
      
  }
}