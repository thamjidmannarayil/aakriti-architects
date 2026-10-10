import { readFile, copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/import-assets.mjs /absolute/path/to/exports");
  process.exit(1);
}
const inventory = JSON.parse(await readFile(path.join(projectRoot, "docs/asset-inventory.json"), "utf8"));
const failures = [];
for (const asset of inventory) {
  try {
    const file = await readFile(path.join(source, asset.filename));
    const valid = asset.filename.endsWith(".png")
      ? file.length > 24 && file.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
      : /<svg\b[^>]*>/i.test(file.toString("utf8"));
    if (!valid) failures.push(asset.filename + ": invalid file format");
  } catch { failures.push(asset.filename + ": missing or unreadable"); }
}
if (failures.length) {
  console.error("No assets were copied. Fix these files:\n" + failures.join("\n"));
  process.exit(1);
}
const destination = path.join(projectRoot, "public/assets");
await mkdir(destination, { recursive: true });
for (const asset of inventory) await copyFile(path.join(source, asset.filename), path.join(destination, asset.filename));
console.log("Imported " + inventory.length + " original assets. Recheck layout against Figma.");
