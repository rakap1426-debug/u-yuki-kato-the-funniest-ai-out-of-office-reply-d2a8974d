import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Auto-reply: on vacation, memory of you deleted. If urgent, I'll hallucinate that I replied. Please re-introduce yourself on my return.";
if (text.length < 1 || text.length > 160) throw new Error("bad length " + text.length);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
