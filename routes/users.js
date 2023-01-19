
const express = require('express');
const router = express.Router();
// Controller User :
const { index, signup } = require("../controllers/userController")

router.get("/", index);
router.post("/signup", signup);


module.exports = router;



