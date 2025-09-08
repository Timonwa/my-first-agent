// src/main.ts
import { agent } from "./agent";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const { runner } = await agent();

  const response = await runner.ask("What is the capital of France?");
  console.log("🤖 Response:", response);
}

main().catch(console.error);
