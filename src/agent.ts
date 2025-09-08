// src/agent.ts
import { AgentBuilder } from "@iqai/adk";
import * as dotenv from "dotenv";

dotenv.config();

export async function agent() {
  return await AgentBuilder.create("my_first_agent")
    .withModel("gemini-2.5-flash")
    .withInstruction("You are a helpful assistant.")
    .build();
}
