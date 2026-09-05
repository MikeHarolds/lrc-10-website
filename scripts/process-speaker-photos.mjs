/**
 * One-off asset prep for confirmed speaker headshots.
 *
 * Same technique as scripts/process-images.mjs (Chromium canvas, no new
 * dependency): downscale to a sensible web width and re-encode as JPEG.
 * Unlike the section photos, these carry no branding bar, so there is no
 * trim — the full supplied composition (including the photographer's
 * corner credit) is preserved.
 *
 * Source:  _incoming/speakers/<id>.jpg
 * Output:  public/images/lrc/speakers/<id>.jpg
 *
 * Run:  node scripts/process-speaker-photos.mjs
 */
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync, writeFileSync, readdirSync, writeFileSync as write } from "node:fs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stage = resolve(root, "_incoming/speakers");
const outDir = resolve(root, "public/images/lrc/speakers");

write(resolve(stage, "_blank.html"), "<!doctype html><title>stage</title>");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(stage).filter((f) => /\.(jpe?g|png)$/i.test(f));

const browser = await chromium.launch({
  args: ["--allow-file-access-from-files", "--disable-web-security"],
});
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve(stage, "_blank.html")).href);

const MAX_W = 900;
const QUALITY = 0.85;

for (const file of files) {
  const dataUrl = await page.evaluate(
    async ({ srcUrl, maxW, quality }) => {
      const img = new Image();
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = () => rej(new Error("load failed"));
        img.src = srcUrl;
      });
      const scale = Math.min(1, maxW / img.naturalWidth);
      const dstW = Math.round(img.naturalWidth * scale);
      const dstH = Math.round(img.naturalHeight * scale);
      const canvas = document.createElement("canvas");
      canvas.width = dstW;
      canvas.height = dstH;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, dstW, dstH);
      return canvas.toDataURL("image/jpeg", quality);
    },
    { srcUrl: file, maxW: MAX_W, quality: QUALITY },
  );

  const buf = Buffer.from(dataUrl.split(",")[1], "base64");
  const outPath = resolve(outDir, file.replace(/\.png$/i, ".jpg"));
  writeFileSync(outPath, buf);
  console.log(`${file.padEnd(32)} -> ${(buf.length / 1024).toFixed(0)} KB`);
}

await browser.close();
