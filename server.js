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
/*****/
//get id_enseignant
app.get('/getIdteacher',(req,res)=>{
  const login1 = req.body.login;
  const sqlSelect = "SELECT `id_enseignant` FROM `enseignant` WHERE `login` = ? "
  db.query(sqlSelect,login1,(err,result)=>{
    if(err) console.log(err);
    console.log('nheb nmout :)')
  });
});
//get id_classe
app.get('/getIdclass',(req,res)=>{
  const nom1 = req.body.nom;
  const niveau1 = req.body.niveau;
  const sqlSelect = "SELECT `id_classe` FROM `classe` WHERE (`nom`,`niveau`) VALUES (?,?) "
  db.query(sqlSelect,[nom1,niveau1],(err,result)=>{
    res.send(result); 
  });
});
//get id_matiere
app.get('/getIdsubject',(req,res)=>{
  const libelle1 = req.body.libelle;
  const sqlSelect = "SELECT `id_matiere` FROM `classe` `libelle` = ? "
  db.query(sqlSelect,libelle1,(err,result)=>{
    res.send(result); 
  });
});
//affect Teacher
app.post('/affectTeacher',(req,res)=>{
  const id1 = req.body.id_enseignant;
  const id2 = req.body.id_classe;
  const id3 = req.body.id_matiere;
});
/******/

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

//Students Management
//ADD Student
app.post('/api/insertStudent',(req,res)=>{
  console.log('here')
  const id1 = req.params.id;
  const fisrtname1=req.body.firstname
  const lastname1=req.body.lastname
  const gender1=req.body.gender
  const birthdate1=req.body.birthdate
  const inscri1=1
  const sqlInsert="INSERT INTO `eleve` (`prenom`,`nom`,`sexe`,`date_naissance`,`num_inscription`) VALUES (?,?,?,?,?)"
  db.query(sqlInsert,[fisrtname1,lastname1,gender1,birthdate1,id1],(err,result)=>{
    if(err) console.log(err);
    console.log("student inserted!!!")
    console.log(result);
  })
});
//get students
app.get('/api/getStudents',(req,res)=>{
  const sqlSelect="SELECT * FROM `eleve`"
  db.query(sqlSelect,(err,result)=>{
    console.log('students sent')
    console.log('Data fetched')
    res.send(result)
  })
})
//Delete Students
app.delete('/api/deleteStudent/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlDelete = 'DELETE FROM `eleve` WHERE `id_eleve`=?'
  db.query(sqlDelete,id1,(err,result)=>{
    if (err) console.log(err);
    console.log('Student deleted!');
    console.log(id1);  
  })
})
//Update student name
app.put('/updateStudentFirstName',(req,res)=>{
  const id=req.body.id_eleve
  const fisrtname1 = req.body.firstname
  const sqlUpdate = 'UPDATE `eleve` SET `prenom`=? WHERE `id_eleve`=?'
  db.query(sqlUpdate,[fisrtname1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Student name UPDATED!!');
    console.log(result)
  })
})
//Update student lastname
app.put('/updateStudentLastname',(req,res)=>{
  const id=req.body.id_matiere
  const lastname1 = req.body.lastname
  const sqlUpdate = 'UPDATE `eleve` SET `nom`=? WHERE `id_eleve`=?'
  db.query(sqlUpdate,[lastname1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Student lastname UPDATED!!');
    console.log(result)
  })
})
//Update student gender
app.put('/updateStudentGender',(req,res)=>{
  const id=req.body.id_matiere
  const gender1 = req.body.gender
  const sqlUpdate = 'UPDATE `eleve` SET `sexe`=? WHERE `id_eleve`=?'
  db.query(sqlUpdate,[gender1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Student gender UPDATED!!');
    console.log(result)
  })
})
//Update student birthDate
app.put('/updateStudentBirthdate',(req,res)=>{
  const id=req.body.id_matiere
  const birthdate1 = req.body.birthdate
  const sqlUpdate = 'UPDATE `eleve` SET `date_naissance`=? WHERE `id_eleve`=?'
  db.query(sqlUpdate,[birthdate1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Student birthdate UPDATED!!');
    console.log(result)
  })
})


//Subject Managment
//ADDS
app.post('/api/insertSub',(req,res)=>{

  const wording1 = req.body.wording
  const level1=req.body.level
  const sqlInsert="INSERT INTO `matiere` (`niveau`,`libelle`) VALUES (?,?)"
  db.query(sqlInsert,[level1,wording1],(err,rows)=>{
    console.log('INSERTED Subject');
    console.log(rows);
  })
});

//get subjects
app.get('/api/getSub',(req,res)=>{
  const sqlSelect="SELECT * FROM `matiere`"
  db.query(sqlSelect,(err,result)=>{
    console.log('SENT Subjects')
    console.log('Data fetched')
    res.send(result)
  })
})
//Delete Sub
app.delete('/api/deleteSub/:id',(req,res)=>{
  const id1 = req.params.id;
  const sqlDelete = 'DELETE FROM `matiere` WHERE `id_matiere`=?'
  db.query(sqlDelete,id1,(err,result)=>{
    if (err) console.log(err);
    console.log('subj deleted!');
    console.log(id1);  
  })
})
//update subject level
app.put('/updateSubjectLevel',(req,res)=>{
  const id=req.body.id_matiere
  const level1 = req.body.level
  const sqlUpdate = 'UPDATE `matiere` SET `niveau`=? WHERE `id_matiere`=?'
  db.query(sqlUpdate,[level1,id],(err,result)=>{
    if (err) console.log(err);
    console.log('Subj Level UPDATED!!');
    console.log(result)
  })
})
//Update Subject wording 
app.put('/updateSubjectWording',(req,res)=>{
  const id=req.body.id_matiere
  const wording1 = req.body.wording
  const sqlUpdate = 'UPDATE `matiere` SET `libelle`=? WHERE `id_matiere`=?'
  db.query(sqlUpdate,[wording1,id],(err,result)=>{
    if (err) console.log(err);
    console.log(id)
    console.log('subject wording UPDATED!!');
    console.log(result)
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
console.log('app is listening on port  '+port);

