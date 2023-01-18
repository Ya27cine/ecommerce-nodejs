const express = require("express");
const router = express.Router();
// Controller User :
const { index } = require("../controllers/userController")

router.get("/", index);

module.exports = router;