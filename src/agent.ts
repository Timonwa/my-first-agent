// src/agent.ts
import { AgentBuilder, GoogleSearch, LlmAgent } from "@iqai/adk";
import * as dotenv from "dotenv";
import { openai } from "@ai-sdk/openai";

dotenv.config();

export async function agent() {
  return await AgentBuilder.create("research_assistant")
    .withModel("gemini-2.5-flash")
    .withDescription(
      "A helpful research assistant with web search capabilities"
    )
    .withInstruction(
      "You are a helpful research assistant. When you need current information " +
        "or want to search for specific topics, use the Google Search tool. " +
        "Always cite your sources when providing information from search results."
    )
    .withTools(new GoogleSearch())
    .build();
}

// export async function agent() {
//   return await AgentBuilder.create("openai_agent")
//     .withModel(openai("gpt-4-turbo"))
//     .withInstruction("You are a helpful assistant")
//     .build();
// }

// export const openaiAgent = new LlmAgent({
//   name: "openai_agent",
//   model: openai("gpt-4.1"),
//   instruction: "You are a helpful assistant",
// });

// Google Gemini
// const geminiAgent = new LlmAgent({
//   name: "gemini_agent",
//   model: google("gemini-2.0-flash"),
//   instruction: "You are a helpful assistant"
// });
