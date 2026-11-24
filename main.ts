// One Sentence for a Traveler from 1800 — make.fun bounty entry.
//
// Prints one sentence that explains a modern wonder to a person who has
// just stepped out of the year 1800, using only things such a traveler
// could already picture: a looking-glass, a friend, the sea, standing
// beside someone. The same sentence is written to entry.txt in the
// directory the harness points at with MAKEFUN_OUTPUT_DIR.
//
// The wonder explained here is a video call: seeing and speaking with
// someone far away as if they were in the room with you — a different
// modern thing from any letter, library or post office.
//
// Node 22, standard library only, no network, deterministic on every run.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The entry: a single sentence, built entirely from things a traveler
// from 1800 already knows. The looking-glass is the comparison that
// carries it — a mirror that shows a living face — and speaking with a
// friend across the sea as if they stood beside you is what the
// internet does: it lets distant people see and hear each other at once.
// The guard below keeps the gate honest: one sentence, 1-200 chars.
const SENTENCE =
  "Imagine a looking-glass that lets you see and speak with a friend across the sea, as if they stood beside you.";

if (
  SENTENCE.length < 1 ||
  SENTENCE.length > 200 ||
  SENTENCE.trim() !== SENTENCE ||
  (SENTENCE.match(/\./g) || []).length !== 1 ||
  !SENTENCE.endsWith(".")
) {
  throw new Error("entry must be a single sentence of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
process.stdout.write(SENTENCE + "\n");
