// Build the static site into dist/: copy site files and minify style.css.
// Source files stay unminified; dist/ is git-ignored.
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "lightningcss";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = join(root, "dist");

// Files served by the site (repo root only, no tooling or docs).
const SITE_EXTS = new Set([
  ".html",
  ".js",
  ".svg",
  ".png",
  ".webmanifest",
  ".txt",
  ".xml",
]);

await rm(dist, { recursive: true, force: true });
await mkdir(dist);

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && SITE_EXTS.has(extname(entry.name))) {
    await cp(join(root, entry.name), join(dist, entry.name));
  }
}

const css = await readFile(join(root, "style.css"));
const { code } = transform({ filename: "style.css", code: css, minify: true });
await writeFile(join(dist, "style.css"), code);

console.log(`Built dist/ (style.css ${css.length} -> ${code.length} bytes)`);
