const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const abscenceRoutes = require('./routes/abscence');
const adminRoutes = require('./routes/administration');
const classRoutes = require('./routes/class');
const classroomRoutes = require('./routes/classroom');
const sAssignmentRoutes = require('./routes/aAssignment');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const tAssignmentRoutes = require('./routes/tAssignment');
const teacherRoutes = require('./routes/teacher');
const timeTableRoutes = require('./routes/timeTable');


const app = express();
mongoose.connect('mongodb+srv://sara:sara.1999.@cluster0.lm7i1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
  console.log('successfuly connected to MongoDB Atlas');
})
.catch((error) => {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/abscence', abscenceRoutes);
app.use('/api/auth', classRoutes);

module.exports = app;