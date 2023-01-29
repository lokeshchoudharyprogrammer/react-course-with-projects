// const express = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/e-commarce");

// const connectDB = async () => {

//     const productSchema = new mongoose.Schema({});

//     const product = mongoose.model("data", productSchema);

//     const data = await product.find();
//     console.warn(data);
//   };
//   connectDB();

//   app.listen(5000);
