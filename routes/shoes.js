var express = require("express");
var router = express.Router();

const shoesCtrl = require("../controllers/shoes");

router.get("/", shoesCtrl.index);

//gets /shoes/new
router.get("/new", shoesCtrl.new);

//post /shoes
router.post("/", shoesCtrl.create);

//delete /shoes
router.delete("/:id", shoesCtrl.delete);

router.get("/:id", shoesCtrl.show);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
