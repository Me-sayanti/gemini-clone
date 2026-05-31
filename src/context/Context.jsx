import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(prompt) {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH,
        },
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    let result = "";

    for await (const chunk of response) {
      if (chunk.text) {
        result += chunk.text;
      }
    }

    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);

    if (error.message?.includes("429")) {
      return "API quota exceeded. Please wait or check your Gemini API quota.";
    }

    return "Something went wrong.";
  }
}
