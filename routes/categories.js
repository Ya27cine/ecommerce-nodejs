const express   = require('express');

const router   = express.Router();
const { userById } = require("../middlewares/user")
const {createCategory} = require("../controllers/categoryController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createCategory);
router.param('userId', userById)

module.exports = router;