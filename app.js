const express       = require('express');
const authRoutes    = require("./routes/auth");
const userRoutes    = require("./routes/users");
const db            = require("mongoose");
const  bp           = require("body-parser");
const validator     = require('express-validator')
const server        = express();
require("dotenv").config();


// Middlewares
server.use( bp.json() )
server.use( validator() )


// Connect DB
db.set("strictQuery", false);
db.connect(process.env.dataBaseUrl,{
    useNewUrlParser: true,  // no longer necessary
    })
    .then(() => console.log("DB connected !"))
    .catch((e) => console.log("not connect to database"))




// Routes Middleware :
server.use("/api", authRoutes);
server.use("/api", userRoutes);


// Server
const port = process.env.PORT || 3000;
server.listen( port, () => console.log("App is running on port ",port))
