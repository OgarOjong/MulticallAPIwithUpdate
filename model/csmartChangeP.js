const {Model,DataTypes} = require("sequelize");
const sequelize = require("../connection/index");

class balance_check extends Model{

}


balance_check.init({
  account_no:{
        type:DataTypes.STRING,
        primaryKey:true,
  },
  msisdn:{
    type:DataTypes.STRING,
  },
  current_balance:{
    type:DataTypes.DECIMAL(20,2)
  },
  value_desc:{
    type:DataTypes.STRING
  }
    
}, {
    sequelize,
    tableName:'balance_check',
    timestamps:false

});


module.exports = balance_check;
  