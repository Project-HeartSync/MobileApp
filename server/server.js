/* eslint-disable prettier/prettier */
/*eslint linebreak-style: ["error", "windows"]*/
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const uri = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};

const APIrouter = require('./routes.js')

app.use(APIrouter);

let port = process.env.PORT || 5000

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});