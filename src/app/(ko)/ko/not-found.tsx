import Link from "next/link";

export default function KoreanNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-950">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 text-slate-600">요청한 페이지가 없거나 이동되었을 수 있습니다.</p>
      <Link
        href="/ko"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
