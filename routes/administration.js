
const express = require('express');
const router = express.Router();

const adminLogin = require('../controllers/administration');

router.post('/', adminLogin.login);

module.exports = router;