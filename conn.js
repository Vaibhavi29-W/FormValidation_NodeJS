const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
	user:'root',
	password:'root123',
	database:'registrationform'
});
connection.connect((err)=>{
  if(err){
	  throw err;
  }else{
     console.log("connected to mysql");
   }
   

});
module.exports=connection;