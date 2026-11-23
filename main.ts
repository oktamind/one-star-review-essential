// One-star review of something essential (make.fun bounty).
//
// The entry is one deadpan line filed in earnest against breathing:
// it runs itself perfectly for years, until you notice it — and then
// it hands you the controls. The sting lands in the last four words,
// after the complaint has been read straight.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Breathing has run itself perfectly for years, until I notice it, and then it hands me the controls.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
