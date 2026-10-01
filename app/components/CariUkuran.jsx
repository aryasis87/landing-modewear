'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ITEM, TABEL_UKURAN } from '@/lib/koleksi';

/* Cari ukuran: atasan & terusan mengikuti lingkar dada, bawahan mengikuti
   pinggang (lalu dicek dengan pinggul). Angka di luar tabel diberi tahu jujur. */
const cari = (nilai, iMin, iMaks) => {
  if (!nilai) return null;
  const baris = TABEL_UKURAN.find((r) => nilai >= r[iMin] && nilai <= r[iMaks]);
  if (baris) return baris[0];
  if (nilai < TABEL_UKURAN[0][iMin]) return 'di bawah XS';
  const celah = TABEL_UKURAN.find((r) => nilai < r[iMin]);
  return celah ? celah[0] : 'di atas XXL';
};

export default function CariUkuran() {
  const [dada, setDada] = useState('');
  const [pinggang, setPinggang] = useState('');
  const [pinggul, setPinggul] = useState('');
  const [item, setItem] = useState('');

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('item');
    if (s && ITEM.some((i) => i.slug === s)) setItem(s);
  }, []);

  const atas = cari(Number(dada), 1, 2);
  const bawahPinggang = cari(Number(pinggang), 3, 4);
  const bawahPinggul = cari(Number(pinggul), 5, 6);
  const urut = TABEL_UKURAN.map((r) => r[0]);
  const bawah = bawahPinggang && bawahPinggul && urut.includes(bawahPinggang) && urut.includes(bawahPinggul)
    ? urut[Math.max(urut.indexOf(bawahPinggang), urut.indexOf(bawahPinggul))]
    : bawahPinggang;
  const pilihan = ITEM.find((i) => i.slug === item);
  const untukPilihan = pilihan ? (pilihan.jenis === 'bawahan' ? bawah : atas) : null;
  const input = 'w-full border border-onyx/25 bg-bone px-4 py-3 text-onyx tabular-nums focus:border-rouge focus:outline-none';

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="space-y-5">
        {[['dada', 'Lingkar dada (cm)', dada, setDada], ['pinggang', 'Lingkar pinggang (cm)', pinggang, setPinggang], ['pinggul', 'Lingkar pinggul (cm)', pinggul, setPinggul]].map(([id, l, v, set]) => (
          <div key={id}>
            <label htmlFor={id} className="label-caps mb-2 block text-onyx">{l}</label>
            <input id={id} type="number" inputMode="decimal" min="50" max="160" value={v} onChange={(e) => set(e.target.value)} className={input} />
          </div>
        ))}
        <div>
          <label htmlFor="item" className="label-caps mb-2 block text-onyx">Untuk potongan (opsional)</label>
          <select id="item" value={item} onChange={(e) => setItem(e.target.value)} className={input}>
            <option value="">Semua potongan</option>
            {ITEM.map((i) => <option key={i.slug} value={i.slug}>{i.nama}</option>)}
          </select>
        </div>

        <div className="label-jahit px-6 py-6" aria-live="polite">
          <p className="label-caps text-rouge">Saran ukuran</p>
          {pilihan ? (
            <p className="mt-3 font-[family-name:var(--font-italiana)] text-3xl">{pilihan.nama}: {untukPilihan || '—'}</p>
          ) : (
            <dl className="mt-3 grid grid-cols-2 gap-4">
              <div><dt className="text-sm text-thread">Atasan, luaran, terusan</dt><dd className="font-[family-name:var(--font-italiana)] text-4xl">{atas || '—'}</dd></div>
              <div><dt className="text-sm text-thread">Bawahan</dt><dd className="font-[family-name:var(--font-italiana)] text-4xl">{bawah || '—'}</dd></div>
            </dl>
          )}
          {pilihan && <p className="mt-3 text-sm leading-relaxed text-thread">{pilihan.pas}</p>}
          {(String(atas).includes(' ') || String(bawah).includes(' ')) && (
            <p className="mt-3 text-sm leading-relaxed text-rouge">Ukuran Anda di luar tabel kapsul ini. Kami bisa menjahit sesuai ukuran badan — tulis ke kami saat pra-pesan.</p>
          )}
          {pilihan && untukPilihan && !String(untukPilihan).includes(' ') && (
            <Link href={`/koleksi/${pilihan.slug}`} className="label-caps mt-4 inline-block border-b border-onyx pb-0.5">Pra-pesan ukuran {untukPilihan}</Link>
          )}
        </div>
      </div>

      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Tabel ukuran tubuh, bisa digeser ke samping">
        <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
          <caption className="label-caps mb-3 text-left text-onyx">Ukuran tubuh (cm), bukan ukuran pakaian</caption>
          <thead>
            <tr className="border-b border-onyx">
              {['Ukuran', 'Dada', 'Pinggang', 'Pinggul'].map((h) => <th key={h} scope="col" className="label-caps py-3 pr-3 font-medium">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {TABEL_UKURAN.map(([u, d1, d2, w1, w2, h1, h2]) => {
              const sorot = u === atas || u === bawah;
              return (
                <tr key={u} className={`border-b border-onyx/12 ${sorot ? 'bg-rouge/10' : ''}`}>
                  <th scope="row" className="py-3 pr-3 font-semibold text-onyx">{u}{sorot && <span className="sr-only"> (disarankan)</span>}</th>
                  <td className="py-3 pr-3 tabular-nums text-onyx">{d1}–{d2}</td>
                  <td className="py-3 pr-3 tabular-nums text-onyx">{w1}–{w2}</td>
                  <td className="py-3 tabular-nums text-onyx">{h1}–{h2}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
