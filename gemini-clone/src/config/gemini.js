// Import necessary modules from @google/generative-ai
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Replace this with your actual API key
const apiKey = "AIzaSyAykcnYgSl3CypBe1M4modE8BTb24lloZ4";
const genAI = new GoogleGenerativeAI(apiKey);

// Define the generative model you want to use
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Configuration for generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Safety settings to filter harmful content
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// Function to run the chat session
async function run(prompt) {
  // Start a new chat session with configured settings
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  // Send a message with the provided prompt
  const result = await chatSession.sendMessage(prompt);

  // Log and return the response
  console.log(result.response.text());
  return result.response.text();
}

export default run;
