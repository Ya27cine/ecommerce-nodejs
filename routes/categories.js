const express   = require('express');
const router   = express.Router();
const { userById } = require("../middlewares/user")
const { categoryId } = require("../middlewares/category")

const {
    allCategories,
    createCategory, 
    showCategory,
    deleteCategory,
    updatCategory} = require("../controllers/categoryController")
const { requireSignIn, isAuth } = require("../middlewares/auth")
const { isAdmin } = require("../middlewares/admin")

router.post("/create/:userId",[requireSignIn, isAuth, isAdmin], createCategory);
router.put("/:categoryId/:userId",[requireSignIn, isAuth, isAdmin], updatCategory);
router.delete("/:categoryId/:userId",[requireSignIn, isAuth, isAdmin], deleteCategory);
router.get("/:categoryId", showCategory);
router.get("/", allCategories);


router.param('categoryId', categoryId)
router.param('userId'    , userById)

module.exports = router;