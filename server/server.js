/* eslint-disable prettier/prettier */
/*eslint linebreak-style: ["error", "windows"]*/
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

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

import APIrouter from './routes.js';

app.use(APIrouter);

let port = process.env.PORT || 5000

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});