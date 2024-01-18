const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const indexRoutes = require("./routes/index");
const quizRoutes = require("./routes/quiz");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  if (req.path !== "/quiz" && req.path !== "/result") {
    res.redirect("/quiz");
  } else {
    next();
  }
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRoutes);
app.use("/", quizRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
