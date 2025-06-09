const express = require("express");
const router = express.Router();
const { sendEmail, getEmails } = require("../controllers/emailController");

router.post("/send", sendEmail);
router.get("/inbox", getEmails);

module.exports = router;
