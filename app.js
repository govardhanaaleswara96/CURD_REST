//app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const product = require("./routes/product.route"); // Imports routes for the products
const app = express();
app.use(express.static("views"));
mongoose
  .connect("mongodb://localhost:27017/productstutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => console.log("Db Connected successfully"))
  .catch(() => {
    console.error("Db connection failed");
    process.exit(-1);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 1234;
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
