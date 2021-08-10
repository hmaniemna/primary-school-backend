const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  idSubject: { type: Number, required: true, unique: true  },
  level : { type: Number, required: true },
  libel: { type: String, required: true }
});

module.exports = mongoose.model('Subject', subjectSchema);