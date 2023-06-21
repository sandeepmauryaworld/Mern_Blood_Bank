const express = require("express");
const {
  registerController,
  loginController,
} = require("../controller/authController");

const router = express.Router();

// routes

// register||POST
router.post("/register", registerController);

// login || POST

router.post("/login", loginController);

module.exports = router;
