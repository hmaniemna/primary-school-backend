const express = require('express');
const mysql= require('mysql');
<<<<<<< HEAD
=======
const cors = require("cors");
>>>>>>> dc2e949f38b733bda508b2211a42e4469a4aecb8
const app=express();
const port = process.env.PORT || 3000;
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "salma",
  database: "teacher_db",
  port : 3001
})

/*var connection= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salma",
  database: "teacher_db",
  port:"3001"
})

connection.connect((err)=>{
  if(err){
    throw err;
  }else{
    console.log("connected");
  }
})

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

connection.query('CREATE TABLE IF NOT EXISTS `salle` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
<<<<<<< HEAD
})
connection.query('CREATE TABLE IF NOT EXISTS `test1` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
})
=======

  if (port >= 0) {
    return port;
  }
  return false;
});
app.use('/api/',require('./routes/hello'))
//const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;

}
>>>>>>> dc2e949f38b733bda508b2211a42e4469a4aecb8

/*connection.query('INSERT INTO `salle` (`libelle`) VALUES ("salma")',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('INSERT');
    console.log(rows);

  }
})*/
db.query('CREATE TABLE IF NOT EXISTS `test1` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
})
app.get('/',(req,res)=>{
  const sqlInsert = `INSERT INTO teacher_db.enseignant (genre,prenom,nom,login,mdp) VALUES ('female',salma','tek,'salmatek',fff');`
  db.query(sqlInsert,(err,result)=>{
    console.log("inserted");
    res.send("hello world!!");
  })
})

/*app.post("http://localhost3000/register",(req,res)=>{

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const passwd = req.body.passwd;
  const gender = req.body.gen;
  

  connection.query(
    "INSERT INTO `teacher_db`.`enseignant` (`genre`, `prenom`, `nom`, `login`, `mdp`) VALUES (?,?,?,?,?)",
    [gender,firstname,lastname,username,passwd],
    (err,result)=>{
      console.log(err);
    }
  )
})*/
app.listen(port);
console.log('app is listening on port'+port);


/*app.get('/',(req,res)=>{
  const sqlInsert= "INSERT INTO `Teachers` (`firstName`, `lastName`, `userName`, `password`,`gender`) VALUES ('sara', 'oualha','saraou','azerty','female); "
  db.query(sqlInsert, (err,result)=>{
    res.send('hello page !!');
  })  
});

app.listen(3001,()=>{
  console.log('running on port 3001');
});*/
}
