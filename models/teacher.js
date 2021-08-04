const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
  idTeacher: { type: number, required: true },
  type: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  login: { type: Number, required: true },
  password: { type: Number, required: true }
});

module.exports = mongoose.model('Teacher', teacherSchema);