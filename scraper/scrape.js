const axios = require("axios");
const cheerio = require("cheerio");

async function scrape(url) {
    const res = await axios.request({
        method: "GET",
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        }
    });

    const $ = cheerio.load(res.data);
    var s = "";
    $("article").find("p").each(function(index, element) {
        s += $(element).text();
    });
    return s;
}

exports.default = scrape;