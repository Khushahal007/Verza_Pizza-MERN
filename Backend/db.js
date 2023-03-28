const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo db connect successfull");
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

var db = mongoose.connection;

db.on("error", () => {
  console.log("Mongo db connection failed");
});

module.exports = mongoose;
