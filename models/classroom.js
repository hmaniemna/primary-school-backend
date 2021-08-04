const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
  idClassroom: { type: number, required: true },
  libel: { type: String, required: true }
});

module.exports = mongoose.model('Classroom', classroomSchema);