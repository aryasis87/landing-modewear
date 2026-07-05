import { Italiana, Inter } from "next/font/google";
import "./globals.css";

const italiana = Italiana({ variable: "--font-italiana", subsets: ["latin"], weight: "400" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "MODEWEAR — Koleksi Fashion Terbaru",
  description: "MODEWEAR: tampil stylish dengan koleksi terbaru untuk semua musim dan gaya hidup Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${italiana.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
