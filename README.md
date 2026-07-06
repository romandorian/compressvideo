# CompressVideo

CompressVideo is a browser-local video compressor built with Next.js, TypeScript, Tailwind CSS, and ffmpeg.wasm.

The product promise is simple:

- Compress MP4, MOV, and WebM in the browser.
- No upload for the free local compressor.
- No watermark.
- No account required.
- English and Simplified Chinese SEO pages for common upload limits, platforms, formats, and use cases.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

To test the real browser compression flow:

```bash
npm run build
PORT=3001 npm run start
APP_URL=http://localhost:3001 node scripts/smoke-test.mjs
```

The smoke test creates a small WebM file, uploads it through the UI, runs compression, and waits for the MP4 download link.

## Configuration

Set these environment variables in production:

```bash
NEXT_PUBLIC_SITE_URL=https://compressvideo.dev
NEXT_PUBLIC_CONTACT_EMAIL=hello@compressvideo.dev
```

`NEXT_PUBLIC_SITE_URL` is used for sitemap, robots, canonical URLs, and the web app manifest.
Use the lowercase domain in URLs. Keep the display brand as `CompressVideo`.

## Deployment

Vercel is the recommended MVP host for this Next.js app. The project serves `public/ffmpeg/ffmpeg-core.js` and `public/ffmpeg/ffmpeg-core.wasm` locally so the compressor can load the video engine without relying on a third-party CDN.

The current app sets COOP and COEP headers in `next.config.ts` for WebAssembly readiness.

## Product Notes

- Keep "no upload" claims true unless a future cloud compression mode is clearly disclosed.
- Very large files can fail because browser memory is limited, especially on mobile.
- Target-size mode calculates bitrate from video duration, but encoded output size can still vary slightly.
- Add analytics only with privacy-friendly event collection and update the privacy policy when doing so.
