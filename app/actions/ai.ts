import { grokClient } from "@/lib/grok";

/**
 * Generates AI-based content using Grok AI with streaming.
 * @param prompt The input prompt for AI.
 * @param modelId The Grok model to use (default: "grok-3-beta").
 * @returns AI-generated text output.
 */
export async function generateAIContent(
  prompt: string,
  modelId: string = "gpt-4o-mini"
): Promise<string> {
  try {
    let fullResponse = "";
    
    const stream = await grokClient.chat.completions.create({
      model: modelId,
      messages: [
        { 
          role: "system", 
          content: "You are an expert software engineer and code reviewer. Provide detailed, technical analysis of code changes." 
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
      stream: true
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      fullResponse += content;
      console.log("Streaming chunk:", content);
    }

    console.log("Full AI Response:", fullResponse);
    return fullResponse.trim() || "AI response was empty.";
  } catch (error) {
    console.error("Grok AI Error:", error);
    return "Error generating AI response. Please try again.";
  }
}

/**
 * Creates a structured system prompt for AI code analysis.
 * @param changes List of code changes (file name, type, and code snippet).
 * @returns A detailed system prompt for AI analysis.
 */
export function generateCodeReviewPrompt(
  changes: { file: string; type: string; line: string }[]
): string {
  let prompt = `You are an expert software engineer and code reviewer. Your task is to analyze a GitHub Pull Request and provide a structured report. The analysis should include:
  
1️⃣ **Summary**: Explain the purpose of the changes.  
2️⃣ **Impact**: Describe the impact of these changes on the codebase.  
3️⃣ **Improvements**: Suggest any potential optimizations or best practices.  

Below is the list of changes:\n\n`;

  changes.forEach((change) => {
    prompt += `📂 **File**: ${change.file}\n`;
    prompt += `🔄 **Change Type**: ${change.type === "add" ? "➕ Addition" : "➖ Removal"}\n`;
    prompt += `💻 **Code Snippet**:\n\`\`\`\n${change.line}\n\`\`\`\n\n`;
  });

  prompt += `\n📌 Please provide your detailed insights in a **structured and technical** format.\n`;

  return prompt;
}

/**
 * Analyzes code changes using Grok AI and provides feedback.
 * @param changes List of code changes to analyze.
 * @returns AI-generated analysis of the code changes.
 */
export async function analyzeDiff(
  changes: { file: string; type: string; line: string }[]
): Promise<string> {
  const prompt = generateCodeReviewPrompt(changes);
  return await generateAIContent(prompt);
}