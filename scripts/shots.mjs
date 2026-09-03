import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.env.SHOT_DIR || "./_shots";
mkdirSync(OUT, { recursive: true });
const url = "http://localhost:3210";
let browser;
try {
  browser = await chromium.launch();
} catch {
  browser = await chromium.launch({ channel: "chromium-headless-shell" });
}

const sections = [
  "top",
  "about",
  "theme",
  "why-culture",
  "worlds",
  "event",
  "speakers",
  "audience",
  "experience",
  "program",
  "why-attend",
  "tickets",
  "testimonials",
  "impact",
  "faq",
  "partners",
  "legacy",
  "register",
];

const VP = (process.env.VIEWPORTS || "desktop,mobile").split(",");
const ALL = {
  desktop: { name: "desktop", width: 1440, height: 900 },
  laptop: { name: "laptop", width: 1024, height: 800 },
  tablet: { name: "tablet", width: 768, height: 1024 },
  mobile: { name: "mobile", width: 390, height: 844 },
  mobilexl: { name: "mobilexl", width: 430, height: 932 },
};
for (const c of VP.map((v) => ALL[v.trim()]).filter(Boolean)) {
  const ctx = await browser.newContext({
    viewport: { width: c.width, height: c.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto(url, { waitUntil: "networkidle" });
  // Scroll through the whole page to trigger every lazy image, then back to top.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await Promise.all(
      [...document.images].map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.onload = img.onerror = res;
            }),
      ),
    );
  });
  await page.waitForTimeout(1200);

  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    let culprits = [];
    if (de.scrollWidth > de.clientWidth + 1) {
      document.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > de.clientWidth + 1 || r.left < -1) {
          culprits.push(
            `${el.tagName}.${(el.className || "").toString().slice(0, 60)} right=${Math.round(r.right)}`,
          );
        }
      });
    }
    return {
      overflowing: de.scrollWidth > de.clientWidth + 1,
      scrollW: de.scrollWidth,
      clientW: de.clientWidth,
      culprits: culprits.slice(0, 8),
    };
  });
  console.log(`\n=== ${c.name} ===`);
  console.log("overflow:", JSON.stringify(overflow, null, 1));
  console.log("errors:", errors.length ? errors : "none");

  if (process.env.SECTIONS) {
    for (const id of sections) {
      const el = page.locator(`#${id}`).first();
      if ((await el.count()) === 0) continue;
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await el.screenshot({ path: `${OUT}/${c.name}-${id}.png` }).catch(() => {});
    }
  } else {
    await page.screenshot({ path: `${OUT}/${c.name}-full.png`, fullPage: true });
  }
  await ctx.close();
}

await browser.close();
console.log("\ndone");
