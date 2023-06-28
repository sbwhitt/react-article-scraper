const express = require("express");
const cors = require("cors");
const scrape = require("./scrape");
const gpt = require("./gpt").default;

const app = express();
app.use(cors());
const port = 4000;

app.get("/api/scrape", (req, res) => {
    scrape.article(req.query.url)
        .then(data => {
            gpt("summarize this text in a few sentences: \n", data)
                .then(gptRes => {
                    res.send(gptRes.data.choices[0].message.content);
                })
                .catch(err => {
                    console.log("gpt error");
                    console.log(err);
                    res.send(err);
                });
        })
        .catch(err => {
            console.log("scrape error");
            console.log(err);
            res.send(err);
        });
});

app.get("/api/prompt", (req, res) => {
    scrape.text(req.query.url)
        .then(data => {
            gpt(req.query.prompt, data)
                .then(gptRes => {
                    res.send(gptRes.data.choices[0].message.content);
                })
                .catch(err => {
                    console.log("gpt error");
                    console.log(err);
                    res.send(err);
                });
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
