
const express = require('express');
const {userSignUpValidator} = require("../middlewares/userValidator");
const {requireSignIn} = require("../middlewares/auth");

const router = express.Router();
// Controller User :
const { index, signup, signin, signout } = require("../controllers/authController")

router.get("/", index);
router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello",requireSignIn, (req, res) => {
    res.send("Hello there !! ")
});


module.exports = router;