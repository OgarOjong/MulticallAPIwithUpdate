const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  
    "DB_",
    "DB_USERNAME",
     "DB_PASSWORD",
    {
        host:"",
        dialect:'mysql'
        
    }
)

sequelize.authenticate().then(()=>{
console.log("Connection has been established successfuly");
}).catch((err)=>{
    console.log(`Connection not established ${err}`);
});

module.exports = sequelize;