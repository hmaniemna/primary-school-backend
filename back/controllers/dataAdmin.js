const { updateMany } = require("../models/administration")

exports.dataAdmin=(req,res)=>{
    res.json({
        "sara":{
            "email":"sara.ouaha@ensi-uma.tn",
            "pwd":"sara"
        }
    })
};