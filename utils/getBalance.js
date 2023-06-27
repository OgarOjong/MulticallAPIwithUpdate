const axios = require('axios');
//const logger = require("../logger/index");

class covalenceCall {

async makeCall(data){
    if(!data){
        return "No data passed"
    }
    //console.log(data);
    let {account_no,msisdn} = data;
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjkzMiIsImlhdCI6MTY2NjcxNDA1MiwiZXhwIjoxNjY2NzE0NDUyfQ.SOTAF_5da506OEicKwi8lM3z6D2Y8pCDYiYU-xQRqiUrN8yYwmjGu1wiilJ_Wysmz81Aq9v3p6AOtOE-fnVxJw';

    let options = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://spectselfcare.spectranet.com.ng:8088/brm/balance?accountNo=${account_no}&deviceId=${msisdn}&token=${token}`,
        headers: { }
      };
     //console.log(options.url);

      try{
        const response =  await axios.request(options);
        console.log("inside success block");
       // console.log(response.data);
        return response.data || {status:true,message:"Axios error from try "};
      }catch(err){

        console.log(err);
       // const {config} = err;
      //  const erros=  JSON.stringify(err)
        //console.log("From the make Calls"+" "+err);
       //console.log("From the make Call"+err.config.response[0]);
      //console.log("config of config"+err.config)
      //logger.error(err.response.data);
     
  
      }
}
}
module.exports = covalenceCall;