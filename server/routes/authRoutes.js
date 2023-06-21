const express = require("express");
const { registerController } = require("../controller/authController");

const router = express.Router();

// routes
router.post("/register", registerController);

module.exports = router;
