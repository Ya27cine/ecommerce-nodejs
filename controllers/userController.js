
const User = require("../models/user");

module.exports.signup  = (req, res) => {
    //console.log( JSON.stringify(req));
  const user = new User( req.body);
  user.save((err, user) => {
        if(err) return res.status(400).send(err)
        res.send( user );
  });
}

module.exports.index = (req, res) => {
    res.send({ message: "Users data ..." });
}