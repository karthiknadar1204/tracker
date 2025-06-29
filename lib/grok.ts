import OpenAI from "openai";


export const grokClient = new OpenAI({
  apiKey: process.env.XAI_API_KEY,

}); 