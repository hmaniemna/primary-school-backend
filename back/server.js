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
/*app.post('/api/insert',(req,res)=>{
  const sqlInsert="INSERT INTO classe (niveau,nom,nb,anneescolaire) VALUES (?,?,?,?)"
  db.query(sqlInsert,[n,l,nb,a],(err,res)=>{
  })
})
app.get('/',(req,res)=>{
  const sqlInsert = "INSERT INTO `teacher_db`.`enseignant` (`genre`,`prenom`,`nom`,`login`,`mdp`) VALUES ('female','salma','tek','salmatek','fff');"
  db.query(sqlInsert,(err,result)=>{
    console.log("inserted");
    res.send("hello world!!");
  })

})*/

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




//CLASS MANAGMENT
//ADDC
app.post('/api/insert',(req,res)=>{

  const name1 = req.body.name
  const level1=req.body.level
  const number1=req.body.number
  const an= "21/22"
  const sqlInsert="INSERT INTO `classe` (`niveau`,`nom`,`nb`,`anneescolaire`) VALUES (?,?,?,?)"
  db.query(sqlInsert,[level1,name1,number1,an],(err,rows)=>{
    console.log('INSERTED CLASS');
    console.log(rows);
    console.log('INSERTED');
    console.log(err)
  })
});
//get classes
app.get('/api/get',(req,res)=>{
  const sqlSelect="SELECT * FROM `classe`"
  db.query(sqlSelect,(err,result)=>{
    console.log('SENT CLASS')
    console.log('Data fetched')
    res.send(result)
  })
})
//Delete class 
app.delete('/api/delete/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlDelete = 'DELETE FROM `classe` WHERE `id_classe`=?'
  db.query(sqlDelete,id1,(err,result)=>{
    if (err) console.log(err);
    console.log('class deleted!');
    console.log(id1);  
  })
})
//update Class
app.put('/updateClassname',(req,res)=>{
  const id=req.body.id_classe
  const name1 = req.body.name
  const level1=req.body.level
  const number1=req.body.number
  const an= req.body.anneescolaire
  const sqlUpdate = 'UPDATE `classe` SET `nom`=? WHERE `id_classe`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Class UPDATED!!');
  })
})


// ADDT
app.post('/register',(req,res)=>{
  const genre1 = req.body.genre;
  const prenom1 = req.body.prenom;
  const nom1 = req.body.nom;
  const login1 = req.body.login;
  const mdp1 = req.body.mdp;

  const sqlInsert = 'INSERT INTO `enseignant` (`prenom`,`nom`,`login`,`mdp`,`genre`) VALUES (?,?,?,?,?)'
  db.query(sqlInsert,[prenom1,nom1,login1,mdp1,genre1],(err,rows)=>{
    if(err){
      console.log(err);
      throw err;
    }else{
      console.log('inserted successfully!');
      console.log(rows);
    }
  })
})
//get Teacher
app.get('/getTeachers',(req,res)=>{
  const sqlSelect = "SELECT * FROM `enseignant`"
  db.query(sqlSelect,(err,result)=>{
    res.send(result); 
  });
},[]);

// DeleteTeacher
app.delete('/deleteTeacher/:login',(req,res)=>{
  const login1 = req.params.login;
  const sqlDelete = 'DELETE FROM `enseignant` WHERE `login`=?'
  db.query(sqlDelete,login1,(err,result)=>{
    if (err) console.log(err);
    console.log('teacher deleted!');  
    console.log(id_classe);
  })
})
//update Teacher
app.put('/updateFirstname',(req,res)=>{
  const prenom1 = req.body.prenom;
  const login1 = req.body.login;
  const sqlUpdate = 'UPDATE `enseignant` SET `prenom`=? WHERE `login`=?'
  db.query(sqlUpdate,[prenom1,login1],(err,result)=>{
    if (err) console.log(err);
    console.log('teacher UPDATED!!');
    
  })
})




app.listen(port);
console.log('app is listening on port'+port);



/*app.get('/',(req,res)=>{
  const sqlInsert= "INSERT INTO `Teachers` (`firstName`, `lastName`, `userName`, `password`,`gender`) VALUES ('sara', 'oualha','saraou','azerty','female); "
  db.query(sqlInsert, (err,result)=>{
    res.send('hello page !!');
  })  
});
}
)
*/

