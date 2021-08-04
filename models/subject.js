const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  idSubject: { type: number, required: true, unique: true  },
  level : { type: number, required: true },
  libel: { type: String, required: true }
});

module.exports = mongoose.model('Subject', subjectSchema);