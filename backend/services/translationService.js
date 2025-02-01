require('dotenv').config();
const axios = require('axios');

async function translateText(question, answer) {
    const apiKey = process.env.GEMINI_API_KEY;
    const language = 'hi';  

    if (!apiKey) {
        console.error("Gemini API Key is missing. Please check your .env file.");
        return { language, question, answer };
    }

    try {
        const prompt = `Translate this to ${language}: \nQuestion: ${question} \nAnswer: ${answer}`;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            }
        );

        // console.log("Gemini API Response:", JSON.stringify(response.data, null, 2));

        // Extract translated text
        const translatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (translatedText) {
            // **Cleaning up text** - Remove unwanted prefixes like "**Question:**" and "**Answer:**"
            let cleanedText = translatedText.replace(/\*\*Question:\*\*/g, "").replace(/\*\*Answer:\*\*/g, "").trim();

            // **Splitting question & answer**
            const splitText = cleanedText.split("\n\n");
            const translatedQuestion = splitText[0]?.trim() || question;
            const translatedAnswer = splitText[1]?.trim() || answer;

            return {
                language,
                question: translatedQuestion,
                answer: translatedAnswer
            };
        }

        console.error("Translation not found, falling back to original text.");
        return { language, question, answer };

    } catch (error) {
        console.error("Error translating:", error);
        return { language, question, answer };
    }
}

module.exports = { translateText };
