const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
  idClass: { type: Number, required: true, unique: true  },
  level : { type: Number, required: true },
  name : { type: String, required: true },
  number: { type:String, required: true },
  schoolYear: { type:String, required: true } 
});

module.exports = mongoose.model('Class', classSchema);