/*var dbConn=require('../config/db.config');

var Classes = function (Class) {
  this.niveau= Class.niveau;
  this.nom=Class.nom;
  this.nb=Class.nb;

}

Class.getAllClasses=(result)=>{
  dbConn.query('SELECT * FROM `classe`',(err,res)=>{
    if(err){
      console.log('error while fetching classes: ', err);
      result(NULL,err);
    }else{
      console.log('Classes fetched Succssefully ');
      result(NULL,res);
    }
  })
}

module.exports= Classes;*/