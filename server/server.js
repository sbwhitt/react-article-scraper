const express = require("express");
const cors = require("cors");
const scrape = require("./scrape").default;
const gpt = require("./gpt").default;

const app = express();
app.use(cors());
const port = 4000;

app.get("/api/scrape", (req, res) => {
    scrape(req.query.url)
        .then(data => {
            //console.log("scrape query");
            //console.log(data);
            gpt(data)
                .then(gptRes => {
                    //console.log("gpt query");
                    //console.log(gptRes.data.choices[0].message.content);
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

app.get("/api/gpt", (req, res) => {
    gpt(req.query.input)
        .then(gptRes => {
            console.log("gpt query");
            //console.log(gptRes.data.choices[0].message.content);
            res.send(gptRes.data.choices[0].message.content);
        })
        .catch(err => {
            console.log("gpt error");
            //console.log(err);
            res.send(err);
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
