const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const dotenv = require("dotenv");
const app = express();
jsonParser=bodyParser.json();

dotenv.config({path:"./config.env"});
require('./db/conn');

const PORT = process.env.PORT;

usersRouter = require("./router/auth")
booksRouter = require("./router/books")
requestsRouter = require("./router/request")
acceptsRouter = require("./router/accept")
filterRouter = require("./router/filter")
app.use(usersRouter);
app.use(booksRouter);
app.use(requestsRouter);
app.use(acceptsRouter);
app.use(filterRouter)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});