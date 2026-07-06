import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/i18n";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CompressVideo",
    short_name: "CompressVideo",
    description: "Compress MP4, MOV, and WebM videos locally in your browser.",
    start_url: siteUrl,
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
