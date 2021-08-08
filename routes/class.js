const express = require('express');

const router = express.Router();

const Class = require('../models/class');
const classCtrl = require('../controllers/class');
const auth = require('../middleware/auth');
router.post('/',auth, classCtrl.createClass);
router.get('/:id',auth, classCtrl.getOneClass);
router.put('/:id',auth,  classCtrl.modifyClass);
router.delete('/:id',auth, classCtrl.deleteClass);
router.get('/',auth, classCtrl.getAllClasses);


module.exports = router;