const express   = require('express');
const router   = express.Router();
const { userById } = require("../middlewares/user")
const { 
    allProducts,
    relatedProduct,
    createProduct, 
    showProduct, 
    updateProduct, 
    deleteProduct, 
    productById} = require("../controllers/productController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.get("/",  allProducts);
router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createProduct);
router.get("/:productId",     [requireSignIn, isAuth, isAdmin], showProduct);
router.get("/related/:productId",   relatedProduct);
router.delete("/:productId/:userId",  [requireSignIn, isAuth, isAdmin], deleteProduct);
router.put("/:productId/:userId",  [requireSignIn, isAuth, isAdmin], updateProduct);


// Middlewares :
router.param('userId', userById)
router.param('productId', productById)

module.exports = router;