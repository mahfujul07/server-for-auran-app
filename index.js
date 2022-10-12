// make an api to make json data

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Place where you get any data of Quran in JSON format
  <br>
  <a href="/api/v1/surah">List of All Surah In Quran</a>
  <br>
  <a href="/api/v1/juz">List of Juz</a>
  <br>
  `);
});

const quran = require("./v1/surah.json");

// make an api to get all surah
app.get("/api/v1/surah", (req, res) => {
  res.json(quran);
});

// make an api to get surah by id
app.get("/api/v1/surah/:id", (req, res) => {
  const found = quran.some((quran) => quran.id === parseInt(req.params.id));
  if (found) {
    res.json(quran.filter((quran) => quran.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No surah with the id of ${req.params.id}` });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
