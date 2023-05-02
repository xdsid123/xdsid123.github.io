const express = require("express");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch-commonjs");
const dotenv = require("dotenv").config()
const port = process.env.PORT;
const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => console.log("Running on port" + port))