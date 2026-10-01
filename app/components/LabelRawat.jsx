import { RAWAT } from '@/lib/koleksi';

/* Simbol perawatan ala label pakaian, digambar sebagai SVG 28×28. */
function Simbol({ kode }) {
  const g = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinejoin: 'round', strokeLinecap: 'round' };
  switch (kode) {
    case 'cuci30':
    case 'cuciTangan':
      return (
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <path d="M3 8 L6 22 H22 L25 8" {...g} />
          <path d="M3 8 q2.75 2 5.5 0 t5.5 0 t5.5 0 t5.5 0" {...g} />
          {kode === 'cuci30' ? <text x="14" y="19" textAnchor="middle" fontSize="7" fill="currentColor">30</text> : <path d="M11 13 q3 -3 6 0 v5 h-6 z" {...g} />}
        </svg>
      );
    case 'tanpaPemutih':
      return (
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <path d="M14 4 L25 23 H3 Z" {...g} />
          <path d="M6 7 L22 24 M22 7 L6 24" {...g} />
        </svg>
      );
    case 'setrikaSedang':
    case 'setrikaRendah':
      return (
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <path d="M4 21 H24 L22 12 Q21 9 17 9 H9 Q7 9 7 12" {...g} />
          <path d="M7 12 Q5 14 4 21" {...g} />
          <circle cx={kode === 'setrikaSedang' ? 12 : 14} cy="16" r="1.2" fill="currentColor" />
          {kode === 'setrikaSedang' && <circle cx="16" cy="16" r="1.2" fill="currentColor" />}
        </svg>
      );
    case 'tanpaPengering':
      return (
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <rect x="4" y="4" width="20" height="20" {...g} />
          <circle cx="14" cy="14" r="6.5" {...g} />
          <path d="M5 5 L23 23 M23 5 L5 23" {...g} />
        </svg>
      );
    case 'jemurTeduh':
      return (
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <rect x="4" y="4" width="20" height="20" {...g} />
          <path d="M4 10 L10 4 M4 15 L15 4" {...g} />
          <path d="M14 10 V21" {...g} />
        </svg>
      );
    default:
      return null;
  }
}

export default function LabelRawat({ kode, ringkas = false }) {
  return (
    <ul className={ringkas ? 'flex flex-wrap gap-2' : 'grid gap-3 sm:grid-cols-2'} aria-label="Petunjuk perawatan">
      {kode.map((k) => (
        <li key={k} className="flex items-center gap-3 text-onyx" title={RAWAT[k]}>
          <Simbol kode={k} />
          {ringkas ? <span className="sr-only">{RAWAT[k]}</span> : <span className="text-sm">{RAWAT[k]}</span>}
        </li>
      ))}
    </ul>
  );
}
