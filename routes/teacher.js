const express = require('express');

const router = express.Router();
router.get('/',((req,res,next)=> {
    res.send('welcome to back server');
}));
router.post('/Login/LoginAdmin',((req,res)=> {

}))
module.exports = router;