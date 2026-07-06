import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Back to the video compressor
      </Link>
    </main>
  );
}
