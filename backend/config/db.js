const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("DB connected ");
  } catch (error) {
    console.log("DB not  connected ");
  }
};
module.exports = connectDB;
