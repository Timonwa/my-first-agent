// src/agents/index.ts
import { agent } from "./assistant/agent";

// async function main() {
//   const { runner } = await agent();

//   const response = await runner.ask("What is the capital of France?");
//   console.log("🤖 Response:", response);
// }

// main().catch(console.error);

async function main() {
  const { runner } = await agent();

  const response = await runner.ask(
    "What are the latest developments in AI technology in 2024?"
  );
  console.log("🤖 Response:", response);
}

main().catch(console.error);
