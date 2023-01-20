const express = require('express');

const router = express.Router();
// Controller User :
const { getOneUser } = require("../controllers/userController")
const { userById } = require("../middlewares/user")

router.get("/profile/:userId", getOneUser);
router.param('userId', userById)


module.exports = router;