const mongoose = require('mongoose');

const adminstartionSchema = mongoose.Schema({
 id_dir:{type :Number,  required: true, unique: true},
 type: {type :String,  required: true},
 lastname: {type :String,  required: true},
 firstname:{type :String,  required: true},
 email:{type :String,  required: true, unique:true},
 pwd:{type :String,  required: true}
});


module.exports = mongoose.model('Administration', adminstartionSchema);