const express = require("express");
const cors = require("cors");
const { scrape } = require("./scrape");
const { gpt } = require("./gpt");

const app = express();
app.use(cors());

app.get("/api/scrape", (req, res) => {
    scrape(req.query.url, "article").then(data => {
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
    scrape(req.query.url, "body").then(data => {
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

const port = 4000;
const host = "0.0.0.0";
app.listen(port, host, () => {
  console.log(`server listening on port ${port}`);
});
