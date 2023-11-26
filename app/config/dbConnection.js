const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, { dbName: process.env.DATABASE_NAME });
    console.log("Connected to database:",process.env.DATABASE_NAME);
  } catch (err) {
    console.error("Database connection failed:",err);
  }
};

module.exports = ConnectDB;
