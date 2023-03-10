
const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    
    User.findById(id).exec((err, user) => {
        if( err || !user){
            res.status(404).send({
                error: "User not found !"
            })
        }
        req.profile = user;

        next();
    })
}