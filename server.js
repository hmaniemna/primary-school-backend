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
  database: "teacher_db",
  port : 3001
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

}) */

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

app.get('/getTeachers',(req,res)=>{
  const sqlSelect = "SELECT * FROM `teacher_db`.`enseignant`"
  db.query(sqlSelect,(err,result)=>{
    res.send(result); 
  });
},[]);


//CLASS MANAGMENT

app.post('/api/insert',(req,res)=>{

  const name1 = req.body.name
  const level1=req.body.level
  const number1=req.body.number
  const an= "21/22"
  const sqlInsert="INSERT INTO `classe` (`niveau`,`nom`,`nb`,`anneescolaire`) VALUES (?,?,?,?)"
  db.query(sqlInsert,[level1,name1,number1,an],(err,rows)=>{
<<<<<<< HEAD
    console.log('INSERTED CLASS');
    console.log(rows);
=======
    console.log('INSERTED');
    console.log(err)
>>>>>>> b4b94407e03d619f3ef43655390cb21506e8e0b2
  })
});

app.get('/api/get',(req,res)=>{
  const sqlSelect="SELECT * FROM `classe`"
  db.query(sqlSelect,(err,result)=>{
<<<<<<< HEAD
    console.log('SENT CLASS')
=======
    console.log('Data fetched')
>>>>>>> b4b94407e03d619f3ef43655390cb21506e8e0b2
    res.send(result)
  })
})

//app.put()

//DeleteClasse
app.delete('/api/delete/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlDelete = 'DELETE FROM `classe` WHERE `id_classe`=?'
  db.query(sqlDelete,id1,(err,result)=>{
    if (err) console.log(err);
    console.log('class deleted!');
    console.log(id1);
  
    
  })
})

// ADDT
app.post('http://localhost:3000/register',(req,res)=>{
  const genre1 = req.body.genre;
  const prenom1 = req.body.prenom;
  const nom1 = req.body.nom;
  const login1 = req.body.login;
  const mdp1 = req.body.mdp;

  const sqlInsert = 'INSERT INTO `teacher_db`.`enseignant` (`prenom`,`nom`,`login`,`mdp`,`genre`) VALUES (?,?,?,?,?)'
  db.query(sqlInsert,[prenom1,nom1,login1,mdp1,genre1],(err,rows)=>{
    if(err){
      throw err;
    }else{
      console.log('inserted successfully!');
      console.log(rows);
    }
  })
})
// DeleteTeacher
app.delete('/deleteTeacher/:login',(req,res)=>{
  const login1 = req.params.login;
  const sqlDelete = 'DELETE FROM `teacher_db`.`enseignant` WHERE `login`=?'
  db.query(sqlDelete,login1,(err,result)=>{
    if (err) console.log(err);
    console.log('teacher deleted!');
    
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

