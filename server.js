const express = require("express");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();
const PORT = 5000;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static("public"));

app.post("/api/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || !prompt.trim()) {
            return res.status(400).json({
                error: "Please enter a prompt."
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt.trim()
        });

        res.json({
            result: response.text
        });

    } catch (error) {
        console.error("Gemini API Error:", error);

        if (error.status === 503) {
            return res.status(503).json({
                error: "Gemini is currently busy. Please try again later."
            });
        }

        if (error.status === 429) {
            return res.status(429).json({
                error: "Gemini API limit reached. Please try again later."
            });
        }

        res.status(500).json({
            error: "Something went wrong while generating the response."
        });
    }
});

app.listen(PORT, () => {
    console.log(`AI Website running at http://localhost:${PORT}`);
});