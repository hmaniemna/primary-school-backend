const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
 id_student:  {type: Number, required: true, unique: true},
firstName: {type :String,  required: true},
lastName:{ type: String, required: true},
gender: {type:Number, required:true},
birthDate: {type:Date, required : true},
Inscription_nb:{type: Number, required: true}
});
module.exports = mongoose.model('Student', studentSchema);