const mongoose = require('mongoose');

const timetableSchema = mongoose.Schema({
 id_timetable:{type :Number,  required: true},
 day: {type :String,  required: true},
 start_hour: {type :Time,  required: true},
ending_hour:{type :time,  required: true},
id_teacher:{type :Number,  required: true},
id_class:{type :Number,  required: true},
id_subject:{type :Number,  required: true},
id_classroom:{type :Number,  required: true},
schoolyear:{type :String,  required: true}
});

module.exports = mongoose.model('Classroom', TimetableSchema);