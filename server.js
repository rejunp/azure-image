// server.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const dotenv = require('dotenv');
const os = require('os');

dotenv.config();


/**
 * App Variables
 */

const app = express();
const port = "8080";


/**
 *  App Configuration
 */


/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    let content = 'Hello From SG ! - ' + process.env.USER + ' ' + os.hostname();
    content+="<br/><br/> Hey Time is -- " + Date();
    res.status(200).send(content);
  });

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });