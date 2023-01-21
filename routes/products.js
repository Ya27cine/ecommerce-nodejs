const express   = require('express');
const router   = express.Router();
const { userById } = require("../middlewares/user")
const {createProduct} = require("../controllers/productController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createProduct);
router.param('userId', userById)

module.exports = router;