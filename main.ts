// One Sentence for a Traveler from 1800 — make.fun bounty entry.
//
// Prints one sentence that explains the modern internet to a person who
// has just stepped out of the year 1800, using only things such a traveler
// could already picture: libraries, post offices, market stalls, roads,
// letters and candles. The same sentence is written to entry.txt in the
// directory the harness points at with MAKEFUN_OUTPUT_DIR.
//
// Node 22, standard library only, no network, deterministic on every run.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The entry: a single sentence, 176 characters, built entirely from
// things a traveler from 1800 already knows. The road is the comparison
// that carries it — every library, post office and market stall in the
// world joined together — and the letter crossing the ocean before a
// candle burns down is what the internet does: a message sent anywhere,
// arriving in moments.
const SENTENCE =
  "Picture every library, post office and market stall in the world joined by one road, so a letter you write in London reaches a stranger in Boston before your candle burns down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
process.stdout.write(SENTENCE + "\n");
