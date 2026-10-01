import Link from 'next/link';
import { KAPSUL } from '@/lib/koleksi';

const NAV = [['/koleksi', 'Koleksi'], ['/#lookbook', 'Lookbook'], ['/panduan-ukuran', 'Panduan ukuran']];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-onyx/10 bg-bone/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="text-base font-semibold tracking-[0.3em] text-onyx">MODEWEAR</Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map(([h, l]) => <Link key={h} href={h} className="label-caps text-thread hover:text-onyx">{l}</Link>)}
        </nav>
        <Link href="/koleksi" className="inline-flex bg-onyx px-4 py-2.5 text-xs font-semibold tracking-wide text-bone hover:bg-rouge">Pra-pesan Kapsul {KAPSUL.nomor}</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-onyx px-6 text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em]">MODEWEAR</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/80">Pakaian kerja yang dijahit setelah dipesan. Kapsul {KAPSUL.nomor} “{KAPSUL.nama}”: delapan potong, satu palet.</p>
        </div>
        <nav aria-label="Belanja">
          <p className="label-caps mb-4 text-bone/80">Belanja</p>
          <ul className="space-y-2.5 text-sm text-bone/80">
            <li><Link href="/koleksi" className="hover:text-bone">Semua potongan</Link></li>
            <li><Link href="/panduan-ukuran" className="hover:text-bone">Panduan ukuran</Link></li>
            <li><Link href="/#tanya" className="hover:text-bone">Pertanyaan umum</Link></li>
          </ul>
        </nav>
        <div>
          <p className="label-caps mb-4 text-bone/80">Jadwal kapsul {KAPSUL.nomor}</p>
          <p className="text-sm leading-relaxed text-bone/80">Pra-pesan ditutup {KAPSUL.tutupTeks}. Pengiriman mulai {KAPSUL.kirim}.</p>
        </div>
      </div>
      <p className="label-caps mx-auto max-w-6xl border-t border-bone/15 py-6 leading-[1.9] text-bone/70">© 2026 Modewear · Nama, harga, dan jadwal adalah contoh untuk purwarupa desain · Foto: StockSnap (CC0)</p>
    </footer>
  );
}
