import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";


const app = express();

import dotenv from "dotenv";


// Middleware
app.use(express.json());
app.use(cookieParser());

dotenv.config({
    path: "./config/config.env",
  });
  
  // Connect to database
  connectDB();
  

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
