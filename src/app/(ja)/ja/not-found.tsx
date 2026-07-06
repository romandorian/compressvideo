import Link from "next/link";

export default function JapaneseNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-950">ページが見つかりません</h1>
      <p className="mt-4 text-slate-600">お探しのページは存在しないか、移動された可能性があります。</p>
      <Link
        href="/ja"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        ホームへ戻る
      </Link>
    </main>
  );
}
