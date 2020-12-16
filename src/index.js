const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
    routes: matchingRoutes,
} = require("./matchings/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/matchings", matchingRoutes);

module.exports = app;