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
app.put('/updateClassName',(req,res)=>{
  const id=req.body.id_classe
  const name1 = req.body.name
  const sqlUpdate = 'UPDATE classe SET `nom`=? WHERE `id_classe`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('ClassName UPDATED!!');
    console.log(result)
  })
})
app.put('/updateClassLevel',(req,res)=>{
  const id=req.body.id_classe
  const level1=req.body.level
  const sqlUpdate = 'UPDATE classe SET `niveau`=? WHERE `id_classe`=?'
  db.query(sqlUpdate,[level1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('ClassLevel UPDATED!!');
    console.log(result)
  })
})
app.put('/updateClassNumber',(req,res)=>{
  const id=req.body.id_classe
  const number1=req.body.number
  const sqlUpdate = 'UPDATE classe SET `nb`=? WHERE `id_classe`=?'
  db.query(sqlUpdate,[number1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('ClassNumber UPDATED!!');
    console.log(result)
  })
})
app.put('/updateClassYear',(req,res)=>{
  const id=req.body.id_classe
  const an= req.body.year
  const sqlUpdate = 'UPDATE classe SET `anneescolaire`=? WHERE `id_classe`=?'
  db.query(sqlUpdate,[an,id],(err,result)=>{
    if (err) console.log(err);
    console.log('ClassYear UPDATED!!');
    console.log(result)
  })
})

//Loginteacher
app.post('/loginTeacher',(req,res)=>{
  const login1 = req.body.login;
  const mdp1 = req.body.mdp;
  const sqlLogin="SELECT * FROM `enseignant` WHERE `login` = ? AND `mdp` = ? "
  db.query(sqlLogin,[login1,mdp1],(err,result) =>  {
    if (err) {
      res.send({err:err})
    }
    if (result.length>0) {
      res.send(result);
    } else {
      res.send({message:"WRONG username/password!"});
    }
  })
})

//loginAdmin
app.post('/loginAdmin',(req,res)=>{
  const email1 = req.body.email;
  const mdp1 = req.body.mdp;
  const sqlLogin="SELECT * FROM `direction` WHERE `email` = ? AND `mdp` = ? "
  db.query(sqlLogin,[email1,mdp1],(err,result) =>  {
    if (err) {
      res.send({err:err})
    }
    if (result.length>0) {
      res.send(result);
    } else {
      res.send({message:"WRONG email/password!"});
    }
  })
})




// ADDT
app.post('/registerTeacher',(req,res)=>{
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
//getAdminInfo
app.get('/getAdminInfo',(req,res)=>{
  const sqlSelect = "SELECT * FROM `direction`"
  db.query(sqlSelect,(err,result)=>{
    res.send(result); 
  });
});
//update admin
app.put('/updateAdminFirstname',(req,res)=>{
  const id=req.body.id_dir
  const name1 = req.body.firstname
  const sqlUpdate = 'UPDATE direction SET `prenom`=? WHERE `id_dir`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('AdminFirstname UPDATED!!');
    console.log(result)
  })
})
app.put('/updateAdminLastname',(req,res)=>{
  const id=req.body.id_dir
  const name1 = req.body.lastname
  const sqlUpdate = 'UPDATE direction SET `nom`=? WHERE `id_dir`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('AdminLastname UPDATED!!');
    console.log(result)
  })
})
app.put('/updateAdminEmail',(req,res)=>{
  const id=req.body.id_dir
  const email1 = req.body.email
  const sqlUpdate = 'UPDATE direction SET `email`=? WHERE `id_dir`=?'
  db.query(sqlUpdate,[email1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('AdminEmail UPDATED!!');
    console.log(result)
  })
})
app.put('/updateAdminPassword',(req,res)=>{
  const id=req.body.id_dir
  const mdpl1 = req.body.password
  const sqlUpdate = 'UPDATE direction SET `mdp`=? WHERE `id_dir`=?'
  db.query(sqlUpdate,[mdp1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('AdminPassword UPDATED!!');
    console.log(result)
  })
})
//get Teacher
app.get('/getTeachers',(req,res)=>{
  const sqlSelect = "SELECT * FROM `enseignant`"
  db.query(sqlSelect,(err,result)=>{
    res.send(result); 
  });
});
//get one teacher 
app.get('/getTeacher/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlSelect = "SELECT `id_enseignant`,`prenom`,`nom`,`login`,`mdp` FROM `enseignant` WHERE `id_enseignant`=?"
  db.query(sqlSelect,id1,(err,result)=>{
    res.send(result); 
    console.log(id1)
    console.log("??????????????????????");
  });
});

// DeleteTeacher
app.delete('/deleteTeacher/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlDelete = 'DELETE FROM `enseignant` WHERE `id_enseignant`=?'
  db.query(sqlDelete,id1,(err,result)=>{
    if (err) console.log(err);
    console.log('teacher deleted!');
    console.log(result);  
  })
})
//update
app.put('/teachers/:id',(req,res)=>{
  const id=req.body.id;
  const name1 = req.body.firstname
  const name2 = req.body.lastname
  const uname = req.body.username
  const pwd = req.body.password
  const sqlUpdate = 'UPDATE enseignant SET `prenom`=?,`nom`=?,`login`=?,`mdp`=?  WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[name1,name2,uname,pwd,id],(err,result)=>{
    if (err) console.log(err);
    console.log('teacher updatet completly!');
    console.log(result)
  })
})
//update Teacher
app.put('/updateTeacherFirstname',(req,res)=>{
  const id=req.body.id_enseignant
  const name1 = req.body.firstname
  const sqlUpdate = 'UPDATE enseignant SET `prenom`=? WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('TeacherFirstname UPDATED!!');
    console.log(result)
  })
})
app.put('/updateTeacherLastname',(req,res)=>{
  const id=req.body.id_enseignant
  const name1 = req.body.lastname
  const sqlUpdate = 'UPDATE enseignant SET `nom`=? WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[name1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('TeacherLastname UPDATED!!');
    console.log(result)
  })
})
app.put('/updateTeacherGender',(req,res)=>{
  const id=req.body.id_enseignant
  const gender1 = req.body.gender
  const sqlUpdate = 'UPDATE enseignant SET `genre`=? WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[gender1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('TeacherGender UPDATED!!');
    console.log(result)
  })
})
app.put('/updateTeacherUsername',(req,res)=>{
  const id=req.body.id_enseignant
  const username1 = req.body.username
  const sqlUpdate = 'UPDATE enseignant SET `login`=? WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[username1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('TeacherUsername UPDATED!!');
    console.log(result)
  })
})
app.put('/updateTeacherPassword',(req,res)=>{
  const id=req.body.id_enseignant
  const mdp1 = req.body.password
  const sqlUpdate = 'UPDATE enseignant SET `mdp`=? WHERE `id_enseignant`=?'
  db.query(sqlUpdate,[mdp1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('TeacherPassword UPDATED!!');
    console.log(result)
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

