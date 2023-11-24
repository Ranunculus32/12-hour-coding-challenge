const express = require("express"); //importing express
const app = express(); //using express
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // so you can use it

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env. PORT || 5000, () => {
  console.log("Backend server is running!");
}); // to run the application
