
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const cookie = require("cookie-parser");

module.exports.signup  = (req, res) => {
    //console.log( JSON.stringify(req));
  const user = new User( req.body);
  user.save((err, user) => {
        if(err) return res.status(400).send(err)
        res.send( user );
  });
}

module.exports.signin  = (req, res) => {

  const {email, password} = req.body;
  User.findOne({email},(err, user) => {
    if( err || !user ) 
      return res.status(400).json({error:"Email or password  not correct !!"})
    if( !user.isAuth(password) )
      return res.status(401).json({error:"Email and password  not match !!"})
    
    // It's Ok .

    // gene token
    const _token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET);
    // save token in cookie
    res.cookie('token',_token, {expire: new Date()+8765231})

    const {_id, name, email, role } = user;
    res.status(200).send({
      _token,
      user:{_id, name, email, role }
    })
  })
}

module.exports.signout  = (req, res) => {
  res.clearCookie('token');
  res.send({
    message: "User singout !"
  })
}



module.exports.index = (req, res) => {
    res.send({ message: "Users data ..." });
}