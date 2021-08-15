const express = require('express');
const app=express();
const mysql= require('mysql')

var connection= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salma",
  database: "teacher_db",
  port: "3001"
})
const db= mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});





connection.connect((err)=>{
  if(err){
    throw err;
  }else{
    console.log("connected");
  }
})



connection.query('CREATE TABLE IF NOT EXISTS `salle` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
})
connection.query('INSERT INTO `salle` (`libelle`) VALUES ("salma")',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('INSERT');
    console.log(rows);
  }
})
const port = process.env.PORT || 3000;
app.listen(port);
console.log('app is listening on port'+port);

app.get('/',(req,res)=>{
  const sqlInsert= "INSERT INTO `Teachers` (`firstName`, `lastName`, `userName`, `password`,`gender`) VALUES ('sara', 'oualha','saraou','azerty','female); "
  db.query(sqlInsert, (err,result)=>{
    res.send('hello page !!');
  })  
});

app.listen(3001,()=>{
  console.log('running on port 3001');
});

