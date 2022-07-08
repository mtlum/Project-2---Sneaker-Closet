const Shoe = require("../models/shoe");

function newShoe(req, res) {
  res.render("shoes/new");
}

function create(req, res) {
  const shoe = new Shoe(req.body);
  console.log(req.body);
  shoe.save(function (err) {
    if (err) return res.render("shoes/new");
    res.redirect("/shoes");
  });
}

function index(req, res) {
  Shoe.find({}, function (err, shoes) {
    res.render("shoes/index", { shoe: "All Shoes", shoes });
  });
}

function show(req, res) {
  Shoe.findById(req.params.id, function (err, shoe) {
    console.log(err, shoe);
    res.render("shoes/show.ejs", { shoe });
  });
}

function deleteShoe(req, res) {
  Shoe.findById(req.params.id, function (err, shoe) {
    console.log("im in delete controller");
    shoe.remove();
    shoe.save(function (err) {
      res.redirect("/shoes");
    });
  });
}

function update(req, res) {
  Shoe.findById(req.params.id, function (err, book) {
    res.render("shoes/updateShoe", { shoe, user });
  });
}
// function show(req, res) {
//   Shoe.findById(req.params.id, function (err, shoe) {
//     res.render("shoes/show.ejs", { shoe });
//   });
// }

module.exports = {
  new: newShoe,
  create,
  index,
  show,
  delete: deleteShoe,
  update,
  //   show,
};
