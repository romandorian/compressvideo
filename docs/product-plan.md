# CompressVideo Product Plan

## Positioning

CompressVideo is a browser-local video compressor built for search traffic.

Core promise:

- Compress MP4, MOV, and WebM online.
- No upload for the free local tool.
- No watermark.
- No sign-up for the main utility.
- Long-tail pages map to real user jobs.

## MVP

Ship the free local compressor first:

- Homepage with broad SEO intent.
- 24 long-tail pages generated from config (`src/lib/tool-pages.ts`).
- English + Simplified Chinese (`/zh/...`) with hreflang alternates.
- Shared compressor component (localized).
- Target MB mode.
- Quality preset mode.
- MP4 output.
- FAQ structured data.
- sitemap.xml and robots.txt.
- COOP/COEP headers for wasm readiness.

Current page set (each exists in `/` and `/zh/`):

- Sizes: `/compress-video-to-8mb`, `-10mb`, `-25mb`, `-50mb`
- Platforms: discord, whatsapp, email, github, tiktok, instagram, telegram, slack, reddit, twitter, facebook, messenger, powerpoint
- Formats: `/compress-mp4`, `/compress-mov`
- Use cases: `/compress-screen-recording`, `/compress-4k-video-for-iphone`, `/reduce-video-size`, `/compress-video-without-watermark`, `/compress-video-without-losing-quality`

## SEO Expansion

Expand further after Search Console shows impressions or rankings.

Good next clusters:

- Size pages: 5MB, 15MB, 100MB.
- Format pages: WebM, AVI, MKV if supported and tested.
- Device pages: Android video.
- More locales: es, pt, ja, ko (structure is ready — add a `tool-pages.<locale>.ts` and a route group).
- Problem pages: make video smaller for upload.

Every page needs unique metadata, H1, intro, default settings, FAQ, and related links.

## Creem Payment Plan

Do not add payment until there is a paid feature worth gating.

Possible free tier:

- Local compression.
- Basic target MB presets.
- Basic quality presets.
- No account.

Possible Pro tier:

- Batch compression.
- Larger local soft limits.
- Advanced codec/preset controls.
- Saved settings/history.
- Cloud compression for large files and mobile users.
- Priority queue for server-side jobs.

Implementation shape:

1. Add auth only when entitlement needs persistence.
2. Add a database for users and entitlements.
3. Add Creem checkout session API route.
4. Add Creem webhook route as the source of truth.
5. Grant/revoke access from webhook events.
6. Gate Pro features in UI and server routes.

Creem docs to verify before implementation:

- `https://docs.creem.io/api-reference/introduction`
- `https://docs.creem.io/features/checkout/checkout-api`
- `https://docs.creem.io/code/webhooks`
- `https://docs.creem.io/code/sdks/nextjs`

Likely environment variables:

- `CREEM_API_KEY`
- `CREEM_WEBHOOK_SECRET`
- `CREEM_PRODUCT_ID`
- `NEXT_PUBLIC_APP_URL`

## Deployment

Recommended:

- Vercel for Next.js MVP and future API routes.
- Use `compressvideo.dev` as the primary domain. Keep URLs lowercase and use `CompressVideo` only as the display brand.
- Keep deployment free until traffic or cloud compression requires paid infrastructure.

If cloud compression is added later:

- Add upload disclosure and privacy copy.
- Use object storage for temporary files.
- Use a job queue for FFmpeg processing.
- Delete source and output files on a short TTL.
- Add abuse limits before opening public upload endpoints.
