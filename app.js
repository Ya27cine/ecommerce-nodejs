const express = require('express');
const db = require("mongoose");
const server = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
server.listen( port, () => console.log("App is running on port ",port))

// Connect DB
db.set("strictQuery", false);
db.connect(process.env.dataBaseUrl,{
    useNewUrlParser: true,  // no longer necessary
    })
    .then(() => console.log("DB connected !"))
    .catch((e) => console.log("not connect to database"))