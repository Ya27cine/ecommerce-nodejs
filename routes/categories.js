const express   = require('express');
const router   = express.Router();
const { userById } = require("../middlewares/user")
const { categoryId } = require("../middlewares/category")

const {createCategory, showCategory} = require("../controllers/categoryController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createCategory);
router.get("/:categoryId/:userId",[requireSignIn, isAuth, isAdmin], showCategory);


router.param('categoryId', categoryId)
router.param('userId'    , userById)

module.exports = router;