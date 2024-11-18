// api/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your routes and middleware
app.get("/", (req, res) => {
    res.send("Welcome to Waste Management System API!");
});

// Example route for a MongoDB connection
app.get("/data", async (req, res) => {
    // Database connection and operations
    res.json({ message: "Here is some data" });
});

module.exports = app;
