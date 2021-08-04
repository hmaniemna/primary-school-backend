const mongoose = require('mongoose');

const TAssignmentSchema = mongoose.Schema({
  idAff: { type: Number, required: true, unique: true  },
  idTeacher : { type: Number, required: true },
  idSubject : { type: Number, required: true },
  idClass: { type:Number, required: true }

});

module.exports = mongoose.model('TAssignment', TAssignmentSchema);