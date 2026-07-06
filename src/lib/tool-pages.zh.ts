import type { ToolPageContent } from "./tool-pages";

export const zhToolContent: Record<string, ToolPageContent> = {
  "compress-video-to-10mb": {
    title: "把视频压缩到 10MB - 免费在线视频压缩",
    metaDescription:
      "在浏览器中把视频压缩到 10MB。私密压缩 MP4、MOV、WebM 文件，不上传、免注册、无水印。",
    h1: "把视频压缩到 10MB",
    intro:
      "把视频压到能通过严格的上传表单、Discord 免费额度、GitHub 评论区和老式论坛的大小。压缩器完全在你的浏览器中本地运行。",
    intent: "严格压缩到 10MB 以内",
    guidance: [
      "最适合短片段、录屏、Bug 演示和快速分享。",
      "如果源视频较长或是 4K 录制，建议先降到 720p 或更低。",
      "如果画面仍然太糊，试试 25MB 目标或「均衡」档位。",
    ],
    faqs: [
      {
        question: "大视频一定能压到 10MB 吗？",
        answer: "不一定能保证画质。很长或动作激烈的视频可能需要降低分辨率，或选择更大的目标体积。",
      },
      {
        question: "我的视频会被上传吗？",
        answer: "不会。压缩通过 ffmpeg.wasm 在浏览器中完成，文件始终留在你的设备上。",
      },
    ],
  },
  "compress-video-to-25mb": {
    title: "把视频压缩到 25MB - 免费且私密",
    metaDescription:
      "把视频压缩到 25MB，适合邮件和聊天发送。在浏览器本地压缩 MP4、MOV、WebM，无水印。",
    h1: "把视频压缩到 25MB",
    intro: "生成更小的视频，适合作为邮件附件、Messenger 发送，或通过拒收大文件的上传框提交。",
    intent: "满足常见的 25MB 附件限制",
    guidance: [
      "适合邮件附件和手机拍摄的短视频。",
      "语音和简单画面的视频，音频保持 96 kbps 即可。",
      "如果不需要精确卡在 25MB，可以直接用「均衡」档位。",
    ],
    faqs: [
      {
        question: "25MB 适合发邮件吗？",
        answer: "很多邮件服务的附件限制在 25MB 左右。部分服务仍会把大附件转成云盘链接。",
      },
      {
        question: "应该用什么输出格式？",
        answer: "H.264 视频 + AAC 音频的 MP4 是手机、邮件和社交应用中最稳妥的默认选择。",
      },
    ],
  },
  "compress-video-to-50mb": {
    title: "把视频压缩到 50MB - 私密在线压缩",
    metaDescription: "在浏览器中把视频压缩到 50MB。缩小 MP4、MOV、WebM 体积，无需上传你的私人视频。",
    h1: "把视频压缩到 50MB",
    intro: "50MB 是表单、教学平台、团队工具的实用目标，也适合给较长的视频瘦身后再分享。",
    intent: "达到 50MB 的适中目标",
    guidance: [
      "当 10MB 或 25MB 压得太狠时的最佳选择。",
      "适合较长的录屏和手机视频。",
      "平台允许更大上传时，可以试试「更高画质」档位。",
    ],
    faqs: [
      {
        question: "目标体积越大画质越好吗？",
        answer: "通常是。更高的码率给编码器更多空间去保留细节和流畅的动态画面。",
      },
      {
        question: "可以自定义目标大小吗？",
        answer: "可以。在压缩器的目标大小输入框中填写任意 MB 数即可。",
      },
    ],
  },
  "compress-video-to-8mb": {
    title: "把视频压缩到 8MB - 免费在线视频压缩",
    metaDescription: "在浏览器中把视频压缩到 8MB，满足严格的上传限制。不上传、无水印、免注册。",
    h1: "把视频压缩到 8MB",
    intro: "满足论坛、上传表单和旧版 Discord 仍在使用的 8MB 严格上限。所有处理都在浏览器本地完成。",
    intent: "满足 8MB 的严格上传上限",
    guidance: [
      "8MB 很紧张：压缩前先剪短视频或降低分辨率。",
      "语音讲解和录屏在 8MB 下的表现远好于激烈的游戏画面。",
      "如果画质崩了，试试 10MB——很多平台的限制已经放宽了。",
    ],
    faqs: [
      {
        question: "8MB 能放多长的视频？",
        answer: "在可看的画质下通常是 30 到 90 秒。更长的视频需要降低分辨率或放大目标体积。",
      },
      {
        question: "为什么 8MB 是常见限制？",
        answer: "8MB 曾是 Discord 免费用户的经典上传上限，很多论坛和表单也采用了类似的限制。",
      },
    ],
  },
  "compress-video-for-discord": {
    title: "压缩视频发 Discord - 免费在线压缩",
    metaDescription: "为 Discord 压缩 MP4、MOV、WebM 视频。在浏览器中缩小片段，不上传、免账号、无水印。",
    h1: "压缩视频用于 Discord",
    intro: "在 Discord 聊天中发送前，先把游戏片段、录屏和手机视频压小。",
    intent: "让片段更容易在 Discord 发送",
    guidance: [
      "免费账号的严格限制下用 10MB 目标。",
      "较长的片段建议先降到 720p 再压到 10MB。",
      "录屏通常比高速游戏画面更容易压小。",
    ],
    faqs: [
      {
        question: "为什么 Discord 拒收我的视频？",
        answer: "文件可能超过了你的账号或服务器的上传限制，或者格式不容易被 Discord 处理。",
      },
      {
        question: "Discord 用什么格式最好？",
        answer: "MP4 最稳妥，在桌面端和移动端客户端上兼容性最好。",
      },
    ],
  },
  "compress-video-for-whatsapp": {
    title: "压缩视频发 WhatsApp - 免费且私密",
    metaDescription: "在浏览器中为 WhatsApp 压缩视频。把 MP4、MOV、WebM 片段变小，不上传、无水印。",
    h1: "压缩视频用于 WhatsApp",
    intro: "在通过 WhatsApp 聊天、群组和状态分享前，先把手机视频压小。",
    intent: "为 WhatsApp 分享准备更小的视频",
    guidance: [
      "短片段在 16MB 左右通常还能保持清晰。",
      "较长的视频建议选 720p 或「更小体积」档位。",
      "MP4 输出对 WhatsApp 的兼容性最好。",
    ],
    faqs: [
      {
        question: "为什么发 WhatsApp 前要先压缩？",
        answer: "更小的视频上传更快、发送更稳定，也不容易碰到附件大小问题。",
      },
      {
        question: "WhatsApp 还会再压缩一次吗？",
        answer: "通常会，但先准备一个更小的干净 MP4，上传会快得多。",
      },
    ],
  },
  "compress-video-for-email": {
    title: "压缩视频发邮件 - 缩小视频附件体积",
    metaDescription: "为邮件附件压缩视频。在浏览器本地缩小 MP4、MOV、WebM 文件，满足常见邮箱限制。",
    h1: "压缩视频用于邮件",
    intro: "把视频压到可以通过 Gmail、Outlook 等邮件工具直接附件发送的大小。",
    intent: "生成适合邮件发送的视频文件",
    guidance: [
      "25MB 是适配多数邮件服务的实用目标。",
      "同样的目标体积下，短视频比长视频保留更多细节。",
      "附件发送失败时，改用云盘链接。",
    ],
    faqs: [
      {
        question: "邮件视频多大最合适？",
        answer: "25MB 以内是常见目标，但具体限制因服务商和账号而异。",
      },
      {
        question: "这个工具私密吗？",
        answer: "私密。压缩在浏览器本地完成，视频不会上传到本站。",
      },
    ],
  },
  "compress-video-for-github": {
    title: "压缩视频发 GitHub - Issue 与 PR 演示视频",
    metaDescription: "为 GitHub Issue、Pull Request 和 Bug 报告压缩录屏和 MP4 视频，全程不上传。",
    h1: "压缩视频用于 GitHub",
    intro: "为 Issue、Pull Request、Bug 报告和 README 演示生成更小的录屏文件。",
    intent: "生成紧凑的工程录屏",
    guidance: [
      "条件允许时，压缩前先裁剪或剪掉多余片段。",
      "以文字为主的录屏在较低码率下依然清晰。",
      "UI 演示的帧率保持适中即可。",
    ],
    faqs: [
      {
        question: "为什么录屏文件这么大？",
        answer: "录屏软件常用高码率来保证文字清晰，所以短短的片段也可能出奇地大。",
      },
      {
        question: "可以压缩包含隐私的 Bug 视频吗？",
        answer: "可以。文件在浏览器中处理，全程留在本地。",
      },
    ],
  },
  "compress-video-for-tiktok": {
    title: "压缩视频发 TikTok - 免费在线压缩",
    metaDescription: "在浏览器中为 TikTok 压缩视频。缩小 MP4、MOV、WebM 片段，上传更快，无水印。",
    h1: "压缩视频用于 TikTok",
    intro: "发布到 TikTok 前先把片段压小，上传更快、失败更少，用流量上传时尤其明显。",
    intent: "为 TikTok 准备更轻的视频",
    guidance: [
      "竖屏 1080 × 1920 对 TikTok 已经足够——4K 源文件纯属浪费带宽。",
      "TikTok 会对每个上传重新编码，干净的「均衡」MP4 是最佳选择。",
      "用手机流量或慢速网络时，先压缩再上传收益最大。",
    ],
    faqs: [
      {
        question: "TikTok 会再压缩我的视频吗？",
        answer: "会。TikTok 对所有上传都会重新编码，所以提前压成体积合理的干净 MP4 没有任何损失。",
      },
      {
        question: "TikTok 偏好什么格式？",
        answer: "H.264 视频 + AAC 音频的 MP4 是 TikTok 上传最可靠的格式。",
      },
    ],
  },
  "compress-video-for-instagram": {
    title: "压缩视频发 Instagram - Reels、快拍与帖子",
    metaDescription: "在浏览器中为 Instagram Reels、快拍和帖子压缩视频。MP4 更小、上传更快、无水印。",
    h1: "压缩视频用于 Instagram",
    intro: "上传前先给 Reels、快拍和动态视频瘦身，发布更快，失败更少。",
    intent: "为 Instagram 精简视频体积",
    guidance: [
      "竖屏 1080 × 1920 覆盖 Reels 和快拍；动态帖子要求更低。",
      "Instagram 的再编码很激进，「均衡」档位通常就够了。",
      "先剪出真正想发的片段，再进行压缩。",
    ],
    faqs: [
      {
        question: "为什么我的 Instagram 上传看起来很糊？",
        answer: "Instagram 会重新编码每个视频。上传一个清晰干净的 1080p 竖屏 MP4，它的编码器才有好的起点。",
      },
      {
        question: "Instagram 用什么格式最好？",
        answer: "H.264 + AAC 的 MP4 对 Reels、快拍和帖子的兼容性最好。",
      },
    ],
  },
  "compress-video-for-telegram": {
    title: "压缩视频发 Telegram - 免费在线压缩",
    metaDescription: "在浏览器中为 Telegram 压缩视频。自己掌控画质，别让 Telegram 把视频压得面目全非。",
    h1: "压缩视频用于 Telegram",
    intro: "Telegram 会重度压缩以媒体形式发送的视频。自己先压缩好，再以文件形式发送，画质由你掌控。",
    intent: "在 Telegram 上自己掌控画质",
    guidance: [
      "先在这里压缩，再以「文件」形式发送，可以跳过 Telegram 的再编码。",
      "「均衡」档位能让聊天片段清晰的同时体积大减。",
      "面向网络较慢的群组时，试试 25MB 或 50MB 目标。",
    ],
    faqs: [
      {
        question: "为什么 Telegram 里的视频画质差？",
        answer: "以媒体形式发送的视频会被低码率重编码。把预先压缩好的视频以文件形式发送可以保住画质。",
      },
      {
        question: "Telegram 有大小限制吗？",
        answer: "Telegram 支持很大的文件，但更小的视频发送更快，对用流量的接收方也更友好。",
      },
    ],
  },
  "compress-video-for-slack": {
    title: "压缩视频发 Slack - 给团队分享更小的片段",
    metaDescription: "在浏览器中为 Slack 压缩录屏和视频。节省工作区存储、加快分享，全程不上传。",
    h1: "压缩视频用于 Slack",
    intro: "在 Slack 分享演示、Bug 录屏和片段时，不占满工作区存储，也不让同事苦等下载。",
    intent: "在 Slack 分享更轻的片段",
    guidance: [
      "免费版 Slack 工作区存储紧张——文件越小，老消息活得越久。",
      "录屏的压缩效果非常好；50MB 能装下大多数几分钟的演示。",
      "手机端的同事会感谢你发了个小文件。",
    ],
    faqs: [
      {
        question: "为什么发 Slack 前要压缩？",
        answer: "上传会占用工作区存储额度，大文件对频道里的每个人来说预览和下载都更慢。",
      },
      {
        question: "工作视频在这里压缩安全吗？",
        answer: "安全。视频在你的浏览器本地处理，绝不会上传到本站。",
      },
    ],
  },
  "compress-video-for-reddit": {
    title: "压缩视频发 Reddit - 免费在线压缩",
    metaDescription: "在浏览器中为 Reddit 帖子压缩视频。上传更快、播放更流畅，无水印、免注册。",
    h1: "压缩视频用于 Reddit",
    intro: "为社区帖子准备上传快、播放顺畅的片段，别把超大文件硬塞给 Reddit 的编码器。",
    intent: "让片段达到 Reddit 发帖标准",
    guidance: [
      "1080p 对 Reddit 播放器绰绰有余——多余的分辨率反正会被丢弃。",
      "H.264 MP4 是 Reddit 处理得最可靠的上传格式。",
      "发帖反复失败时，压到更小的目标体积再重试。",
    ],
    faqs: [
      {
        question: "为什么 Reddit 处理我的视频失败？",
        answer: "过大或编码特殊的文件更容易失败。中等体积的 H.264 MP4 处理成功率最高。",
      },
      {
        question: "Reddit 会降低我的视频画质吗？",
        answer: "会，Reddit 会为流媒体播放重新编码。从干净的压缩 MP4 出发，可以避免画质被双重折损。",
      },
    ],
  },
  "compress-video-for-twitter": {
    title: "压缩视频发 Twitter / X - 免费在线压缩",
    metaDescription: "在浏览器中为 Twitter / X 压缩视频。MP4 更小、上传更快、播放干净，无水印。",
    h1: "压缩视频用于 Twitter / X",
    intro: "发布到 X 之前先给视频瘦身，上传秒完成，观看者点开即播。",
    intent: "让视频适合发布到 X",
    guidance: [
      "时间线播放器用 1280 × 720 或 1080p 最合适。",
      "H.264 MP4 + AAC 音频是 X 处理得最好的格式。",
      "片段越短，越能在很小的体积下保住画质。",
    ],
    faqs: [
      {
        question: "为什么 X 不接受我的视频？",
        answer: "常见原因是文件过大、编码不受支持或时长过长。压缩成 H.264 MP4 能解决大部分问题。",
      },
      {
        question: "X 上传后还会压缩吗？",
        answer: "会。X 会为流媒体重新编码，所以上传一个干净、体积适中的 MP4 才能得到最好的最终画质。",
      },
    ],
  },
  "compress-video-for-facebook": {
    title: "压缩视频发 Facebook - 免费在线压缩",
    metaDescription: "在浏览器中为 Facebook 帖子、Reels 和快拍压缩视频。上传更快，无水印、免账号。",
    h1: "压缩视频用于 Facebook",
    intro: "发布到 Facebook 动态、Reels、快拍和小组前先给视频减重，上传更快、播放更顺。",
    intent: "为 Facebook 准备更轻的视频",
    guidance: [
      "1080p 的 H.264 MP4 在 Facebook 所有场景下都最稳妥。",
      "Facebook 会重新编码上传，「均衡」档位不会带来可见损失。",
      "网络慢或用流量时，先压缩的收益最明显。",
    ],
    faqs: [
      {
        question: "为什么我的 Facebook 上传卡住了？",
        answer: "慢速网络加大文件经常导致上传停滞。先压缩视频是最快的解决办法。",
      },
      {
        question: "Facebook 会降低视频画质吗？",
        answer: "Facebook 会为流媒体重新编码所有上传。干净的 1080p MP4 源文件能让最终效果保持出色。",
      },
    ],
  },
  "compress-video-for-messenger": {
    title: "压缩视频发 Messenger - 满足 25MB 限制",
    metaDescription: "把视频压缩到 Messenger 的 25MB 文件限制以内。在浏览器中缩小 MP4、MOV、WebM，不上传。",
    h1: "压缩视频用于 Messenger",
    intro: "Messenger 的文件附件上限是 25MB。把视频压到限制以内，一次就能发送成功。",
    intent: "满足 Messenger 的 25MB 附件上限",
    guidance: [
      "目标设为 25MB 或略低，稳过附件检查。",
      "手机拍的短片段在这个体积下通常依然清晰。",
      "长视频先降低分辨率，再压到 25MB。",
    ],
    faqs: [
      {
        question: "为什么 Messenger 发不出我的视频？",
        answer: "超过 25MB 的文件附件会被拒绝。把视频压到限制以内即可解决发送失败。",
      },
      {
        question: "25MB 的画质还行吗？",
        answer: "几分钟以内的片段没问题。很长的视频需要降低分辨率才能在 25MB 下保持好看。",
      },
    ],
  },
  "compress-video-for-powerpoint": {
    title: "压缩视频插入 PowerPoint - 控制课件体积",
    metaDescription: "把视频嵌入 PowerPoint 前先压缩。让演示文稿小到能用邮件发送、秒开不卡，全程不上传。",
    h1: "压缩视频用于 PowerPoint",
    intro: "嵌入的视频是课件膨胀到几百 MB 的头号原因。先压缩片段，让你的文件始终易于分享。",
    intent: "嵌入视频而不让课件膨胀",
    guidance: [
      "打算用邮件发送的课件，总体积尽量控制在 25MB 以内。",
      "在幻灯片里播放的视频，720p 完全够用。",
      "MP4（H.264 + AAC）是 PowerPoint 兼容最可靠的格式。",
    ],
    faqs: [
      {
        question: "为什么我的 PowerPoint 文件这么大？",
        answer: "嵌入的视频会完整存进 .pptx 文件里——200MB 的视频就是 200MB 的课件。插入前先压缩视频。",
      },
      {
        question: "PowerPoint 里用什么视频格式最好？",
        answer: "H.264 视频 + AAC 音频的 MP4 在 Windows 和 Mac 的新版 PowerPoint 中都能可靠播放。",
      },
    ],
  },
  "compress-screen-recording": {
    title: "在线压缩录屏视频 - 免费且私密",
    metaDescription: "在浏览器中压缩录屏。缩小体积巨大的 UI 演示、教程和 Bug 报告视频，不上传。",
    h1: "压缩录屏视频",
    intro: "把臃肿的录屏变成更小的 MP4，随手就能发送、上传和作为附件。",
    intent: "缩小 UI 演示和屏幕录像",
    guidance: [
      "输出 1080p 或 720p，保证界面文字可读。",
      "先用「均衡」档位，需要严格上限时再改用目标 MB。",
      "压缩前剪掉无效片段，效果最好。",
    ],
    faqs: [
      {
        question: "怎样保持文字清晰？",
        answer: "别把长录屏压得太狠。文字重要时，用更大的目标体积或保持 1080p 分辨率。",
      },
      {
        question: "MP4 适合录屏吗？",
        answer: "适合。MP4 易于分享，在大多数浏览器、聊天应用和工单系统中都能播放。",
      },
    ],
  },
  "compress-4k-video-for-iphone": {
    title: "压缩 iPhone 4K 视频 - 免费在线压缩",
    metaDescription: "在浏览器中压缩巨大的 iPhone 4K 视频。把每分钟几百 MB 的素材变成方便分享的 MP4，不上传。",
    h1: "为 iPhone 压缩 4K 视频",
    intro: "iPhone 的 4K 视频每分钟可能占用 300MB 以上。把它们压成方便分享的 MP4，视频全程不离开你的设备。",
    intent: "驯服巨大的 4K iPhone 录像",
    guidance: [
      "聊天应用或邮件有硬性限制时，直接填目标 MB。",
      "「均衡」档位能把大多数 4K 片段压掉一半以上，肉眼几乎无损。",
      "特别大的文件在浏览器里会比较慢——电脑处理效果最好。",
    ],
    faqs: [
      {
        question: "为什么 iPhone 4K 视频这么大？",
        answer: "4K 30/60 帧要存储海量像素数据——根据设置不同，每分钟大约 170 到 400MB。",
      },
      {
        question: "压缩后在手机上还清晰吗？",
        answer: "用于聊天和社交分享完全没问题。省下的体积主要来自手机屏幕上肉眼难以察觉的码率。",
      },
    ],
  },
  "compress-mp4": {
    title: "在线压缩 MP4 - 免费 MP4 视频压缩器",
    metaDescription: "在浏览器中在线压缩 MP4 视频。私密缩小文件体积，不上传、无水印、免注册。",
    h1: "在线压缩 MP4",
    intro: "缩小 MP4 文件体积，同时保证输出在手机、浏览器和社交平台上都能轻松播放。",
    intent: "缩小 MP4 文件体积",
    guidance: [
      "MP4 本身兼容性已经很好，关键在于选对码率。",
      "有上传限制时用目标 MB，日常瘦身用画质档位。",
      "如果 MP4 是 4K 的，降低分辨率能省下大量空间。",
    ],
    faqs: [
      {
        question: "输出还是 MP4 吗？",
        answer: "是的。默认输出 MP4，兼容性最广。",
      },
      {
        question: "压缩 MP4 会加水印吗？",
        answer: "不会。本工具不添加任何水印。",
      },
    ],
  },
  "compress-mov": {
    title: "在线压缩 MOV - 缩小 iPhone 视频体积",
    metaDescription: "压缩来自 iPhone 和相机的 MOV 文件。在浏览器本地转成更小的 MP4，不上传。",
    h1: "压缩 MOV 文件",
    intro: "把 iPhone、相机和剪辑软件产出的大型 MOV 文件压缩成更小的 MP4，方便分享。",
    intent: "压缩 MOV 并导出 MP4",
    guidance: [
      "手机拍摄的 MOV 在 4K 或高帧率下体积可能非常大。",
      "MP4 输出在各类应用间的分享兼容性通常更好。",
      "发聊天或邮件时，用 25MB 或 50MB 目标。",
    ],
    faqs: [
      {
        question: "这个工具会把 MOV 转成 MP4 吗？",
        answer: "会。压缩后的输出是 MP4 文件，兼容性更好。",
      },
      {
        question: "支持 iPhone 视频吗？",
        answer: "常见的 iPhone MOV 文件都可以，只是特别大的 4K 视频在浏览器中会比较慢。",
      },
    ],
  },
  "reduce-video-size": {
    title: "在线缩小视频体积 - 免费私密压缩",
    metaDescription: "在浏览器中缩小视频文件体积。私密压缩 MP4、MOV、WebM，不上传、无水印。",
    h1: "在线缩小视频体积",
    intro: "让视频更小，方便上传、发送和节省空间，文件始终掌握在你自己的设备上。",
    intent: "无严格平台限制时给视频瘦身",
    guidance: [
      "先用「均衡」档位做一次干净的瘦身。",
      "只有平台有严格限制时才需要指定目标 MB。",
      "巨大的视频先降低分辨率，再考虑压到很小的体积。",
    ],
    faqs: [
      {
        question: "什么因素能让视频变小？",
        answer: "更低的码率、分辨率、帧率，以及更高效的编码方式，都能缩小文件体积。",
      },
      {
        question: "压缩会损失画质吗？",
        answer: "大多数压缩会用一些细节换取更小的文件。目标是让画面效果对分享来说足够好。",
      },
    ],
  },
  "compress-video-without-watermark": {
    title: "压缩视频且无水印 - 免费在线工具",
    metaDescription: "压缩视频且不添加水印。在浏览器本地缩小 MP4、MOV、WebM 体积，免注册。",
    h1: "压缩视频且无水印",
    intro: "缩小视频体积，输出不带任何品牌标记，干净的文件随时可以分享。",
    intent: "压缩视频且不加任何标记",
    guidance: [
      "压缩后的文件直接从浏览器下载。",
      "免费的本地压缩器不需要任何账号。",
      "平台有上传限制时，使用目标 MB 预设。",
    ],
    faqs: [
      {
        question: "会加水印吗？",
        answer: "不会。导出的 MP4 没有任何水印。",
      },
      {
        question: "需要注册吗？",
        answer: "不需要。免费的本地压缩器无需账号即可使用。",
      },
    ],
  },
  "compress-video-without-losing-quality": {
    title: "压缩视频且不损画质 - 免费在线工具",
    metaDescription: "在浏览器中以最小画质损失压缩视频。输出视觉上干净的 MP4，不上传、无水印。",
    h1: "压缩视频且不损画质",
    intro: "缩小视频体积，同时让大多数观看者看不出与原片的差别。适合画质优先、没有体积硬指标的场景。",
    intent: "在保住画质的前提下缩小体积",
    guidance: [
      "「更高画质」档位使用保守的编码参数来保留细节。",
      "省的空间会比激进模式少——这就是取舍。",
      "高码率的源文件（手机 4K、录屏软件）瘦身效果最明显。",
    ],
    faqs: [
      {
        question: "这是真正的无损压缩吗？",
        answer: "任何重编码在数学上都不是无损的，但「更高画质」档位的目标是正常观看下难以察觉差异。",
      },
      {
        question: "文件能小多少？",
        answer: "取决于源文件。手机录像和录屏通常能缩小 40% 到 70% 而看不出变化。",
      },
    ],
  },
};
