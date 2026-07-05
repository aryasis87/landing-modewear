import { Italiana, Inter } from "next/font/google";
import "./globals.css";

const italiana = Italiana({ variable: "--font-italiana", subsets: ["latin"], weight: "400" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"MODEWEAR","description":"Koleksi fashion terbaru","url":"https://landing-modewear.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://landing-modewear.vercel.app"),
  title: "MODEWEAR — Koleksi Fashion Terbaru",
  description: "MODEWEAR: tampil stylish dengan koleksi fashion terbaru untuk semua musim dan gaya hidupmu.",
  applicationName: "MODEWEAR",
  keywords: ["fashion", "koleksi fashion", "pakaian", "online fashion store", "gaya"],
  authors: [{ name: "MODEWEAR" }],
  creator: "MODEWEAR",
  publisher: "MODEWEAR",
  alternates: { canonical: "https://landing-modewear.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-modewear.vercel.app",
    siteName: "MODEWEAR",
    title: "MODEWEAR — Koleksi Fashion Terbaru",
    description: "MODEWEAR: tampil stylish dengan koleksi fashion terbaru untuk semua musim dan gaya hidupmu.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MODEWEAR — Koleksi Fashion Terbaru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MODEWEAR — Koleksi Fashion Terbaru",
    description: "MODEWEAR: tampil stylish dengan koleksi fashion terbaru untuk semua musim dan gaya hidupmu.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${italiana.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
