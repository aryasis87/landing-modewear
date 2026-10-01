import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-bone px-6 pt-20">
      <div className="label-jahit mx-auto max-w-md px-10 py-12 text-center">
        <p className="label-caps text-rouge">Modewear · 404</p>
        <h1 className="mt-4 text-5xl text-onyx">Labelnya terlepas</h1>
        <p className="mt-4 leading-relaxed text-thread">Halaman ini tidak ada. Mungkin alamatnya salah ketik.</p>
        <Link href="/koleksi" className="mt-7 inline-flex bg-onyx px-6 py-3.5 text-sm font-semibold tracking-wide text-bone hover:bg-rouge">Lihat koleksi</Link>
      </div>
    </main>
  );
}
