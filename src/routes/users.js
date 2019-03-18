const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/signin", userController.signinForm);
router.post("/users/signin", userController.signin);
router.get("/users/signup", userController.signupForm);
router.post("/users/signup", userController.signup);

module.exports = router;