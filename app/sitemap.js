import { ITEM, SITE } from "@/lib/koleksi";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/koleksi`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/panduan-ukuran`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...ITEM.map((i) => ({ url: `${SITE}/koleksi/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
