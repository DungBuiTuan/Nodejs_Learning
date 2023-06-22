const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
// const db = require('./config/db')
const port = 3000;

//connect db
import { createRequire } from 'https://deno.land/std@0.177.0/node/module.ts';
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Test_MongoDB')
  .then(() => console.log('Connected!'));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join("img")));
//http logger
app.use(morgan("combined"));

//template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/collection", (req, res) => {
  console.log(req.query);
  res.render("collection");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
