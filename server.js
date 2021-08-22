const express = require('express');
const bodyParser = require('body-parser');
const mysql= require('mysql'); 
const cors = require("cors");

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


//CLASS MANAGMENT

//import class router!
//const classRoute= require('./routes/class')

//create class router!
//app.use('/api/class',classRoute)

app.post('/api/insert',(req,res)=>{

  const name1 = req.body.name
  const level1=req.body.level
  const number1=req.body.number
  const an="21/22"
  const sqlInsert="INSERT INTO `classe` (`niveau`,`nom`,`nb`,`anneescolaire`) VALUES (?,?,?,?)"
  db.query(sqlInsert,[level1,name1,number1,an],(err,rows)=>{
    console.log('INSERTED');
  })
});

app.get('/api/get',(req,res)=>{
  const sqlSelect="SELECT * FROM `classe`"
  db.query(sqlSelect,(err,result)=>{
    console.log('SENT')
    res.send(result)
  })
})

//app.put()

//app.delete()

// ADDT
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
})

app.listen(port);
console.log('app is listening on port'+port);


