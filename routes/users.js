const express = require('express');

const router = express.Router();
// Controller User :
const { getOneUser } = require("../controllers/userController")
const { userById } = require("../middlewares/user")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")


router.get("/profile/:userId", requireSignIn, isAuth, isAdmin, getOneUser);
router.param('userId', userById)


module.exports = router;