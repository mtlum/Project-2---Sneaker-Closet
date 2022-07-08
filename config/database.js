const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect(process.env.DATABASE_URL, {
=======
mongoose.connect("mongodb://127.0.0.1:27017/shoes", {
>>>>>>> refs/remotes/origin/main
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});
