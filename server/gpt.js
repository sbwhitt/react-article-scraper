require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function gpt(prompt, input) {
    const chat = await openai.createChatCompletion(
        {
            model: "gpt-3.5-turbo",
            messages: [{ role: "assistant", content: prompt + input }],
        },
        {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
            }
        }
    );

    return chat;
}

exports.gpt = gpt;