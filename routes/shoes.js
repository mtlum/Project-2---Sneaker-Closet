var express = require("express");
var router = express.Router();

const shoesCtrl = require("../controllers/shoes");

router.get("/", shoesCtrl.index);

//gets /shoes/new
router.get("/new", shoesCtrl.new);

//post /shoes
router.post("/", shoesCtrl.create);

//delete /shoes/:id
router.delete("/:id", shoesCtrl.delete);

//get /shoes/:id
router.get("/:id", shoesCtrl.show);

//put
router.put("/:id", shoesCtrl.update);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
