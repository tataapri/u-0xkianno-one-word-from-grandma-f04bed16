// One Word From Grandma — make.fun entry
// Writes exactly one word to /output/entry.txt: the word grandma would text about AI.
//
// The word: "Robit"
// A grandma's warm, slightly baffled typo of "robot": she means the clever
// machine that talks back, and she types it the way she hears it. One word,
// instantly readable, funny without a caption, and tied to AI/robots rather
// than to any subject at all. Fresh against the obvious "Robot", and it
// sounds like something she would actually send her grandchild.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
console.log(`wrote ${WORD} to ${join(outDir, "entry.txt")}`);
