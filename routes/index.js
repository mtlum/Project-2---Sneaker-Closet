var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
<<<<<<< HEAD
  res.render("index", { title: "Sneaker Closet" });
=======
  res.render("index", { title: "Sneaker Collector" });
>>>>>>> refs/remotes/origin/main
});

module.exports = router;
