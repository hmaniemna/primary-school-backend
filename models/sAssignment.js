const mongoose = require('mongoose');

const asgStudentSchema = mongoose.Schema({
 id_asgStudent:  {type: Number, required: true, unique: true},
id_student: {type :Number,  required: true},
id_class:{ type: Number, required: true}
});

module.exports = mongoose.model('AsgStudent', asgStudentSchema);