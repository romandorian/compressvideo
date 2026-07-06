import { contactEmail, type Locale } from "@/lib/i18n";

type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPage = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export type LegalSlug = "privacy" | "terms" | "contact";

export const legalContent: Record<Locale, Record<LegalSlug, LegalPage>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      description:
        "How CompressVideo protects your privacy while compressing videos locally in your browser.",
      updated: "July 6, 2026",
      sections: [
        {
          heading: "Local video processing",
          body: [
            "CompressVideo runs video compression in your browser using ffmpeg.wasm. Your selected video file is not uploaded to our servers by the browser-local compressor.",
            "The compressed output is created on your device and downloaded directly from your browser.",
          ],
        },
        {
          heading: "Information we receive",
          body: [
            "We do not receive, store, or inspect the videos you choose for local compression.",
            "Like most websites, hosting providers may process basic request information such as IP address, browser type, requested URL, and timestamps to deliver the site and protect it from abuse.",
          ],
        },
        {
          heading: "Analytics and cookies",
          body: [
            "This version does not include advertising cookies or account tracking.",
            "If privacy-friendly analytics are added later, this page should be updated to describe what is collected and how to opt out.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about privacy can be sent to ${contactEmail}.`],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      description: "Terms for using CompressVideo's browser-local video compression tool.",
      updated: "July 6, 2026",
      sections: [
        {
          heading: "Use of the service",
          body: [
            "CompressVideo is provided as a browser-local utility for reducing video file size. You are responsible for the files you choose to process and download.",
            "Do not use the service in a way that violates laws, infringes rights, or attempts to disrupt the site.",
          ],
        },
        {
          heading: "No upload mode",
          body: [
            "The current compressor processes videos locally in your browser and does not upload selected files to this site.",
            "If cloud processing is introduced later, the interface and privacy policy should clearly explain that different processing mode before you use it.",
          ],
        },
        {
          heading: "Results and availability",
          body: [
            "Compression results vary by browser, device, input format, duration, and available memory. Very large files can be slow or fail in browser memory.",
            "The service is provided as is, without guarantees that any video will compress to a specific size or quality level.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms can be sent to ${contactEmail}.`],
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "Contact CompressVideo for privacy questions, product feedback, and support.",
      updated: "July 6, 2026",
      sections: [
        {
          heading: "Email",
          body: [
            `For privacy questions, product feedback, or support, email ${contactEmail}.`,
            "Please do not send private video files unless we specifically ask for a small test sample.",
          ],
        },
        {
          heading: "Helpful details",
          body: [
            "If you are reporting a compression problem, include your browser, device, input format, approximate file size, and the target size or preset you used.",
          ],
        },
      ],
    },
  },
  zh: {
    privacy: {
      title: "隐私政策",
      description: "CompressVideo 如何在浏览器本地压缩视频时保护你的隐私。",
      updated: "2026 年 7 月 6 日",
      sections: [
        {
          heading: "本地视频处理",
          body: [
            "CompressVideo 使用 ffmpeg.wasm 在你的浏览器中压缩视频。通过当前本地压缩器选择的视频文件不会上传到我们的服务器。",
            "压缩后的文件在你的设备上生成，并由浏览器直接下载。",
          ],
        },
        {
          heading: "我们接收的信息",
          body: [
            "我们不会接收、存储或查看你选择本地压缩的视频。",
            "和大多数网站一样，托管服务商可能会处理基础请求信息，例如 IP 地址、浏览器类型、访问 URL 和时间戳，用于提供网站和防止滥用。",
          ],
        },
        {
          heading: "分析与 Cookie",
          body: [
            "当前版本不包含广告 Cookie 或账号追踪。",
            "如果未来加入隐私友好的统计工具，本页面应同步说明收集内容以及退出方式。",
          ],
        },
        {
          heading: "联系",
          body: [`隐私相关问题可发送至 ${contactEmail}。`],
        },
      ],
    },
    terms: {
      title: "使用条款",
      description: "使用 CompressVideo 浏览器本地视频压缩工具的条款。",
      updated: "2026 年 7 月 6 日",
      sections: [
        {
          heading: "服务使用",
          body: [
            "CompressVideo 是一个用于缩小视频文件体积的浏览器本地工具。你需要对自己选择处理和下载的文件负责。",
            "请勿以违法、侵犯他人权利或破坏网站运行的方式使用本服务。",
          ],
        },
        {
          heading: "无上传模式",
          body: [
            "当前压缩器在你的浏览器中本地处理视频，不会把所选文件上传到本站。",
            "如果未来加入云端处理，界面和隐私政策应在使用前清楚说明该处理模式的变化。",
          ],
        },
        {
          heading: "结果与可用性",
          body: [
            "压缩结果会受到浏览器、设备、输入格式、时长和可用内存影响。超大文件可能很慢，也可能因浏览器内存不足而失败。",
            "本服务按现状提供，不保证任何视频一定能压缩到指定体积或画质。",
          ],
        },
        {
          heading: "联系",
          body: [`条款相关问题可发送至 ${contactEmail}。`],
        },
      ],
    },
    contact: {
      title: "联系",
      description: "联系 CompressVideo，反馈产品问题、支持请求或隐私相关问题。",
      updated: "2026 年 7 月 6 日",
      sections: [
        {
          heading: "邮箱",
          body: [
            `隐私问题、产品反馈或支持请求，可发送邮件至 ${contactEmail}。`,
            "除非我们明确要求小型测试样本，请不要通过邮件发送私人视频文件。",
          ],
        },
        {
          heading: "建议提供的信息",
          body: [
            "如果你要反馈压缩失败，请附上浏览器、设备、输入格式、大致文件大小，以及使用的目标大小或画质档位。",
          ],
        },
      ],
    },
  },
  ja: {
    privacy: {
      title: "プライバシーポリシー",
      description: "CompressVideo がブラウザ内で動画を圧縮する際にプライバシーを保護する方法。",
      updated: "2026年7月6日",
      sections: [
        {
          heading: "ローカル動画処理",
          body: [
            "CompressVideo は ffmpeg.wasm を使い、ブラウザ内で動画圧縮を実行します。現在のローカル圧縮ツールでは、選択した動画ファイルはサーバーにアップロードされません。",
            "圧縮後のファイルは端末上で作成され、ブラウザから直接ダウンロードされます。",
          ],
        },
        {
          heading: "受け取る情報",
          body: [
            "ローカル圧縮で選択した動画を受信、保存、閲覧することはありません。",
            "多くのウェブサイトと同様に、ホスティング事業者はサイト配信と不正利用防止のため、IP アドレス、ブラウザ種別、リクエスト URL、時刻などの基本的なリクエスト情報を処理する場合があります。",
          ],
        },
        {
          heading: "分析と Cookie",
          body: [
            "このバージョンには広告 Cookie やアカウント追跡は含まれていません。",
            "将来プライバシーに配慮した分析を追加する場合、このページを更新して収集内容とオプトアウト方法を説明します。",
          ],
        },
        {
          heading: "お問い合わせ",
          body: [`プライバシーに関する質問は ${contactEmail} までお送りください。`],
        },
      ],
    },
    terms: {
      title: "利用規約",
      description: "CompressVideo のブラウザ内動画圧縮ツールを利用するための規約。",
      updated: "2026年7月6日",
      sections: [
        {
          heading: "サービスの利用",
          body: [
            "CompressVideo は動画ファイルサイズを小さくするためのブラウザ内ユーティリティとして提供されます。処理およびダウンロードするファイルについては利用者自身が責任を負います。",
            "法令違反、権利侵害、サイト運営の妨害につながる方法で本サービスを利用しないでください。",
          ],
        },
        {
          heading: "アップロードなしのモード",
          body: [
            "現在の圧縮ツールはブラウザ内で動画をローカル処理し、選択したファイルをこのサイトへアップロードしません。",
            "将来クラウド処理を導入する場合、利用前にインターフェースとプライバシーポリシーで処理モードの違いを明確に説明します。",
          ],
        },
        {
          heading: "結果と可用性",
          body: [
            "圧縮結果はブラウザ、端末、入力形式、長さ、利用可能なメモリによって変わります。非常に大きなファイルは遅くなったり、ブラウザメモリ不足で失敗したりすることがあります。",
            "本サービスは現状有姿で提供され、特定のサイズや画質への圧縮を保証しません。",
          ],
        },
        {
          heading: "お問い合わせ",
          body: [`規約に関する質問は ${contactEmail} までお送りください。`],
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      description: "プライバシーに関する質問、製品フィードバック、サポートについて CompressVideo に連絡する。",
      updated: "2026年7月6日",
      sections: [
        {
          heading: "メール",
          body: [
            `プライバシーに関する質問、製品フィードバック、サポートは ${contactEmail} までお送りください。`,
            "こちらから小さなテストサンプルを依頼しない限り、個人的な動画ファイルは送信しないでください。",
          ],
        },
        {
          heading: "役立つ情報",
          body: [
            "圧縮の問題を報告する場合は、ブラウザ、端末、入力形式、おおよそのファイルサイズ、使用した目標サイズまたはプリセットを含めてください。",
          ],
        },
      ],
    },
  },
  ko: {
    privacy: {
      title: "개인정보 처리방침",
      description: "CompressVideo가 브라우저에서 동영상을 로컬로 압축할 때 개인정보를 보호하는 방식입니다.",
      updated: "2026년 7월 6일",
      sections: [
        {
          heading: "로컬 동영상 처리",
          body: [
            "CompressVideo는 ffmpeg.wasm을 사용해 브라우저에서 동영상 압축을 실행합니다. 현재 로컬 압축 도구에서 선택한 동영상 파일은 서버로 업로드되지 않습니다.",
            "압축된 결과물은 사용자의 기기에서 만들어지고 브라우저에서 직접 다운로드됩니다.",
          ],
        },
        {
          heading: "수신하는 정보",
          body: [
            "로컬 압축을 위해 선택한 동영상을 수신, 저장, 열람하지 않습니다.",
            "대부분의 웹사이트와 마찬가지로 호스팅 제공자는 사이트 제공과 악용 방지를 위해 IP 주소, 브라우저 유형, 요청 URL, 타임스탬프 같은 기본 요청 정보를 처리할 수 있습니다.",
          ],
        },
        {
          heading: "분석과 쿠키",
          body: [
            "이 버전에는 광고 쿠키나 계정 추적이 포함되어 있지 않습니다.",
            "향후 개인정보 친화적인 분석 도구를 추가하는 경우, 이 페이지를 업데이트하여 수집 항목과 거부 방법을 설명합니다.",
          ],
        },
        {
          heading: "문의",
          body: [`개인정보 관련 질문은 ${contactEmail}(으)로 보내주세요.`],
        },
      ],
    },
    terms: {
      title: "이용약관",
      description: "CompressVideo의 브라우저 로컬 동영상 압축 도구 이용 약관입니다.",
      updated: "2026년 7월 6일",
      sections: [
        {
          heading: "서비스 이용",
          body: [
            "CompressVideo는 동영상 파일 크기를 줄이기 위한 브라우저 로컬 도구로 제공됩니다. 처리하고 다운로드하는 파일에 대한 책임은 사용자에게 있습니다.",
            "법률을 위반하거나 권리를 침해하거나 사이트 운영을 방해하는 방식으로 서비스를 사용하지 마세요.",
          ],
        },
        {
          heading: "업로드 없는 모드",
          body: [
            "현재 압축 도구는 브라우저에서 동영상을 로컬 처리하며 선택한 파일을 이 사이트로 업로드하지 않습니다.",
            "향후 클라우드 처리가 도입되면, 사용 전 인터페이스와 개인정보 처리방침에서 해당 처리 방식의 차이를 명확히 설명해야 합니다.",
          ],
        },
        {
          heading: "결과와 가용성",
          body: [
            "압축 결과는 브라우저, 기기, 입력 형식, 길이, 사용 가능한 메모리에 따라 달라집니다. 매우 큰 파일은 느리거나 브라우저 메모리 부족으로 실패할 수 있습니다.",
            "서비스는 있는 그대로 제공되며 특정 크기나 품질 수준으로 압축된다는 보장은 없습니다.",
          ],
        },
        {
          heading: "문의",
          body: [`약관 관련 질문은 ${contactEmail}(으)로 보내주세요.`],
        },
      ],
    },
    contact: {
      title: "문의",
      description: "개인정보 질문, 제품 피드백, 지원 요청을 위해 CompressVideo에 연락하세요.",
      updated: "2026년 7월 6일",
      sections: [
        {
          heading: "이메일",
          body: [
            `개인정보 질문, 제품 피드백, 지원 요청은 ${contactEmail}(으)로 보내주세요.`,
            "작은 테스트 샘플을 요청받은 경우가 아니라면 개인 동영상 파일은 보내지 마세요.",
          ],
        },
        {
          heading: "도움이 되는 정보",
          body: [
            "압축 문제를 신고할 때는 브라우저, 기기, 입력 형식, 대략적인 파일 크기, 사용한 목표 크기 또는 프리셋을 포함해 주세요.",
          ],
        },
      ],
    },
  },
};
