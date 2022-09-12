const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const dotenv = require("dotenv");
const app = express();
jsonParser=bodyParser.json();

dotenv.config({path:"./config.env"});
require('./db/conn');

const PORT = process.env.PORT;

app.use(require("./router/auth"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});