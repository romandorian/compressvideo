import { chromium } from "playwright-core";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const appUrl = process.env.APP_URL ?? "http://localhost:3000";
const videoPath = path.resolve("tmp/smoke.webm");

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox"],
});

try {
  const page = await browser.newPage();

  await page.goto("about:blank");
  const base64Video = await page.evaluate(async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context unavailable.");

    const stream = canvas.captureStream(10);
    const chunks = [];
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };

    const done = new Promise((resolve) => {
      recorder.onstop = resolve;
    });

    recorder.start();
    for (let i = 0; i < 12; i += 1) {
      ctx.fillStyle = i % 2 ? "#2563eb" : "#16a34a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.font = "24px sans-serif";
      ctx.fillText(`frame ${i}`, 28, 50);
      await new Promise((resolve) => setTimeout(resolve, 85));
    }
    recorder.stop();
    await done;

    const blob = new Blob(chunks, { type: "video/webm" });
    const buffer = await blob.arrayBuffer();
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoa(binary);
  });

  await writeFile(videoPath, Buffer.from(base64Video, "base64"));

  await page.goto(appUrl, { waitUntil: "networkidle" });
  await page.locator('input[type="file"]').setInputFiles(videoPath);
  await page.getByRole("button", { name: /compress video/i }).click();
  await page.getByRole("link", { name: /download mp4/i }).waitFor({ timeout: 120000 });

  const title = await page.title();
  const outputText = await page.getByText(/Compressed to/i).textContent();
  console.log(`OK ${title}`);
  console.log(outputText);
} finally {
  await browser.close();
}
