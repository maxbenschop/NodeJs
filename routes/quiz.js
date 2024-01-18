const express = require("express");
const router = express.Router();
const calcResult = require("../utils/calcResult");

router.post("/result", (req, res) => {
  const { answer1, answer2, answer3 } = req.body;
  const score = calcResult(answer1, answer2, answer3);
  res.render("result", { score });
});

module.exports = router;
