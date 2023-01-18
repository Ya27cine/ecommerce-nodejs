const express = require('express');
const server = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
server.listen( port, () => console.log("App is running on port ",port))