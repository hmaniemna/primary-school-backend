const express = require('express');
const bodyParser = require('body-parser');
const mysql= require('mysql');
<<<<<<< HEAD

const cors = require("cors");

=======
const bodyparser = require('body-parser');
//const cors = require("cors");
>>>>>>> 4966353b39af0e0ec8dd6c2b1eca25a24392fcf8
const app=express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true})); 


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "salma",
  database: "mydb",
  port : 3306
})
app.post('/api/insert',(req,res)=>{
  const sqlInsert="INSERT INTO classe (niveau,nom,nb,anneescolaire) VALUES (?,?,?,?)"
  db.query(sqlInsert,[n,l,nb,a],(err,res)=>{
  })
})
/*var connection= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salma",
  database: "teacher_db",
  port:"3001"
})

db.connect((err)=>{
  if(err){
    throw err;
  }else{
    console.log("connected");
  }
})
/*
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
=======
})*/
db.query('CREATE TABLE IF NOT EXISTS `test2` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
>>>>>>> 4966353b39af0e0ec8dd6c2b1eca25a24392fcf8
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
})
/*

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

/*connection.query('INSERT INTO `salle` (`libelle`) VALUES ("salma")',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('INSERT');
    console.log(rows);

  }
})*/
<<<<<<< HEAD

/*app.post('/',(req,res)=>{
  const genre = req.body.genre;
  const prenom = req.body.prenom;
  const nom = req.body.nom;
  const login = req.body.login;
  const mdp = req.body.mdp;
  const sqlInsert = 'INSERT INTO `enseignant` (genre,prenom,nom,login,mdp) VALUES (?,?,?,?,?)'
  db.query(sqlInsert,[genre,prenom,nom,login,mdp],(err,result)=>{
      console.log(result);
  })
});*/

/*app.get('/register',(req,res)=>{
  const sqlInsert = 'INSERT INTO `enseignant` (genre,prenom,nom,login,mdp) VALUES ("female","salma","tek","salmatek","hhh")'
=======
/*db.query('CREATE TABLE IF NOT EXISTS `test1` (`id_salle` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,`libelle` VARCHAR(100) NOT NULL)',(err,rows)=>{
  if(err){
    throw err;
  }else{
    console.log('DATA SET');
    console.log(rows);
  }
})*/
app.get('/',(req,res)=>{
  const sqlInsert = `INSERT INTO teacher_db.enseignant (genre,prenom,nom,login,mdp) VALUES ('female',salma','tek,'salmatek',fff');`
>>>>>>> 4966353b39af0e0ec8dd6c2b1eca25a24392fcf8
  db.query(sqlInsert,(err,result)=>{
    console.log("inserted");
    res.send("hello world!!");
  })
<<<<<<< HEAD
})*/
=======
})
//get elements from table salle 
app.get('/salle',(res,req)=>{
  db.query('SELECT * FROM salle',(err,rows,fields)=>{
    if (!err){
      console.log(rows)
    }else{
      console.log(err)
    }
  })
})

/*app.post("http://localhost3000/register",(req,res)=>{
>>>>>>> 4966353b39af0e0ec8dd6c2b1eca25a24392fcf8

app.post('http://localhost:3000/register',(req,res)=>{
  const genre1 = req.body.genre;
  const prenom1 = req.body.prenom;
  const nom1 = req.body.nom;
  const login1 = req.body.login;
  const mdp1 = req.body.mdp;
  const sqlInsert = 'INSERT INTO `enseignant` (`prenom`,`nom`,`login`,`mdp`,`genre`) VALUES (?,?,?,?,?)'
  db.query(sqlInsert,[prenom1,nom1,login1,mdp1,genre1],(err,rows)=>{
    if(err){
      throw err;
    }else{
      console.log('INSERT');
      console.log(rows);
  
    }
  })
});
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

