
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTripIdeas = async (prompt: string) => {
  try {
    // Call generateContent using the correct model and prompt format.
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        systemInstruction: "You are a senior travel consultant for PAMPA VOYAGE, a premium Moroccan travel agency with 30+ years of experience. Your tone is professional, welcoming, and expert. Provide concise, inspiring travel advice about Morocco. Focus on authentic experiences, luxury riads, and hidden gems in places like Marrakech, Fes, the Sahara, and Chefchaouen.",
        temperature: 0.7,
      },
    });
    // Extract the text output from the response.text property.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently unable to assist with your request. Please contact our 24/7 support line for personalized assistance.";
  }
};
