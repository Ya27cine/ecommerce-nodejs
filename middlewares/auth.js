const express_jwt = require("express-jwt");
require("dotenv").config();


exports.requireSignIn = express_jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
})

exports.isAuth = ( req, res, next) => {
    
    const user = req.profile && req.auth && ( req.profile._id == req.auth._id);

    if( !user ){
        return res.status(403).json({
            error: "Access denied !!"
        })
    }

    next();
}
