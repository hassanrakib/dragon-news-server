const express = require("express");
const cors = require("cors");
// get news categories
const categories = require("./data/categories.json");

// get news
const news = require("./data/news.json");

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

// get all news
app.get("/news", (req, res) => {
  res.send(news);
})

// get multiple news by category
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const newsByCategory = news.filter(
      (singleNews) => singleNews.category_id === id
    );
    res.send(newsByCategory);
  }
});

// get single news
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((singleNews) => singleNews._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("Listening in port " + port);
});
