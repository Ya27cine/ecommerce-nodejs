
const express = require('express');
const {userSignUpValidator} = require("../middlewares/userValidator");

const router = express.Router();
// Controller User :
const { index, signup, signin, signout } = require("../controllers/authController")

router.get("/", index);
router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);


module.exports = router;