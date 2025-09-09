// src/agents/assistant/agent.ts
import { AgentBuilder, GoogleSearch } from "@iqai/adk";
import * as dotenv from "dotenv";

dotenv.config();

// export async function agent() {
//   return await AgentBuilder.create("assistant")
//     .withModel("gemini-2.5-flash")
//     .withInstruction("You are a helpful assistant.")
//     .build();
// }

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
