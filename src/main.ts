// src/main.ts
import { agent } from "./agent";

async function main() {
  const { runner } = await agent();

  const response = await runner.ask(
    "What are the latest developments in AI technology in 2024?"
  );
  console.log("🤖 Response:", response);
}

main().catch(console.error);
