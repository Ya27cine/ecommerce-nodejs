const express_jwt = require("express-jwt");
require("dotenv").config();


exports.requireSignIn = express_jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
})