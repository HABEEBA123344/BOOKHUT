const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const dotenv = require("dotenv");
const app = express();
jsonParser=bodyParser.json();

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;
//const User=require('./model/userSchema');

app.use(require("./router/auth"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const middleware = (req,res,next) =>{
//   console.log("Hello my middleware");
// }
// middleware();


// app.get("/profile", (req, res) => {
//   res.send("Hai profile");
// });

// app.get("/about", (req, res) => {
//   res.send("Hai about");
// });

// app.get("/notification", (req, res) => {
//   res.send("Hai notification");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
