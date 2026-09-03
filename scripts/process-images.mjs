/**
 * One-off asset prep for the five supplied LRC photos.
 *
 * Uses the Chromium that already ships with the project's Playwright QA dep
 * (no new dependency, no external service) to:
 *   1. trim the burned-in "9.0 / DAY ONE" event branding bar off the bottom edge
 *   2. downscale to a web-appropriate size
 *   3. re-encode as JPEG (next/image then serves AVIF/WebP on request)
 *
 * Source:  _incoming/<name>.jpg   (copied from the client's uploads)
 * Output:  public/images/lrc/<dir>/<name>.jpg
 *
 * Run:  node scripts/process-images.mjs
 */
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stage = resolve(root, "_incoming");
writeFileSync(resolve(stage, "_blank.html"), "<!doctype html><title>stage</title>");

/** topTrim / bottomTrim = fraction of height removed from that edge (the burned-in
 *  event-branding bar sits on the bottom of every frame). */
const JOBS = [
  { name: "hero", out: "hero/hero.jpg", maxW: 2400, bottomTrim: 0.11, quality: 0.82 },
  { name: "about", out: "about/about.jpg", maxW: 1700, bottomTrim: 0.1, quality: 0.82 },
  { name: "venue", out: "event/venue.jpg", maxW: 1900, bottomTrim: 0.1, quality: 0.82 },
  { name: "program", out: "experience/program.jpg", maxW: 1300, bottomTrim: 0.12, quality: 0.82 },
  { name: "finalcta", out: "legacy/final-cta.jpg", maxW: 2200, bottomTrim: 0.1, quality: 0.82 },
];

const browser = await chromium.launch({
  args: ["--allow-file-access-from-files", "--disable-web-security"],
});
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve(stage, "_blank.html")).href);

for (const job of JOBS) {
  const srcUrl = `${job.name}.jpg`;

  const dataUrl = await page.evaluate(
    async ({ srcUrl, maxW, topTrim, bottomTrim, quality }) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = () => rej(new Error("load failed"));
        img.src = srcUrl;
      });
      const top = Math.round(img.naturalHeight * topTrim);
      const srcH = Math.round(img.naturalHeight * (1 - topTrim - bottomTrim));
      const srcW = img.naturalWidth;
      const scale = Math.min(1, maxW / srcW);
      const dstW = Math.round(srcW * scale);
      const dstH = Math.round(srcH * scale);
      const canvas = document.createElement("canvas");
      canvas.width = dstW;
      canvas.height = dstH;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, top, srcW, srcH, 0, 0, dstW, dstH);
      return canvas.toDataURL("image/jpeg", quality);
    },
    {
      srcUrl,
      maxW: job.maxW,
      topTrim: job.topTrim ?? 0,
      bottomTrim: job.bottomTrim ?? 0,
      quality: job.quality,
    },
  );

  const buf = Buffer.from(dataUrl.split(",")[1], "base64");
  const outPath = resolve(root, "public/images/lrc", job.out);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buf);
  console.log(
    `${job.name.padEnd(9)} -> ${job.out.padEnd(26)} ${(buf.length / 1024).toFixed(0)} KB`,
  );
}

await browser.close();
