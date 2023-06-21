const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/authController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

// routes

// register||POST
router.post("/register", registerController);

// login || POST

router.post("/login", loginController);

// get current user || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
