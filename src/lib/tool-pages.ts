export type ToolPageCategory = "platform" | "size" | "format" | "usecase";

export type ToolPageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  intent: string;
  guidance: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export type ToolPage = ToolPageContent & {
  slug: string;
  category: ToolPageCategory;
  defaultTargetMb?: number;
  defaultPreset?: "smaller" | "balanced" | "quality";
  relatedSlugs: string[];
};

export const toolPages: ToolPage[] = [
  {
    slug: "compress-video-to-10mb",
    category: "size",
    title: "Compress Video to 10MB Online - Free Video Compressor",
    metaDescription:
      "Compress a video to 10MB in your browser. Reduce MP4, MOV, and WebM files privately with no upload, no sign-up, and no watermark.",
    h1: "Compress Video to 10MB",
    intro:
      "Make a video small enough for strict upload forms, Discord free limits, GitHub comments, and older forums. The compressor runs locally in your browser.",
    defaultTargetMb: 10,
    intent: "Target a strict 10MB file size",
    guidance: [
      "Best for short clips, screen recordings, bug reports, and quick shares.",
      "Use 720p or lower if the source is long or recorded in 4K.",
      "If the result still looks too soft, try 25MB or the balanced preset.",
    ],
    faqs: [
      {
        question: "Can a large video always be compressed to 10MB?",
        answer:
          "Not always with good quality. Very long or high-motion videos may need lower resolution or a larger target size.",
      },
      {
        question: "Will my video be uploaded?",
        answer:
          "No. Compression happens in your browser with ffmpeg.wasm, so the file stays on your device.",
      },
    ],
    relatedSlugs: ["compress-video-to-8mb", "compress-video-to-25mb", "compress-video-for-discord"],
  },
  {
    slug: "compress-video-to-25mb",
    category: "size",
    title: "Compress Video to 25MB Online - Free and Private",
    metaDescription:
      "Reduce video size to 25MB for email and messaging. Compress MP4, MOV, and WebM locally in your browser with no watermark.",
    h1: "Compress Video to 25MB",
    intro:
      "Create a smaller video for email attachments, Messenger, and upload boxes that reject large files.",
    defaultTargetMb: 25,
    intent: "Fit common 25MB attachment limits",
    guidance: [
      "Good for email attachments and short phone videos.",
      "Keep audio at 96 kbps for speech and simple clips.",
      "Use balanced mode if the exact target is less important than quality.",
    ],
    faqs: [
      {
        question: "Is 25MB good for email?",
        answer:
          "Many email providers use attachment limits around 25MB. Some providers still convert large attachments into cloud links.",
      },
      {
        question: "Which output format should I use?",
        answer:
          "MP4 with H.264 video and AAC audio is the safest default for phones, email, and social apps.",
      },
    ],
    relatedSlugs: ["compress-video-for-email", "compress-video-to-10mb"],
  },
  {
    slug: "compress-video-to-50mb",
    category: "size",
    title: "Compress Video to 50MB Online - Private Video Compressor",
    metaDescription:
      "Compress video files to 50MB in your browser. Reduce MP4, MOV, and WebM size without uploading your private video.",
    h1: "Compress Video to 50MB",
    intro:
      "A 50MB target is a practical balance for forms, school platforms, team tools, and sharing a cleaner version of longer clips.",
    defaultTargetMb: 50,
    intent: "Reach a moderate 50MB upload target",
    guidance: [
      "Best when 10MB or 25MB is too aggressive.",
      "Works well for longer screen recordings and phone clips.",
      "Try quality mode when the platform allows a larger upload.",
    ],
    faqs: [
      {
        question: "Does a larger target improve quality?",
        answer:
          "Usually yes. More bitrate gives the encoder more room to keep detail and motion clean.",
      },
      {
        question: "Can I set a custom target?",
        answer:
          "Yes. Use the custom MB field in the compressor to choose your own output target.",
      },
    ],
    relatedSlugs: ["compress-video-to-25mb", "compress-screen-recording"],
  },
  {
    slug: "compress-video-to-8mb",
    category: "size",
    title: "Compress Video to 8MB Online - Free Video Compressor",
    metaDescription:
      "Compress a video to 8MB in your browser for strict upload caps. No upload, no watermark, no sign-up — files never leave your device.",
    h1: "Compress Video to 8MB",
    intro:
      "Hit strict 8MB caps still used by forums, upload forms, and older Discord limits. Everything runs locally in your browser.",
    defaultTargetMb: 8,
    intent: "Fit a strict 8MB upload cap",
    guidance: [
      "8MB is tight: trim the clip or lower the resolution before compressing.",
      "Speech and screen recordings survive 8MB far better than fast gameplay.",
      "If quality collapses, try 10MB — many platform limits have moved up.",
    ],
    faqs: [
      {
        question: "How long can an 8MB video be?",
        answer:
          "At watchable quality, usually around 30 to 90 seconds. Longer clips need lower resolution or a bigger target.",
      },
      {
        question: "Why is 8MB such a common limit?",
        answer:
          "8MB was the classic Discord free upload cap, and many forums and form uploads adopted similar limits.",
      },
    ],
    relatedSlugs: ["compress-video-to-10mb", "compress-video-for-discord"],
  },
  {
    slug: "compress-video-for-discord",
    category: "platform",
    title: "Compress Video for Discord - Free Online Compressor",
    metaDescription:
      "Compress MP4, MOV, and WebM videos for Discord. Reduce clips in your browser with no upload, no account, and no watermark.",
    h1: "Compress Video for Discord",
    intro:
      "Shrink game clips, screen recordings, and phone videos before sending them in Discord chats.",
    defaultTargetMb: 10,
    intent: "Make clips easier to send on Discord",
    guidance: [
      "Use 10MB for strict free upload limits.",
      "For longer clips, reduce resolution to 720p before targeting 10MB.",
      "Screen recordings usually compress better than high-motion gameplay.",
    ],
    faqs: [
      {
        question: "Why does Discord reject my video?",
        answer:
          "The file may exceed your account or server upload limit, or the format may not be easy for Discord to process.",
      },
      {
        question: "What format is best for Discord?",
        answer:
          "MP4 is the safest output because it works broadly across desktop and mobile clients.",
      },
    ],
    relatedSlugs: ["compress-video-to-10mb", "compress-video-to-8mb", "compress-screen-recording"],
  },
  {
    slug: "compress-video-for-whatsapp",
    category: "platform",
    title: "Compress Video for WhatsApp - Free and Private",
    metaDescription:
      "Compress videos for WhatsApp in your browser. Make MP4, MOV, and WebM clips smaller with no upload and no watermark.",
    h1: "Compress Video for WhatsApp",
    intro:
      "Reduce phone videos before sending them through WhatsApp chats, groups, and status updates.",
    defaultTargetMb: 16,
    intent: "Prepare a smaller video for WhatsApp sharing",
    guidance: [
      "Short clips can often stay sharp around 16MB.",
      "For longer videos, choose 720p or a smaller quality preset.",
      "MP4 output is the most compatible choice for WhatsApp.",
    ],
    faqs: [
      {
        question: "Why compress before WhatsApp?",
        answer:
          "Smaller videos upload faster, send more reliably, and avoid attachment size problems.",
      },
      {
        question: "Will WhatsApp compress it again?",
        answer:
          "Often yes, but starting with a smaller clean MP4 usually makes the upload faster.",
      },
    ],
    relatedSlugs: ["compress-video-for-telegram", "compress-video-to-25mb", "compress-mov"],
  },
  {
    slug: "compress-video-for-email",
    category: "platform",
    title: "Compress Video for Email - Reduce Video Attachment Size",
    metaDescription:
      "Compress video for email attachments. Reduce MP4, MOV, and WebM files locally in your browser to fit common email limits.",
    h1: "Compress Video for Email",
    intro:
      "Make a video small enough to attach or share cleanly through Gmail, Outlook, and other email tools.",
    defaultTargetMb: 25,
    intent: "Create an email-friendly video file",
    guidance: [
      "Use 25MB as a practical target for many email providers.",
      "Short clips preserve detail better than long clips at the same target.",
      "If attachment delivery fails, send a cloud link instead.",
    ],
    faqs: [
      {
        question: "What video size is best for email?",
        answer:
          "Under 25MB is a common target, but exact limits vary by provider and account.",
      },
      {
        question: "Is this private?",
        answer:
          "Yes. The browser does the compression locally and does not upload your video to this site.",
      },
    ],
    relatedSlugs: ["compress-video-to-25mb", "compress-video-for-powerpoint"],
  },
  {
    slug: "compress-video-for-github",
    category: "platform",
    title: "Compress Video for GitHub Issues and Pull Requests",
    metaDescription:
      "Compress screen recordings and MP4 videos for GitHub issues, pull requests, and bug reports without uploading your video.",
    h1: "Compress Video for GitHub",
    intro:
      "Create smaller screen recordings for issues, pull requests, bug reports, and README demos.",
    defaultTargetMb: 10,
    intent: "Prepare compact engineering screen recordings",
    guidance: [
      "Crop or trim long recordings before compressing when possible.",
      "Text-heavy screen recordings usually look good at lower bitrates.",
      "Keep the frame rate modest for UI demos.",
    ],
    faqs: [
      {
        question: "Why are screen recordings so large?",
        answer:
          "Recorders often use high bitrates to keep text sharp, so short clips can become surprisingly large.",
      },
      {
        question: "Can I compress private bug videos?",
        answer:
          "Yes. The file stays local while it is processed in your browser.",
      },
    ],
    relatedSlugs: ["compress-screen-recording", "compress-video-to-10mb"],
  },
  {
    slug: "compress-video-for-tiktok",
    category: "platform",
    title: "Compress Video for TikTok - Free Online Compressor",
    metaDescription:
      "Compress videos for TikTok in your browser. Shrink MP4, MOV, and WebM clips for faster uploads with no watermark and no upload.",
    h1: "Compress Video for TikTok",
    intro:
      "Shrink clips before posting to TikTok for faster uploads and fewer failed posts, especially on mobile data.",
    defaultPreset: "balanced",
    intent: "Prepare a lighter video for TikTok",
    guidance: [
      "Vertical 1080 × 1920 is all TikTok needs — 4K source files are wasted bandwidth.",
      "TikTok re-encodes every upload, so a clean balanced MP4 is the sweet spot.",
      "Compress before uploading when you are on mobile data or a slow connection.",
    ],
    faqs: [
      {
        question: "Does TikTok compress my video again?",
        answer:
          "Yes. TikTok always re-encodes uploads, so sending a clean, reasonably sized MP4 loses nothing.",
      },
      {
        question: "What format does TikTok prefer?",
        answer:
          "MP4 with H.264 video and AAC audio is the most reliable format for TikTok uploads.",
      },
    ],
    relatedSlugs: ["compress-video-for-instagram", "reduce-video-size"],
  },
  {
    slug: "compress-video-for-instagram",
    category: "platform",
    title: "Compress Video for Instagram - Reels, Stories and Posts",
    metaDescription:
      "Compress videos for Instagram Reels, Stories, and posts in your browser. Smaller MP4 files, faster uploads, no watermark.",
    h1: "Compress Video for Instagram",
    intro:
      "Make Reels, Stories, and feed videos lighter before uploading, so posts go out faster and fail less often.",
    defaultPreset: "balanced",
    intent: "Slim down a video for Instagram",
    guidance: [
      "1080 × 1920 vertical covers Reels and Stories; feed posts need even less.",
      "Instagram re-encodes aggressively, so a balanced preset is usually enough.",
      "Trim to the moment you actually want to post before compressing.",
    ],
    faqs: [
      {
        question: "Why does my Instagram upload look blurry?",
        answer:
          "Instagram re-encodes every video. Uploading a clean, sharp MP4 at 1080p vertical gives its encoder the best starting point.",
      },
      {
        question: "Which format works best for Instagram?",
        answer:
          "MP4 with H.264 and AAC is the most compatible choice for Reels, Stories, and posts.",
      },
    ],
    relatedSlugs: ["compress-video-for-tiktok", "compress-video-for-facebook"],
  },
  {
    slug: "compress-video-for-telegram",
    category: "platform",
    title: "Compress Video for Telegram - Free Online Compressor",
    metaDescription:
      "Compress videos for Telegram in your browser. Control quality yourself instead of letting Telegram crush your video.",
    h1: "Compress Video for Telegram",
    intro:
      "Telegram heavily compresses videos sent as media. Compress the file yourself, send it as a file, and keep control of the quality.",
    defaultPreset: "balanced",
    intent: "Keep quality under your control on Telegram",
    guidance: [
      "Compress here first, then send as a file to skip Telegram's own re-encode.",
      "Balanced mode keeps chat clips sharp at a fraction of the size.",
      "For groups with slow connections, try a 25MB or 50MB target.",
    ],
    faqs: [
      {
        question: "Why do Telegram videos look bad?",
        answer:
          "Videos sent as media are re-encoded at a low bitrate. Sending a pre-compressed video as a file preserves your quality.",
      },
      {
        question: "Is there a size limit on Telegram?",
        answer:
          "Telegram allows very large files, but smaller videos send faster and are kinder to recipients on mobile data.",
      },
    ],
    relatedSlugs: ["compress-video-for-whatsapp", "compress-video-for-discord"],
  },
  {
    slug: "compress-video-for-slack",
    category: "platform",
    title: "Compress Video for Slack - Shrink Clips for Your Team",
    metaDescription:
      "Compress screen recordings and videos for Slack in your browser. Save workspace storage and share clips faster, with no upload.",
    h1: "Compress Video for Slack",
    intro:
      "Share demos, bug recordings, and clips in Slack without eating your workspace's storage or making teammates wait on downloads.",
    defaultTargetMb: 50,
    intent: "Share lighter clips in Slack",
    guidance: [
      "Free Slack workspaces have tight storage — smaller files keep old messages alive longer.",
      "Screen recordings compress very well; 50MB fits most multi-minute demos.",
      "Teammates on mobile will thank you for a smaller download.",
    ],
    faqs: [
      {
        question: "Why compress before posting to Slack?",
        answer:
          "Uploads count against workspace storage, and big files are slow to preview and download for everyone in the channel.",
      },
      {
        question: "Is a work video safe to compress here?",
        answer:
          "Yes. The video is processed locally in your browser and never uploaded to this site.",
      },
    ],
    relatedSlugs: ["compress-screen-recording", "compress-video-for-github"],
  },
  {
    slug: "compress-video-for-reddit",
    category: "platform",
    title: "Compress Video for Reddit - Free Online Compressor",
    metaDescription:
      "Compress videos for Reddit posts in your browser. Faster uploads and smoother playback with no watermark and no sign-up.",
    h1: "Compress Video for Reddit",
    intro:
      "Prepare clips for subreddit posts that upload quickly and play smoothly, without pushing an oversized file through Reddit's encoder.",
    defaultPreset: "balanced",
    intent: "Get a clip Reddit-ready",
    guidance: [
      "1080p is plenty for Reddit's player — extra resolution is discarded anyway.",
      "MP4 H.264 uploads are processed most reliably by Reddit.",
      "If the post keeps failing, aim for a smaller target size and retry.",
    ],
    faqs: [
      {
        question: "Why does Reddit fail to process my video?",
        answer:
          "Very large or unusually encoded files are more likely to fail. A moderate-size H.264 MP4 processes most reliably.",
      },
      {
        question: "Does Reddit reduce my video quality?",
        answer:
          "Yes, Reddit re-encodes uploads for streaming. Starting from a clean compressed MP4 avoids double-degrading the result.",
      },
    ],
    relatedSlugs: ["compress-video-for-discord", "compress-video-for-twitter"],
  },
  {
    slug: "compress-video-for-twitter",
    category: "platform",
    title: "Compress Video for Twitter / X - Free Online Compressor",
    metaDescription:
      "Compress videos for Twitter / X in your browser. Smaller MP4 files that upload fast and play cleanly, with no watermark.",
    h1: "Compress Video for Twitter / X",
    intro:
      "Trim your video's size before posting to X so uploads finish fast and playback starts instantly for viewers.",
    defaultPreset: "balanced",
    intent: "Fit a video for posting on X",
    guidance: [
      "1280 × 720 or 1080p is ideal for the timeline player.",
      "H.264 MP4 with AAC audio is the format X handles best.",
      "Keep clips tight — shorter videos hold quality at much smaller sizes.",
    ],
    faqs: [
      {
        question: "Why won't X accept my video?",
        answer:
          "Common causes are oversized files, unsupported codecs, or very long durations. A compressed H.264 MP4 resolves most of them.",
      },
      {
        question: "Does X compress videos after upload?",
        answer:
          "Yes. X re-encodes for streaming, so uploading a clean moderately sized MP4 gives the best final quality.",
      },
    ],
    relatedSlugs: ["compress-video-for-reddit", "compress-video-for-facebook"],
  },
  {
    slug: "compress-video-for-facebook",
    category: "platform",
    title: "Compress Video for Facebook - Free Online Compressor",
    metaDescription:
      "Compress videos for Facebook posts, Reels, and Stories in your browser. Faster uploads with no watermark and no account.",
    h1: "Compress Video for Facebook",
    intro:
      "Lighten videos before posting to Facebook feeds, Reels, Stories, and groups so uploads finish faster and play smoothly.",
    defaultPreset: "balanced",
    intent: "Prepare a lighter video for Facebook",
    guidance: [
      "1080p H.264 MP4 is the safest upload for every Facebook surface.",
      "Facebook re-encodes uploads, so the balanced preset loses nothing visible.",
      "Compressing first matters most on slow or mobile connections.",
    ],
    faqs: [
      {
        question: "Why is my Facebook upload stuck?",
        answer:
          "Large files on slow connections often stall. Compressing the video first is the quickest fix.",
      },
      {
        question: "Will Facebook lower my video quality?",
        answer:
          "Facebook re-encodes all uploads for streaming. A clean 1080p MP4 source keeps the final result looking good.",
      },
    ],
    relatedSlugs: ["compress-video-for-messenger", "compress-video-for-instagram"],
  },
  {
    slug: "compress-video-for-messenger",
    category: "platform",
    title: "Compress Video for Messenger - Fit the 25MB Limit",
    metaDescription:
      "Compress videos to fit Messenger's 25MB file limit. Shrink MP4, MOV, and WebM clips in your browser with no upload.",
    h1: "Compress Video for Messenger",
    intro:
      "Messenger caps file attachments at 25MB. Compress your video below the limit so it sends the first time.",
    defaultTargetMb: 25,
    intent: "Fit Messenger's 25MB attachment cap",
    guidance: [
      "Target 25MB or slightly below to clear the attachment check.",
      "Short phone clips usually stay sharp at this size.",
      "For long videos, lower the resolution before targeting 25MB.",
    ],
    faqs: [
      {
        question: "Why can't I send my video on Messenger?",
        answer:
          "File attachments over 25MB are rejected. Compressing the video below that limit fixes the send error.",
      },
      {
        question: "Will the quality still be good at 25MB?",
        answer:
          "For clips up to a few minutes, yes. Very long videos need a lower resolution to look good at 25MB.",
      },
    ],
    relatedSlugs: ["compress-video-for-facebook", "compress-video-for-whatsapp"],
  },
  {
    slug: "compress-video-for-powerpoint",
    category: "platform",
    title: "Compress Video for PowerPoint - Keep Decks Small",
    metaDescription:
      "Compress videos before embedding them in PowerPoint. Keep decks small enough to email and quick to open, with no upload.",
    h1: "Compress Video for PowerPoint",
    intro:
      "Embedded videos are the number one reason decks balloon to hundreds of MB. Compress the clip first and keep your file easy to share.",
    defaultTargetMb: 25,
    intent: "Embed video without bloating the deck",
    guidance: [
      "A deck you plan to email should stay under ~25MB in total.",
      "720p is plenty for a video playing inside a slide.",
      "MP4 (H.264 + AAC) is the format PowerPoint handles most reliably.",
    ],
    faqs: [
      {
        question: "Why is my PowerPoint file so large?",
        answer:
          "Embedded videos are stored inside the .pptx file, so a 200MB clip makes a 200MB deck. Compress the video before inserting it.",
      },
      {
        question: "What video format works best in PowerPoint?",
        answer:
          "MP4 with H.264 video and AAC audio plays reliably in modern PowerPoint on both Windows and Mac.",
      },
    ],
    relatedSlugs: ["compress-video-for-email", "compress-screen-recording"],
  },
  {
    slug: "compress-screen-recording",
    category: "usecase",
    title: "Compress Screen Recording Online - Free and Private",
    metaDescription:
      "Compress screen recordings in your browser. Reduce large UI demos, tutorials, and bug report videos with no upload.",
    h1: "Compress a Screen Recording",
    intro:
      "Turn bulky screen recordings into smaller MP4 files that are easier to send, upload, and attach.",
    defaultPreset: "balanced",
    intent: "Shrink UI demos and captured screens",
    guidance: [
      "Try 1080p or 720p output for readable UI text.",
      "Use balanced mode first, then target MB if you need a strict cap.",
      "Trim dead time before compressing for the best result.",
    ],
    faqs: [
      {
        question: "How do I keep text readable?",
        answer:
          "Avoid over-compressing long recordings. Use a larger target or keep resolution at 1080p when text matters.",
      },
      {
        question: "Is MP4 good for screen recordings?",
        answer:
          "Yes. MP4 is easy to share and works in most browsers, chat apps, and issue trackers.",
      },
    ],
    relatedSlugs: ["compress-video-for-github", "compress-video-for-slack"],
  },
  {
    slug: "compress-4k-video-for-iphone",
    category: "usecase",
    title: "Compress 4K Video from iPhone - Free Online Compressor",
    metaDescription:
      "Compress huge 4K iPhone videos in your browser. Turn hundreds of MB per minute into a shareable MP4 with no upload.",
    h1: "Compress 4K Video for iPhone",
    intro:
      "iPhone 4K clips can take 300MB or more per minute of footage. Shrink them into shareable MP4 files without the video ever leaving your device.",
    defaultPreset: "balanced",
    intent: "Tame huge 4K iPhone recordings",
    guidance: [
      "Use a target MB when a chat app or email has a hard limit.",
      "Balanced mode cuts most 4K clips by well over half with little visible loss.",
      "Very large files can be slow in a browser — a desktop handles them best.",
    ],
    faqs: [
      {
        question: "Why are iPhone 4K videos so large?",
        answer:
          "4K at 30 or 60 fps stores a huge amount of pixel data — roughly 170 to 400MB per minute depending on settings.",
      },
      {
        question: "Will the compressed video still look sharp on a phone?",
        answer:
          "For sharing in chat and social apps, yes. Most of the size drop comes from bitrate the eye barely notices on a phone screen.",
      },
    ],
    relatedSlugs: ["compress-mov", "reduce-video-size"],
  },
  {
    slug: "compress-mp4",
    category: "format",
    title: "Compress MP4 Online - Free MP4 Video Compressor",
    metaDescription:
      "Compress MP4 videos online in your browser. Reduce file size privately with no upload, no watermark, and no sign-up.",
    h1: "Compress MP4 Online",
    intro:
      "Reduce the size of MP4 files while keeping the output easy to play on phones, browsers, and social platforms.",
    defaultPreset: "balanced",
    intent: "Reduce an MP4 file size",
    guidance: [
      "MP4 is already compatible, so the main job is choosing the right bitrate.",
      "Use target MB for upload limits and quality mode for general shrinking.",
      "If your MP4 is 4K, downscaling can save a lot of space.",
    ],
    faqs: [
      {
        question: "Will the output stay MP4?",
        answer:
          "Yes. The default output is MP4 for broad compatibility.",
      },
      {
        question: "Can I compress MP4 without a watermark?",
        answer:
          "Yes. This tool does not add a watermark.",
      },
    ],
    relatedSlugs: ["reduce-video-size", "compress-video-to-50mb"],
  },
  {
    slug: "compress-mov",
    category: "format",
    title: "Compress MOV Online - Reduce iPhone Video Size",
    metaDescription:
      "Compress MOV files from iPhone and cameras. Convert to smaller MP4 locally in your browser with no upload.",
    h1: "Compress MOV Files",
    intro:
      "Shrink large MOV files from iPhones, cameras, and editing apps into smaller MP4 files for sharing.",
    defaultPreset: "balanced",
    intent: "Shrink MOV files and export MP4",
    guidance: [
      "MOV files from phones can be very large at 4K or high frame rates.",
      "MP4 output is usually easier to share across apps.",
      "Use a 25MB or 50MB target when sending to chat or email.",
    ],
    faqs: [
      {
        question: "Does this convert MOV to MP4?",
        answer:
          "Yes. The compressed output is an MP4 file for compatibility.",
      },
      {
        question: "Are iPhone videos supported?",
        answer:
          "Common iPhone MOV files should work, though very large 4K videos can be slow in the browser.",
      },
    ],
    relatedSlugs: ["compress-4k-video-for-iphone", "compress-video-for-whatsapp", "compress-mp4"],
  },
  {
    slug: "reduce-video-size",
    category: "usecase",
    title: "Reduce Video Size Online - Free Private Compressor",
    metaDescription:
      "Reduce video file size in your browser. Compress MP4, MOV, and WebM videos privately with no upload or watermark.",
    h1: "Reduce Video Size Online",
    intro:
      "Make videos smaller for uploading, sending, and saving space while keeping control of the file on your device.",
    defaultPreset: "balanced",
    intent: "Shrink a video without a strict platform target",
    guidance: [
      "Start with balanced mode for a clean size reduction.",
      "Choose a target MB only when a platform has a strict limit.",
      "For huge videos, downscale before aiming for a tiny file.",
    ],
    faqs: [
      {
        question: "What makes a video smaller?",
        answer:
          "Lower bitrate, lower resolution, lower frame rate, and more efficient encoding all reduce file size.",
      },
      {
        question: "Does compression reduce quality?",
        answer:
          "Most compression trades some detail for a smaller file. The goal is to keep the visual result good enough for sharing.",
      },
    ],
    relatedSlugs: ["compress-mp4", "compress-video-without-losing-quality"],
  },
  {
    slug: "compress-video-without-watermark",
    category: "usecase",
    title: "Compress Video Without Watermark - Free Online Tool",
    metaDescription:
      "Compress video without adding a watermark. Reduce MP4, MOV, and WebM size locally in your browser with no sign-up.",
    h1: "Compress Video Without Watermark",
    intro:
      "Reduce video file size without branding the result. Your output stays clean and ready to share.",
    defaultPreset: "balanced",
    intent: "Shrink videos without adding branding",
    guidance: [
      "The compressed file is downloaded directly from your browser.",
      "No account is required for the free browser-local compressor.",
      "Use target MB presets when a platform has an upload limit.",
    ],
    faqs: [
      {
        question: "Do you add a watermark?",
        answer:
          "No. The exported MP4 is not watermarked.",
      },
      {
        question: "Do I need to sign up?",
        answer:
          "No. The free local compressor works without an account.",
      },
    ],
    relatedSlugs: ["reduce-video-size", "compress-mp4"],
  },
  {
    slug: "compress-video-without-losing-quality",
    category: "usecase",
    title: "Compress Video Without Losing Quality - Free Online Tool",
    metaDescription:
      "Compress video with minimal quality loss in your browser. Visually clean MP4 output with no upload and no watermark.",
    h1: "Compress Video Without Losing Quality",
    intro:
      "Shrink a video while keeping it visually indistinguishable from the original for most viewers. Best when quality matters more than hitting a size cap.",
    defaultPreset: "quality",
    intent: "Keep quality high while trimming size",
    guidance: [
      "The quality preset uses a conservative encode that preserves detail.",
      "Expect smaller savings than aggressive modes — that is the trade-off.",
      "Source files with high bitrates (phone 4K, screen recorders) shrink the most.",
    ],
    faqs: [
      {
        question: "Is this truly lossless?",
        answer:
          "No re-encode is mathematically lossless, but the quality preset targets a level where differences are hard to see at normal viewing.",
      },
      {
        question: "How much smaller will my file get?",
        answer:
          "It depends on the source. Phone recordings and screen captures often shrink 40 to 70% with no visible change.",
      },
    ],
    relatedSlugs: ["reduce-video-size", "compress-4k-video-for-iphone"],
  },
];

export const pageBySlug = new Map(toolPages.map((page) => [page.slug, page]));

export function getRelatedPages(page: ToolPage) {
  return page.relatedSlugs
    .map((slug) => pageBySlug.get(slug))
    .filter((related): related is ToolPage => Boolean(related));
}

export function pagesByCategory(category: ToolPageCategory) {
  return toolPages.filter((page) => page.category === category);
}
