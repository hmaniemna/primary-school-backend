const bcrypt = require('bcrypt');
const Admin = require('../models/administration');
const jwt = require('jsonwebtoken');
const dataAdmin=require('./dataAdmin')

exports.login = (req, res, next) => {
    Admin.findOne({ email: dataAdmin.sara.email }).then(
      (Admin) => {
        if (!Admin) {
          return res.status(401).json({
            error: new Error('Admin not found!')
          });
        }
        bcrypt.compare(req.body.password, dataAdmin.sara.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { AdminId: Admin._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              AdminId: Admin._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
}