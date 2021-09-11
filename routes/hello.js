const express = require('express');

const router = express.Router();
const Hello = require('../controllers/hello');
router.get('/', Hello.hello);
module.exports = router;