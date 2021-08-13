const express = require('express');
const app=express();
const mysql= require('mysql')

const db= mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});



app.get('/',(req,res)=>{
  const sqlInsert= "INSERT INTO `Teachers` (`firstName`, `lastName`, `userName`, `password`,`gender`) VALUES ('sara', 'oualha','saraou','azerty','female); "
  db.query(sqlInsert, (err,result)=>{
    res.send('hello page !!');
  })  
});

app.listen(3001,()=>{
  console.log('running on port 3001');
});