import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// D7 won 20/20 of 15 drafts: concrete centre (null pointer, crash
// report, git blame) and the last line turns the poem — the crash
// report names no one, but git blame still names me.
const haiku = [
  "Null pointer at dawn",
  "the crash report names no one",
  "git blame still names me",
].join("\n");

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
