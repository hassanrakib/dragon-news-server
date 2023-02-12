const express = require("express");
const cors = require("cors");
// get news categories
const categories = require("./data/categories.json");

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// categories api
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Listening in port " + port);
});
