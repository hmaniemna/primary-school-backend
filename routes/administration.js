
const express = require('express');
const router = express.Router();
var adminData = [
    {
        email : 'test@test.com',
        password : 'salma'
    }
]
router.get('/',((req,res,next)=> {
    res.send('welcome to back server');
}));
router.post('/login',((req,res)=> {
    let result = adminData.find((admin)=> admin.email == req.body.email);
    if(result){
        if(result.password==req.body.password) {
            res.status(200).send({
                message : "Successful login!!"
            })
        }else {
            res.status(200).send({
                message : "password incorrect!!"
            })
        }
    }else{
        res.status(404).send({
            message : "admin not found!!"
        })
    }
}));

const adminLogin = require('../controllers/administration');

router.post('/', adminLogin.login);

module.exports = router;