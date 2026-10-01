import { ITEM, KAPSUL, SITE } from '@/lib/koleksi';
import SaringKoleksi from '../components/SaringKoleksi';
import HitungMundur from '../components/HitungMundur';

export const metadata = {
  title: `Kapsul ${KAPSUL.nomor} “${KAPSUL.nama}”`,
  description: `Delapan potong Kapsul ${KAPSUL.nomor} Modewear: ${ITEM.map((i) => i.nama.toLowerCase()).join(', ')}. Pra-pesan ditutup ${KAPSUL.tutupTeks}.`,
  alternates: { canonical: `${SITE}/koleksi` },
};

export default function Koleksi() {
  return (
    <main className="bg-bone px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="label-caps text-rouge">Kapsul {KAPSUL.nomor} · {KAPSUL.nama}</p>
            <h1 className="mt-4 text-[2.8rem] leading-[1] text-onyx md:text-7xl">Delapan potong, satu palet</h1>
          </div>
          <HitungMundur />
        </div>
        <SaringKoleksi />
      </div>
    </main>
  );
}
