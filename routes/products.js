const express   = require('express');
const router   = express.Router();
const { userById } = require("../middlewares/user")
const {createProduct, showProduct, deleteProduct, productById} = require("../controllers/productController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createProduct);
router.get("/:productId",     [requireSignIn, isAuth, isAdmin], showProduct);
router.delete("/:productId/:userId",  [requireSignIn, isAuth, isAdmin], deleteProduct);

// Middlewares :
router.param('userId', userById)
router.param('productId', productById)

module.exports = router;