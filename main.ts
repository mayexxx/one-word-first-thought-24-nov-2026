import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "entry.txt"), "petrichor");

const content = await readFile(resolve(outputDir, "entry.txt"), "utf8");
if (content.length !== 9 || content !== "petrichor") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
