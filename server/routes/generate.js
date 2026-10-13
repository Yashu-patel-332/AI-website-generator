const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Received:", prompt);

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: "Website description is required.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Gemini API key is missing.",
      });
    }

    const aiPrompt = `
You are an expert web developer.

Create a complete website based on the user's request.

User Request:
${prompt}

Requirements:

- Generate a complete HTML document.
- Include HTML structure.
- Include CSS inside a <style> tag.
- Include JavaScript inside a <script> tag.
- Make the website modern and professional.
- Make it responsive.
- Use semantic HTML.
- Do not use external frameworks.
- Do not use markdown code fences.
- Return ONLY the complete HTML document.
`;

    console.log("Sending request to Gemini...");

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: aiPrompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        timeout: 120000,
      }
    );

    console.log("Gemini status:", response.status);

    const data = response.data;

    const website =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!website) {
      console.log("Gemini response:", data);

      return res.status(500).json({
        success: false,
        message: "No website content received from Gemini.",
      });
    }

    console.log("Website generated successfully.");

    res.json({
      success: true,
      website,
    });

  } catch (error) {
    console.error("================================");
    console.error("GEMINI ERROR");
    console.error(
      "Status:",
      error.response?.status || "No response"
    );
    console.error(
      "Message:",
      error.response?.data || error.message
    );
    console.error("================================");

    res.status(500).json({
      success: false,
      message: "Gemini request failed.",
      error:
        error.response?.data || error.message,
    });
  }
});

module.exports = router;