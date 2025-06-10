const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const db=require('./conn');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});




app.post('/register',(req,res)=>{
     const{name,email,contact,qualification,dob}=req.body;
	 
	
	 const sql=`INSERT INTO users(name,email,contact,qualification,dob)values(?,?,?,?,?)`;
     db.query(sql,[name,email,contact,qualification,dob],(err,result)=>{
	     if(err){
		  console.error("Error inserting data: ",err);
		  return res.status(500).send("Registration failed");
		 }
		 res.send(`Registration success..!`);
	 });
	
});
app.listen(3000,()=>{
    console.log("Server running at");

});