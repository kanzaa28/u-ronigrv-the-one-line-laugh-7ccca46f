import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones so I could finally hear myself think, and all I heard was how loud I chew.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars,
// non-whitespace, standing alone as one sentence. Fail loudly instead of
// writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry line must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
