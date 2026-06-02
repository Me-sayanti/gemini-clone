import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

console.log("API Key Loaded:", apiKey ? "Yes" : "No");
console.log("API Key First Letters:", apiKey?.slice(0, 2));

const ai = new GoogleGenAI({
  apiKey,
});

export async function askGemini(prompt) {
  try {
    if (!apiKey) {
      return "API key is missing. Please check your .env file.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error Full:", error);
    return error.message || "Something went wrong. Please try again.";
  }
}