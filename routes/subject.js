const express = require('express');

const router = express.Router();

const Subject = require('../models/subject');
const subjectCtrl = require('../controllers/subject');
const auth = require('../middleware/auth');
router.post('/',auth, subjectCtrl.createSubject);
router.get('/:id',auth, subjectCtrl.getOneSubject);
router.put('/:id',auth,  subjectCtrl.modifySubject);
router.delete('/:id',auth, subjectCtrl.deleteSubject);
router.get('/',auth, subjectCtrl.getAllSubjects);


module.exports = router;