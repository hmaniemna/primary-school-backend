const mongoose = require('mongoose');

const abscenceSchema = mongoose.Schema({
  id: { type: int, required: true },
  id_student: { type: int, required: true },
  day: { type: String, required: true },
  hour_start: { type: time, required: true },
  hour_end: { type: time,required: true },
  
});

module.exports = mongoose.model('Abscence', abscenceSchema);