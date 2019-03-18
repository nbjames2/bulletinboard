const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
router.post("/message", staticController.newMessage);

module.exports = router;