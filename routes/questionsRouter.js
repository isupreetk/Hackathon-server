const express = require("express");
const router = express.Router();
const fs = require("fs");

const pokemonJSON = fs.readFileSync("./data/pokemon.json");
const pokemonObj = JSON.parse(pokemonJSON);

router.get("/:id", (req, res) => {
  // req.params()
  res.json(pokemonObj);
});

router.post("/:id", (req, res) => {
  res.send("post on questions");
});

module.exports = router;
