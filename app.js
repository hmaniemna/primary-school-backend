const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const abscenceRoutes = require('./routes/abscence');
const adminRoutes = require('./routes/administration');
const classRoutes = require('./routes/class');
const classroomRoutes = require('./routes/classroom');
const sAssignmentRoutes = require('./routes/sAssignment');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const tAssignmentRoutes = require('./routes/tAssignment');
const teacherRoutes = require('./routes/teacher');
const timeTableRoutes = require('./routes/timeTable');



const app = express();
mongoose.connect('mongodb+srv://salma:wDBjx9Uavxp0f4an@cluster0.nk1tj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true })
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
app.use('/api/admin', adminRoutes);
app.use('/api/class', classRoutes);
app.use('/api/classroom', classroomRoutes);
app.use('/api/sAssignment', sAssignmentRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/tAssignment', tAssignmentRoutes);
app.use('/', require('./routes/teacher'));
app.use('/login', require('./routes/administration'));
app.use('/api/timeTable', timeTableRoutes);
app.use('/api',require('./routes/hello'));
app.use('/Login/LoginAdmin',adminRoutes);



module.exports = app;