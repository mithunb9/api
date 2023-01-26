const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");

const app = express();
const cache = new NodeCache();
const PORT = 3000;

const updateCache = async () => {
  const response = await axios.get(
    "https://api.github.com/users/mithunb9/repos"
  );

  const repos = response.data;
  const obj = { repos };

  cache.set("repos_data", obj, 10000);

  return obj;
};

app.get("/", (req, res) => {
  if (cache.get("repos_data")) {
    res.send(cache.get("repos_data"));
  } else {
    res.error("Cache is empty");
  }
});

app.get("/repos", async (req, res) => {
  const output = await updateCache();
  res.send(output);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
