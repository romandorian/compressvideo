"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import {
  CheckCircle2,
  Download,
  FileVideo,
  Loader2,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Upload,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { ui, type Locale } from "@/lib/i18n";

type Preset = "smaller" | "balanced" | "quality";

type StatusKey = "ready" | "loading" | "reading" | "compressing" | "preparing" | "done";

type VideoCompressorProps = {
  defaultTargetMb?: number;
  defaultPreset?: Preset;
  intent: string;
  locale?: Locale;
};

type OutputFile = {
  url: string;
  name: string;
  size: number;
};

const presetCrf: Record<Preset, string> = {
  smaller: "32",
  balanced: "28",
  quality: "23",
};

function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

function outputName(inputName: string) {
  const base = inputName.replace(/\.[^.]+$/, "");
  return `${base || "compressed"}-compressed.mp4`;
}

async function getVideoDuration(file: File, errorMessage: string) {
  const url = URL.createObjectURL(file);

  try {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = url;

    return await new Promise<number>((resolve, reject) => {
      video.onloadedmetadata = () => resolve(video.duration || 0);
      video.onerror = () => reject(new Error(errorMessage));
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function VideoCompressor({
  defaultTargetMb,
  defaultPreset = "balanced",
  intent,
  locale = "en",
}: VideoCompressorProps) {
  const t = ui[locale].compressor;
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [targetMb, setTargetMb] = useState(defaultTargetMb?.toString() ?? "");
  const [preset, setPreset] = useState<Preset>(defaultPreset);
  const [isBusy, setIsBusy] = useState(false);
  const [statusKey, setStatusKey] = useState<StatusKey>("ready");
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState<OutputFile | null>(null);
  const [error, setError] = useState("");

  const savings = useMemo(() => {
    if (!file || !output) return null;
    return Math.max(0, Math.round((1 - output.size / file.size) * 100));
  }, [file, output]);

  function pickFile(nextFile?: File) {
    if (!nextFile) return;
    if (!nextFile.type.startsWith("video/")) {
      setError(t.errors.notVideo);
      return;
    }

    if (output?.url) URL.revokeObjectURL(output.url);
    setFile(nextFile);
    setOutput(null);
    setError("");
    setProgress(0);
    setStatusKey("ready");
  }

  async function loadFfmpeg() {
    if (ffmpegRef.current?.loaded) return ffmpegRef.current;

    setStatusKey("loading");
    const ffmpeg = new FFmpeg();
    const baseURL = "/ffmpeg";

    ffmpeg.on("progress", ({ progress: nextProgress }) => {
      setProgress(Math.max(4, Math.min(99, Math.round(nextProgress * 100))));
    });

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
    });

    ffmpegRef.current = ffmpeg;
    return ffmpeg;
  }

  async function compress() {
    if (!file) {
      setError(t.errors.chooseFirst);
      return;
    }

    setIsBusy(true);
    setError("");
    setOutput(null);
    setProgress(1);

    const inputPath = `input.${file.name.split(".").pop() || "mp4"}`;
    const outputPath = "output.mp4";

    try {
      const ffmpeg = await loadFfmpeg();
      const duration = await getVideoDuration(file, t.errors.metadata);
      const targetNumber = Number(targetMb);
      const audioKbps = 96;
      const args = ["-i", inputPath, "-movflags", "+faststart", "-c:v", "libx264"];

      setStatusKey("reading");
      await ffmpeg.writeFile(inputPath, await fetchFile(file));

      if (targetNumber > 0 && duration > 0) {
        const videoKbps = Math.max(120, Math.floor((targetNumber * 8192) / duration - audioKbps));
        args.push("-b:v", `${videoKbps}k`, "-maxrate", `${Math.round(videoKbps * 1.25)}k`, "-bufsize", `${videoKbps * 2}k`);
      } else {
        args.push("-crf", presetCrf[preset], "-preset", "veryfast");
      }

      args.push("-c:a", "aac", "-b:a", `${audioKbps}k`, outputPath);

      setStatusKey("compressing");
      const exitCode = await ffmpeg.exec(args);
      if (exitCode !== 0) throw new Error(t.errors.failed);

      setStatusKey("preparing");
      const data = await ffmpeg.readFile(outputPath);
      const bytes = data instanceof Uint8Array ? data : new TextEncoder().encode(String(data));
      const copiedBytes = new Uint8Array(bytes.length);
      copiedBytes.set(bytes);
      const blob = new Blob([copiedBytes.buffer], { type: "video/mp4" });
      const url = URL.createObjectURL(blob);

      setOutput({
        url,
        name: outputName(file.name),
        size: blob.size,
      });
      setProgress(100);
      setStatusKey("done");

      await ffmpeg.deleteFile(inputPath).catch(() => undefined);
      await ffmpeg.deleteFile(outputPath).catch(() => undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : t.errors.failed);
      setStatusKey("ready");
      setProgress(0);
    } finally {
      setIsBusy(false);
    }
  }

  function reset() {
    if (output?.url) URL.revokeObjectURL(output.url);
    setFile(null);
    setOutput(null);
    setError("");
    setProgress(0);
    setStatusKey("ready");
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div
        className="flex min-h-[230px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center transition hover:border-blue-500 hover:bg-blue-50/40"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          pickFile(event.dataTransfer.files[0]);
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(event) => pickFile(event.target.files?.[0])}
        />
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <Upload className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold text-slate-950">{t.dropTitle}</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
          {intent}. {t.dropHint}
        </p>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <FileVideo className="h-4 w-4" aria-hidden="true" />
          {t.chooseFile}
        </button>
      </div>

      {file ? (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">{file.name}</p>
                <p className="mt-1 text-sm text-slate-500">{formatBytes(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
                aria-label={t.reset}
                title={t.reset}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{t.statuses[statusKey]}</span>
                <span className="text-slate-500">{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {output ? (
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold text-emerald-950">{t.compressedTo(formatBytes(output.size))}</p>
                    <p className="mt-1 text-sm text-emerald-800">
                      {savings !== null ? t.smallerBy(savings) : t.fileReady}
                    </p>
                    <a
                      href={output.url}
                      download={output.name}
                      className="mt-3 inline-flex h-10 items-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      {t.download}
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              {t.panelTitle}
            </div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="target-mb">
              {t.targetSize}
            </label>
            <div className="mt-2 flex items-center gap-2">
              <input
                id="target-mb"
                inputMode="decimal"
                value={targetMb}
                onChange={(event) => setTargetMb(event.target.value)}
                placeholder={t.autoPlaceholder}
                className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <span className="text-sm text-slate-500">{t.mb}</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2">
              {(["smaller", "balanced", "quality"] as Preset[]).map((nextPreset) => (
                <button
                  key={nextPreset}
                  type="button"
                  onClick={() => setPreset(nextPreset)}
                  className={`h-10 rounded-md border px-3 text-left text-sm font-medium transition ${
                    preset === nextPreset
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {t.presets[nextPreset]}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={compress}
              disabled={isBusy}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isBusy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              {isBusy ? t.working : t.compress}
            </button>
          </div>
        </div>
      ) : null}

      {error ? <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
        {t.privacyNote}
      </p>
    </section>
  );
}
