const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
router.post("/submit", userController.submission);
module.exports = router;
