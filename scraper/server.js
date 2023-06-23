const express = require("express");
const app = express();
const port = 4000;
const scrape = require("./scrape");

app.get("/api/scrape", (req, res) => {
    scrape(req.body).then(data => res.send(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
