import { SITE } from '@/lib/koleksi';
import CariUkuran from '../components/CariUkuran';

export const metadata = {
  title: 'Panduan Ukuran',
  description: 'Masukkan lingkar dada, pinggang, dan pinggul untuk mendapat saran ukuran Modewear — plus tabel ukuran tubuh dan cara mengukur sendiri.',
  alternates: { canonical: `${SITE}/panduan-ukuran` },
};

const CARA = [
  ['Lingkar dada', 'Lewatkan pita ukur di bagian dada yang paling penuh, tepat di bawah ketiak. Jangan menahan napas.'],
  ['Lingkar pinggang', 'Di bagian paling ramping, kira-kira dua jari di atas pusar. Pita tidak boleh menekan kulit.'],
  ['Lingkar pinggul', 'Di bagian paling lebar, dengan kaki dirapatkan.'],
];

export default function PanduanUkuran() {
  return (
    <main className="bg-bone px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="label-caps text-rouge">Panduan ukuran</p>
        <h1 className="mt-4 max-w-3xl text-[2.8rem] leading-[1] text-onyx md:text-7xl">Tiga angka, satu ukuran</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Ukur badan, bukan pakaian yang sedang Anda pakai. Hasilnya langsung muncul; tidak ada yang disimpan.</p>
        <div className="mt-12"><CariUkuran /></div>
        <section aria-labelledby="cara" className="mt-20 border-t border-onyx/15 pt-12">
          <h2 id="cara" className="text-4xl text-onyx">Cara mengukur</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {CARA.map(([j, d], i) => (
              <li key={j}>
                <span className="font-[family-name:var(--font-italiana)] text-3xl text-rouge">0{i + 1}</span>
                <h3 className="mt-2 text-2xl text-onyx">{j}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
