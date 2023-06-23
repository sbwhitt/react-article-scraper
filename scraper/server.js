const express = require("express");
const cors = require("cors");
const scrape = require("./scrape").default;

const app = express();
app.use(cors());
const port = 4000;

app.get("/api/scrape", (req, res) => {
    scrape(req.query.url)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
