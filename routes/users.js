
const express = require('express');
const {userSignUpValidator} = require("../middlewares/userValidator");
const router = express.Router();
// Controller User :
const { index, signup } = require("../controllers/userController")

router.get("/", index);
router.post("/signup", userSignUpValidator, signup);


module.exports = router;