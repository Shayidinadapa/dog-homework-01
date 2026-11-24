// dog-homework-01 — make.fun bounty entry.
// Program: writes exactly one line — the dog's excuse — to /output/entry.txt.
// The line is fixed, so every run produces byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning excuse (84 characters). Drafted fresh in this session and
// picked against the judge brief: a dog caught eating the homework, in its
// own voice, with a twist of pure dog logic — and zero remorse.
const ENTRY =
  "It was on the floor. In my house. On the floor! What was I supposed to do \u2014 read it?";

// Resolve the output directory: the harness sets MAKEFUN_OUTPUT_DIR,
// OUTPUT_DIR is the fallback, /output is the documented default.
// Never default to "." — a stray entry.txt in the repo would be wrong.
function resolveOutputDir(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
  if (!dir || !dir.trim()) {
    throw new Error("Output directory resolved to an empty string.");
  }
  if (dir === ".") {
    // Never write entry.txt into the working directory: a stray file in
    // the repo would be picked up by later checks instead of /output.
    throw new Error('Output directory must not be "." — use /output.');
  }
  return dir;
}

// Gate check, mirroring the sealed scorer: 1-200 characters, not only
// whitespace, and no control characters (tabs/newlines would break the
// one-line requirement).
function validate(text: string): void {
  const chars = Array.from(text);
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(
      `Entry must be 1-200 characters, got ${chars.length}.`
    );
  }
  if (!text.trim()) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace.");
  }
  for (const ch of chars) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      throw new Error(
        `Entry contains a control character U+${code.toString(16).padStart(4, "0")}.`
      );
    }
  }
}

function main(): void {
  validate(ENTRY);

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Read it back and refuse to finish silently on a mismatch.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error(
      `Wrote ${JSON.stringify(ENTRY)} but read back ${JSON.stringify(roundTrip)}.`
    );
  }

  console.log(
    `Wrote ${outPath} (${Array.from(ENTRY).length} characters): ${ENTRY}`
  );
}

main();
