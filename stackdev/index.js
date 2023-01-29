const express = require("express");
const mongoose = require("mongoose");
require("./db/config");
const User = require("./db/config");
const app = express();
app.post("/register", (req, resq) => {
  resq.send("api in pregress");
});
// const connectDB = async () => {
//   mongoose.connect("mongodb://localhost:27017/lwp");

//   const productSchema = new mongoose.Schema({});

//   const product = mongoose.model("data", productSchema);

//   const data = await product.find();
//   console.warn(data);
// };
// connectDB();

app.listen(5000);
