
const User = require("../models/user");

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
    if( err || !user ) return res.status(400).json({error:"Email or password  not correct !!"})
    if( !user.isAuth(password) )return res.status(401).json({error:"Email and password  not match !!"})
    // It's Ok .
  })


}

module.exports.index = (req, res) => {
    res.send({ message: "Users data ..." });
}