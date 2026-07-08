export type Locale = "en" | "zh" | "ja" | "ko";

export const locales: Locale[] = ["en", "zh", "ja", "ko"];

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim().replace(/\/$/, "");

  try {
    const url = new URL(trimmed);
    url.hostname = url.hostname.toLowerCase();
    return url.toString().replace(/\/$/, "");
  } catch {
    return trimmed.toLowerCase();
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://compressvideo.dev");
export const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@compressvideo.dev").toLowerCase();

export function localePath(locale: Locale, path: string) {
  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function openGraphFor(locale: Locale, title: string, description: string, path: string) {
  return {
    title,
    description,
    url: localePath(locale, path),
    siteName: "CompressVideo",
    locale,
    type: "website" as const,
  };
}

export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: Object.fromEntries([
      ...locales.map((nextLocale) => [nextLocale, localePath(nextLocale, path)]),
      ["x-default", localePath("en", path)],
    ]),
  };
}

type FaqItem = { question: string; answer: string };

export type UiStrings = {
  langName: string;
  header: {
    nav: Array<{ href: string; label: string }>;
  };
  footer: {
    blurb: string;
    tagline: string;
    groupTitles: { platform: string; size: string; more: string };
    legalLinks: Array<{ href: string; label: string }>;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    sub: string;
    badges: string[];
    modesTitle: string;
    modes: Array<{ title: string; copy: string }>;
    toolsTitle: string;
    toolsSub: string;
    groupTitles: { platform: string; size: string; more: string };
    howTitle: string;
    howSub: string;
    steps: Array<{ title: string; copy: string }>;
    whyTitle: string;
    whyCards: Array<{ title: string; copy: string }>;
    faqTitle: string;
    faqs: FaqItem[];
  };
  toolPage: {
    settingsTitle: string;
    howToTitle: string;
    howToSteps: string[];
    faqTitle: string;
    relatedTitle: string;
    generalTool: string;
  };
  compressor: {
    dropTitle: string;
    dropHint: string;
    chooseFile: string;
    panelTitle: string;
    targetSize: string;
    autoPlaceholder: string;
    mb: string;
    presets: { smaller: string; balanced: string; quality: string };
    compress: string;
    working: string;
    reset: string;
    statuses: {
      ready: string;
      loading: string;
      reading: string;
      compressing: string;
      preparing: string;
      done: string;
    };
    compressedTo: (size: string) => string;
    smallerBy: (percent: number) => string;
    fileReady: string;
    download: string;
    privacyNote: string;
    errors: {
      notVideo: string;
      chooseFirst: string;
      metadata: string;
      failed: string;
    };
  };
};

export const ui: Record<Locale, UiStrings> = {
  en: {
    langName: "English",
    header: {
      nav: [
        { href: "/compress-video-to-10mb", label: "10MB" },
        { href: "/compress-video-for-discord", label: "Discord" },
        { href: "/compress-4k-video-for-iphone", label: "4K iPhone" },
        { href: "/compress-mov", label: "MOV" },
      ],
    },
    footer: {
      blurb:
        "Free online video compressor. Compress MP4, MOV, and WebM files in your browser — nothing is uploaded to a server. Fast, private, no watermark, no sign-up.",
      tagline: "Videos are processed in your browser and never uploaded.",
      groupTitles: {
        platform: "Compress for apps",
        size: "Compress to a size",
        more: "Formats & use cases",
      },
      legalLinks: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
        { href: "/contact", label: "Contact" },
      ],
    },
    home: {
      metaTitle: "Compress Video Online - Free, Private, No Watermark",
      metaDescription:
        "Compress MP4, MOV, and WebM videos online in your browser. Hit an exact MB target or pick a quality preset — no upload, no sign-up, no watermark.",
      eyebrow: "Browser video compressor",
      h1: "Compress video online - free, private, no watermark",
      sub: "Reduce MP4, MOV, and WebM file size directly in your browser. Set an exact MB target or pick a quality preset - your video never leaves your device.",
      badges: ["No upload", "Exact MB targets", "No watermark"],
      modesTitle: "Two ways to compress",
      modes: [
        {
          title: "Target an exact size",
          copy: "Type the MB limit you need - 8, 10, 25, 50 or anything custom - and the tool computes the right bitrate from your video's length. Most compressors only offer vague quality sliders.",
        },
        {
          title: "Pick a quality preset",
          copy: "Choose Smaller, Balanced, or Better quality when you just want a lighter file without a strict cap. Balanced is the right default for sharing.",
        },
      ],
      toolsTitle: "Compress for a specific need",
      toolsSub:
        "Each page opens the same private compressor with settings and guidance tuned for that exact upload limit, platform, or file type.",
      groupTitles: {
        platform: "For apps & platforms",
        size: "To an exact size",
        more: "Formats & use cases",
      },
      howTitle: "How it works",
      howSub:
        "The tool uses ffmpeg.wasm, a browser build of FFmpeg, to encode your video locally on your own device.",
      steps: [
        { title: "Choose", copy: "Pick an MP4, MOV, or WebM from your device." },
        { title: "Tune", copy: "Type a target MB or choose a quality preset." },
        { title: "Download", copy: "Save a compressed MP4 without a watermark." },
      ],
      whyTitle: "Why compress video in your browser?",
      whyCards: [
        {
          title: "Private by design",
          copy: "Files are processed on your device with WebAssembly. Nothing is uploaded, so there is nothing to store, leak, or delete.",
        },
        {
          title: "No upload wait",
          copy: "Skip pushing a huge file to a server and pulling it back down. Compression starts the moment you pick a file.",
        },
        {
          title: "Free local compression",
          copy: "No file-size paywall, no watermark, no account. Very large files are limited only by your browser and device memory.",
        },
        {
          title: "Clean MP4 output",
          copy: "H.264 + AAC MP4 plays everywhere: phones, browsers, chat apps, email clients, and slide decks.",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Are videos uploaded to a server?",
          answer:
            "No. The compressor runs in your browser with WebAssembly, so your video stays on your device from start to finish.",
        },
        {
          question: "Can I compress a video to an exact size in MB?",
          answer:
            "Yes. Enter a target in MB and the tool calculates the bitrate from your video's duration. Encoding is not perfectly exact, but the output lands close to the target - usually just under it.",
        },
        {
          question: "Will compression reduce quality?",
          answer:
            "Usually some quality is traded for a smaller file. Use a larger target or the quality preset when detail matters most.",
        },
        {
          question: "Which video formats are supported?",
          answer:
            "MP4, MOV, and WebM inputs are supported. The output is MP4 with H.264 video and AAC audio for maximum compatibility.",
        },
        {
          question: "Is there a file size limit?",
          answer:
            "There is no hard limit, but very large files are constrained by your browser's memory. Multi-gigabyte 4K videos work best on a desktop computer.",
        },
        {
          question: "Do I need an account? Is there a watermark?",
          answer:
            "No account, no watermark, no payment. The downloaded MP4 is clean and yours.",
        },
        {
          question: "Why is compression slow for big files?",
          answer:
            "Your own device does the encoding, and WebAssembly is slower than a native app. Closing heavy tabs helps, and shorter or lower-resolution clips finish much faster.",
        },
        {
          question: "Does it work on a phone?",
          answer:
            "Yes, for smaller clips. Large 4K recordings can exceed mobile browser memory, so compress those on a desktop when possible.",
        },
      ],
    },
    toolPage: {
      settingsTitle: "Recommended settings",
      howToTitle: "How to compress your video",
      howToSteps: [
        "Drop your MP4, MOV, or WebM file into the compressor, or click to choose one.",
        "Set a target size in MB, or pick a quality preset if you have no strict limit.",
        "Click Compress video and wait while your browser encodes the file locally.",
        "Download the compressed MP4 - no watermark, and nothing was uploaded.",
      ],
      faqTitle: "Questions",
      relatedTitle: "Related tools",
      generalTool: "General video compressor",
    },
    compressor: {
      dropTitle: "Drop a video here",
      dropHint: "MP4, MOV, and WebM are processed locally in your browser.",
      chooseFile: "Choose file",
      panelTitle: "Compression",
      targetSize: "Target size",
      autoPlaceholder: "Auto",
      mb: "MB",
      presets: { smaller: "Smaller", balanced: "Balanced", quality: "Better quality" },
      compress: "Compress video",
      working: "Working",
      reset: "Reset",
      statuses: {
        ready: "Ready",
        loading: "Loading video engine",
        reading: "Reading video",
        compressing: "Compressing video",
        preparing: "Preparing download",
        done: "Done",
      },
      compressedTo: (size) => `Compressed to ${size}`,
      smallerBy: (percent) => `${percent}% smaller than the original.`,
      fileReady: "Your file is ready.",
      download: "Download MP4",
      privacyNote: "Your video is processed in this browser and is not uploaded to this site.",
      errors: {
        notVideo: "Choose a video file such as MP4, MOV, or WebM.",
        chooseFirst: "Choose a video first.",
        metadata: "Could not read video metadata.",
        failed: "Compression failed. Try a smaller video.",
      },
    },
  },
  zh: {
    langName: "简体中文",
    header: {
      nav: [
        { href: "/compress-video-to-10mb", label: "10MB" },
        { href: "/compress-video-for-whatsapp", label: "WhatsApp" },
        { href: "/compress-4k-video-for-iphone", label: "4K 视频" },
        { href: "/compress-mov", label: "MOV" },
      ],
    },
    footer: {
      blurb:
        "免费在线视频压缩工具。在浏览器中压缩 MP4、MOV 和 WebM 文件——不上传到任何服务器。快速、私密、无水印、免注册。",
      tagline: "视频均在你的浏览器中处理，绝不上传。",
      groupTitles: {
        platform: "按应用压缩",
        size: "压缩到指定大小",
        more: "格式与场景",
      },
      legalLinks: [
        { href: "/privacy", label: "隐私" },
        { href: "/terms", label: "条款" },
        { href: "/contact", label: "联系" },
      ],
    },
    home: {
      metaTitle: "在线压缩视频 - 免费、私密、无水印",
      metaDescription:
        "在浏览器中在线压缩 MP4、MOV、WebM 视频。可压缩到精确的 MB 大小，也可按画质档位压缩——不上传、免注册、无水印。",
      eyebrow: "浏览器本地视频压缩",
      h1: "在线压缩视频 - 免费、私密、无水印",
      sub: "直接在浏览器中压缩 MP4、MOV、WebM 视频。可指定精确的 MB 大小，也可选择画质档位——视频全程不离开你的设备。",
      badges: ["不上传", "精确到 MB", "无水印"],
      modesTitle: "两种压缩方式",
      modes: [
        {
          title: "压到精确大小",
          copy: "输入需要的 MB 上限——8、10、25、50 或任意数值，工具会根据视频时长自动计算合适的码率。多数压缩工具只提供模糊的画质滑块。",
        },
        {
          title: "按画质档位",
          copy: "没有严格大小限制时，选择「更小体积」「均衡」或「更高画质」即可得到更轻的文件。日常分享用「均衡」就够了。",
        },
      ],
      toolsTitle: "按需求选择压缩工具",
      toolsSub: "每个页面都是同一个本地压缩器，但针对对应的平台限制、目标大小或文件类型预设了参数和建议。",
      groupTitles: {
        platform: "按应用与平台",
        size: "按目标大小",
        more: "格式与场景",
      },
      howTitle: "工作原理",
      howSub: "本工具使用 ffmpeg.wasm（FFmpeg 的浏览器版本），在你自己的设备上本地完成编码。",
      steps: [
        { title: "选择", copy: "从设备中选择 MP4、MOV 或 WebM 文件。" },
        { title: "调整", copy: "输入目标 MB 大小，或选择一个画质档位。" },
        { title: "下载", copy: "保存压缩后的 MP4，没有任何水印。" },
      ],
      whyTitle: "为什么在浏览器里压缩视频？",
      whyCards: [
        {
          title: "天生私密",
          copy: "文件通过 WebAssembly 在你的设备上处理，不上传任何数据，因此不存在存储、泄露或删除的问题。",
        },
        {
          title: "省去上传等待",
          copy: "不需要把大文件传到服务器再下载回来，选好文件即刻开始压缩。",
        },
        {
          title: "免费本地压缩",
          copy: "没有文件大小付费墙，没有水印，不需要账号。超大文件只受浏览器和设备内存限制。",
        },
        {
          title: "干净的 MP4 输出",
          copy: "H.264 + AAC 的 MP4 在手机、浏览器、聊天应用、邮件和幻灯片中都能直接播放。",
        },
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "视频会被上传到服务器吗？",
          answer: "不会。压缩器通过 WebAssembly 在浏览器中运行，视频从头到尾都留在你的设备上。",
        },
        {
          question: "能把视频压缩到精确的 MB 大小吗？",
          answer:
            "可以。输入目标 MB 数，工具会根据视频时长计算码率。编码无法做到绝对精确，但输出会非常接近目标——通常略小于目标值。",
        },
        {
          question: "压缩会降低画质吗？",
          answer: "通常会用一些画质换取更小的体积。对画质要求高时，可以调大目标体积或使用「更高画质」档位。",
        },
        {
          question: "支持哪些视频格式？",
          answer: "支持 MP4、MOV、WebM 输入。输出为 H.264 视频 + AAC 音频的 MP4，兼容性最好。",
        },
        {
          question: "有文件大小限制吗？",
          answer: "没有硬性限制，但超大文件受浏览器内存约束。数 GB 的 4K 视频建议在电脑上压缩。",
        },
        {
          question: "需要注册吗？有水印吗？",
          answer: "不需要账号，没有水印，不收费。下载的 MP4 干净完整，完全属于你。",
        },
        {
          question: "为什么大文件压缩很慢？",
          answer:
            "编码由你自己的设备完成，WebAssembly 比原生应用慢一些。关掉占资源的标签页会有帮助；更短或分辨率更低的视频会快很多。",
        },
        {
          question: "手机上能用吗？",
          answer: "较小的视频可以。大型 4K 录像可能超出手机浏览器内存，建议尽量在电脑上压缩。",
        },
      ],
    },
    toolPage: {
      settingsTitle: "推荐设置",
      howToTitle: "如何压缩你的视频",
      howToSteps: [
        "把 MP4、MOV 或 WebM 文件拖入压缩器，或点击选择文件。",
        "输入目标 MB 大小；没有严格限制时可直接选画质档位。",
        "点击「压缩视频」，浏览器会在本地完成编码。",
        "下载压缩后的 MP4——无水印，全程没有任何上传。",
      ],
      faqTitle: "常见问题",
      relatedTitle: "相关工具",
      generalTool: "通用视频压缩器",
    },
    compressor: {
      dropTitle: "拖放视频到这里",
      dropHint: "MP4、MOV、WebM 均在浏览器本地处理。",
      chooseFile: "选择文件",
      panelTitle: "压缩设置",
      targetSize: "目标大小",
      autoPlaceholder: "自动",
      mb: "MB",
      presets: { smaller: "更小体积", balanced: "均衡", quality: "更高画质" },
      compress: "压缩视频",
      working: "处理中",
      reset: "重置",
      statuses: {
        ready: "就绪",
        loading: "正在加载视频引擎",
        reading: "正在读取视频",
        compressing: "正在压缩视频",
        preparing: "正在准备下载",
        done: "完成",
      },
      compressedTo: (size) => `已压缩到 ${size}`,
      smallerBy: (percent) => `比原文件小 ${percent}%。`,
      fileReady: "文件已就绪。",
      download: "下载 MP4",
      privacyNote: "视频在当前浏览器中处理，不会上传到本站。",
      errors: {
        notVideo: "请选择视频文件，例如 MP4、MOV 或 WebM。",
        chooseFirst: "请先选择一个视频。",
        metadata: "无法读取视频信息。",
        failed: "压缩失败，请尝试更小的视频。",
      },
    },
  },
  ja: {
    langName: "日本語",
    header: {
      nav: [
        { href: "/compress-video-to-10mb", label: "10MB" },
        { href: "/compress-video-for-discord", label: "Discord" },
        { href: "/compress-4k-video-for-iphone", label: "4K iPhone" },
        { href: "/compress-mov", label: "MOV" },
      ],
    },
    footer: {
      blurb:
        "無料のオンライン動画圧縮ツール。MP4、MOV、WebM をブラウザ内で圧縮します。サーバーへのアップロードなし、ウォーターマークなし、登録不要です。",
      tagline: "動画はブラウザ内で処理され、アップロードされません。",
      groupTitles: {
        platform: "アプリ向け圧縮",
        size: "指定サイズへ圧縮",
        more: "形式と用途",
      },
      legalLinks: [
        { href: "/privacy", label: "プライバシー" },
        { href: "/terms", label: "利用規約" },
        { href: "/contact", label: "お問い合わせ" },
      ],
    },
    home: {
      metaTitle: "動画をオンラインで圧縮 - 無料、プライベート、透かしなし",
      metaDescription:
        "MP4、MOV、WebM 動画をブラウザで圧縮。目標 MB を指定するか画質プリセットを選ぶだけ。アップロードなし、登録不要、透かしなし。",
      eyebrow: "ブラウザ動画圧縮",
      h1: "動画をオンラインで圧縮 - 無料、プライベート、透かしなし",
      sub: "MP4、MOV、WebM のファイルサイズをブラウザ内で直接小さくできます。目標 MB または画質プリセットを選べます。動画は端末から外に出ません。",
      badges: ["アップロードなし", "目標 MB 指定", "透かしなし"],
      modesTitle: "2つの圧縮方法",
      modes: [
        {
          title: "指定サイズを目指す",
          copy: "8、10、25、50MB など必要な上限を入力すると、動画の長さから適切なビットレートを計算します。",
        },
        {
          title: "画質プリセットを選ぶ",
          copy: "厳密なサイズ制限がない場合は、小さめ、バランス、高画質から選べます。共有用にはバランスが使いやすい設定です。",
        },
      ],
      toolsTitle: "目的別に圧縮",
      toolsSub:
        "各ページは同じプライベート圧縮ツールを開き、アップロード制限、プラットフォーム、ファイル形式に合わせた設定と案内を表示します。",
      groupTitles: {
        platform: "アプリとプラットフォーム",
        size: "指定サイズ",
        more: "形式と用途",
      },
      howTitle: "仕組み",
      howSub:
        "このツールは FFmpeg のブラウザ版である ffmpeg.wasm を使い、動画を端末上でローカルにエンコードします。",
      steps: [
        { title: "選択", copy: "端末から MP4、MOV、WebM を選びます。" },
        { title: "調整", copy: "目標 MB を入力するか、画質プリセットを選びます。" },
        { title: "ダウンロード", copy: "透かしなしの圧縮済み MP4 を保存します。" },
      ],
      whyTitle: "なぜブラウザで動画を圧縮するのか",
      whyCards: [
        {
          title: "プライバシー重視",
          copy: "WebAssembly によりファイルは端末上で処理されます。アップロードされないため、保存や漏えいの心配を減らせます。",
        },
        {
          title: "アップロード待ちなし",
          copy: "大きなファイルをサーバーへ送って戻す必要がありません。ファイルを選ぶとすぐに圧縮を始められます。",
        },
        {
          title: "無料のローカル圧縮",
          copy: "ファイルサイズの有料制限、透かし、アカウントはありません。非常に大きなファイルはブラウザと端末メモリに依存します。",
        },
        {
          title: "互換性の高い MP4",
          copy: "H.264 + AAC の MP4 は、スマートフォン、ブラウザ、チャット、メール、スライドで再生しやすい形式です。",
        },
      ],
      faqTitle: "よくある質問",
      faqs: [
        {
          question: "動画はサーバーにアップロードされますか？",
          answer: "いいえ。圧縮は WebAssembly を使ってブラウザ内で行われるため、動画は端末上に残ります。",
        },
        {
          question: "動画を指定した MB に圧縮できますか？",
          answer:
            "はい。目標 MB を入力すると、動画の長さからビットレートを計算します。完全に正確ではありませんが、目標に近いサイズを目指します。",
        },
        {
          question: "圧縮すると画質は下がりますか？",
          answer: "通常は小さいファイルにするために一部の画質と引き換えになります。画質重視なら大きめの目標または高画質プリセットを使ってください。",
        },
        {
          question: "対応形式は何ですか？",
          answer: "MP4、MOV、WebM の入力に対応しています。出力は互換性の高い H.264 + AAC の MP4 です。",
        },
      ],
    },
    toolPage: {
      settingsTitle: "おすすめ設定",
      howToTitle: "動画を圧縮する方法",
      howToSteps: [
        "MP4、MOV、WebM ファイルを圧縮ツールにドラッグするか、クリックして選択します。",
        "目標サイズを MB で入力するか、厳密な制限がない場合は画質プリセットを選びます。",
        "「動画を圧縮」をクリックし、ブラウザ内でのエンコードを待ちます。",
        "圧縮済み MP4 をダウンロードします。透かしなし、アップロードなしです。",
      ],
      faqTitle: "質問",
      relatedTitle: "関連ツール",
      generalTool: "一般的な動画圧縮",
    },
    compressor: {
      dropTitle: "ここに動画をドロップ",
      dropHint: "MP4、MOV、WebM はブラウザ内でローカル処理されます。",
      chooseFile: "ファイルを選択",
      panelTitle: "圧縮",
      targetSize: "目標サイズ",
      autoPlaceholder: "自動",
      mb: "MB",
      presets: { smaller: "小さめ", balanced: "バランス", quality: "高画質" },
      compress: "動画を圧縮",
      working: "処理中",
      reset: "リセット",
      statuses: {
        ready: "準備完了",
        loading: "動画エンジンを読み込み中",
        reading: "動画を読み込み中",
        compressing: "動画を圧縮中",
        preparing: "ダウンロードを準備中",
        done: "完了",
      },
      compressedTo: (size) => `${size} に圧縮しました`,
      smallerBy: (percent) => `元のファイルより ${percent}% 小さくなりました。`,
      fileReady: "ファイルの準備ができました。",
      download: "MP4 をダウンロード",
      privacyNote: "動画はこのブラウザ内で処理され、このサイトにはアップロードされません。",
      errors: {
        notVideo: "MP4、MOV、WebM などの動画ファイルを選択してください。",
        chooseFirst: "先に動画を選択してください。",
        metadata: "動画情報を読み取れませんでした。",
        failed: "圧縮に失敗しました。より小さい動画でお試しください。",
      },
    },
  },
  ko: {
    langName: "한국어",
    header: {
      nav: [
        { href: "/compress-video-to-10mb", label: "10MB" },
        { href: "/compress-video-for-discord", label: "Discord" },
        { href: "/compress-4k-video-for-iphone", label: "4K iPhone" },
        { href: "/compress-mov", label: "MOV" },
      ],
    },
    footer: {
      blurb:
        "무료 온라인 동영상 압축 도구입니다. MP4, MOV, WebM 파일을 브라우저에서 압축하며 서버 업로드, 워터마크, 가입이 필요 없습니다.",
      tagline: "동영상은 브라우저에서 처리되며 업로드되지 않습니다.",
      groupTitles: {
        platform: "앱별 압축",
        size: "지정 용량으로 압축",
        more: "형식과 사용 사례",
      },
      legalLinks: [
        { href: "/privacy", label: "개인정보" },
        { href: "/terms", label: "이용약관" },
        { href: "/contact", label: "문의" },
      ],
    },
    home: {
      metaTitle: "동영상 온라인 압축 - 무료, 비공개, 워터마크 없음",
      metaDescription:
        "브라우저에서 MP4, MOV, WebM 동영상을 압축하세요. 목표 MB 또는 품질 프리셋을 선택할 수 있으며 업로드, 가입, 워터마크가 없습니다.",
      eyebrow: "브라우저 동영상 압축",
      h1: "동영상 온라인 압축 - 무료, 비공개, 워터마크 없음",
      sub: "MP4, MOV, WebM 파일 크기를 브라우저에서 바로 줄이세요. 목표 MB 또는 품질 프리셋을 선택할 수 있으며 동영상은 기기를 벗어나지 않습니다.",
      badges: ["업로드 없음", "목표 MB 설정", "워터마크 없음"],
      modesTitle: "두 가지 압축 방식",
      modes: [
        {
          title: "정확한 용량 목표",
          copy: "8, 10, 25, 50MB 또는 원하는 값을 입력하면 동영상 길이에 맞춰 적절한 비트레이트를 계산합니다.",
        },
        {
          title: "품질 프리셋 선택",
          copy: "엄격한 용량 제한이 없다면 더 작게, 균형, 더 좋은 품질 중에서 선택하세요. 일반 공유에는 균형 프리셋이 좋습니다.",
        },
      ],
      toolsTitle: "목적에 맞게 압축",
      toolsSub:
        "각 페이지는 같은 비공개 압축 도구를 열고 업로드 제한, 플랫폼, 파일 형식에 맞춘 설정과 안내를 제공합니다.",
      groupTitles: {
        platform: "앱과 플랫폼",
        size: "목표 용량",
        more: "형식과 사용 사례",
      },
      howTitle: "작동 방식",
      howSub:
        "이 도구는 FFmpeg의 브라우저 버전인 ffmpeg.wasm을 사용해 사용자의 기기에서 로컬로 동영상을 인코딩합니다.",
      steps: [
        { title: "선택", copy: "기기에서 MP4, MOV, WebM 파일을 선택합니다." },
        { title: "조정", copy: "목표 MB를 입력하거나 품질 프리셋을 선택합니다." },
        { title: "다운로드", copy: "워터마크 없는 압축 MP4를 저장합니다." },
      ],
      whyTitle: "왜 브라우저에서 동영상을 압축하나요?",
      whyCards: [
        {
          title: "개인정보 중심",
          copy: "파일은 WebAssembly를 통해 기기에서 처리됩니다. 업로드되지 않으므로 저장, 유출, 삭제 걱정을 줄일 수 있습니다.",
        },
        {
          title: "업로드 대기 없음",
          copy: "큰 파일을 서버로 보내고 다시 내려받을 필요가 없습니다. 파일을 선택하면 바로 압축을 시작합니다.",
        },
        {
          title: "무료 로컬 압축",
          copy: "파일 크기 유료 제한, 워터마크, 계정이 없습니다. 매우 큰 파일은 브라우저와 기기 메모리에 따라 제한될 수 있습니다.",
        },
        {
          title: "호환성 좋은 MP4",
          copy: "H.264 + AAC MP4는 휴대폰, 브라우저, 채팅 앱, 이메일, 슬라이드에서 재생하기 좋은 형식입니다.",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "동영상이 서버에 업로드되나요?",
          answer: "아니요. 압축은 WebAssembly를 사용해 브라우저에서 실행되므로 동영상은 기기에 남아 있습니다.",
        },
        {
          question: "동영상을 정확한 MB 크기로 압축할 수 있나요?",
          answer:
            "네. 목표 MB를 입력하면 동영상 길이에 맞춰 비트레이트를 계산합니다. 완전히 정확하지는 않지만 목표에 가까운 크기를 만듭니다.",
        },
        {
          question: "압축하면 화질이 낮아지나요?",
          answer: "보통 더 작은 파일을 위해 일부 품질을 줄입니다. 디테일이 중요하면 더 큰 목표 크기나 고품질 프리셋을 사용하세요.",
        },
        {
          question: "어떤 형식을 지원하나요?",
          answer: "MP4, MOV, WebM 입력을 지원합니다. 출력은 호환성이 좋은 H.264 + AAC MP4입니다.",
        },
      ],
    },
    toolPage: {
      settingsTitle: "추천 설정",
      howToTitle: "동영상 압축 방법",
      howToSteps: [
        "MP4, MOV, WebM 파일을 압축 도구에 끌어다 놓거나 클릭해서 선택합니다.",
        "목표 용량을 MB로 입력하거나 엄격한 제한이 없다면 품질 프리셋을 선택합니다.",
        "동영상 압축을 클릭하고 브라우저에서 인코딩이 끝날 때까지 기다립니다.",
        "워터마크 없는 압축 MP4를 다운로드합니다. 업로드는 없습니다.",
      ],
      faqTitle: "질문",
      relatedTitle: "관련 도구",
      generalTool: "일반 동영상 압축기",
    },
    compressor: {
      dropTitle: "여기에 동영상 놓기",
      dropHint: "MP4, MOV, WebM은 브라우저에서 로컬 처리됩니다.",
      chooseFile: "파일 선택",
      panelTitle: "압축",
      targetSize: "목표 크기",
      autoPlaceholder: "자동",
      mb: "MB",
      presets: { smaller: "더 작게", balanced: "균형", quality: "더 좋은 품질" },
      compress: "동영상 압축",
      working: "처리 중",
      reset: "초기화",
      statuses: {
        ready: "준비됨",
        loading: "동영상 엔진 로딩 중",
        reading: "동영상 읽는 중",
        compressing: "동영상 압축 중",
        preparing: "다운로드 준비 중",
        done: "완료",
      },
      compressedTo: (size) => `${size}(으)로 압축됨`,
      smallerBy: (percent) => `원본보다 ${percent}% 작아졌습니다.`,
      fileReady: "파일이 준비되었습니다.",
      download: "MP4 다운로드",
      privacyNote: "동영상은 이 브라우저에서 처리되며 이 사이트로 업로드되지 않습니다.",
      errors: {
        notVideo: "MP4, MOV, WebM 같은 동영상 파일을 선택하세요.",
        chooseFirst: "먼저 동영상을 선택하세요.",
        metadata: "동영상 정보를 읽을 수 없습니다.",
        failed: "압축에 실패했습니다. 더 작은 동영상으로 시도하세요.",
      },
    },
  },
};
