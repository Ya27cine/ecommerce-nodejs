const express_jwt = require("express-jwt");
require("dotenv").config();


exports.requireSignIn = express_jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
})

exports.isAuth = ( req, res, next) => {

    //  All Access for Admin ( 1 == admin && 0 == user)
    if( req.auth.role == 1 ) return next();
    
    const user = req.profile && req.auth && ( req.profile._id == req.auth._id);

    if( !user ){
        return res.status(403).json({
            error: "Access denied !!"
        })
    }

    next();
}
