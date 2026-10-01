'use client';

import { useEffect, useState } from 'react';
import { KAPSUL } from '@/lib/koleksi';

/* Hitung mundur ke tenggat pra-pesan yang sungguhan (bukan 00:00 abadi).
   Sebelum JavaScript jalan dan sesudah tenggat lewat, tampil teks tanggalnya. */
export default function HitungMundur({ terang = false }) {
  const [sisa, setSisa] = useState(null);

  useEffect(() => {
    const target = new Date(KAPSUL.tutup).getTime();
    const tik = () => setSisa(Math.max(0, target - Date.now()));
    tik();
    const id = setInterval(tik, 60000);
    return () => clearInterval(id);
  }, []);

  const warna = terang ? 'text-bone' : 'text-onyx';
  if (sisa === null || sisa === 0) {
    return (
      <p className={`label-caps ${warna}`}>
        {sisa === 0 ? 'Pra-pesan Kapsul 05 sudah ditutup' : `Pra-pesan ditutup ${KAPSUL.tutupTeks}`}
      </p>
    );
  }
  const hari = Math.floor(sisa / 86400000);
  const jam = Math.floor((sisa % 86400000) / 3600000);
  const menit = Math.floor((sisa % 3600000) / 60000);
  return (
    <div>
      <p className={`label-caps ${terang ? 'text-bone/80' : 'text-thread'}`}>Pra-pesan ditutup dalam</p>
      <p className={`mt-2 flex gap-6 font-[family-name:var(--font-italiana)] text-4xl ${warna}`} aria-live="off">
        {[[hari, 'hari'], [jam, 'jam'], [menit, 'menit']].map(([n, l]) => (
          <span key={l}>{n}<span className="label-caps ml-1.5 text-[0.6rem]">{l}</span></span>
        ))}
      </p>
      <p className={`mt-2 text-xs ${terang ? 'text-bone/80' : 'text-thread'}`}>{KAPSUL.tutupTeks}</p>
    </div>
  );
}
