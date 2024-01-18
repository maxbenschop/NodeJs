const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/quiz", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/quiz.html"));
});

module.exports = router;
