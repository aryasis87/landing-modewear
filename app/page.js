import { FAQ, Hero, Kapsul, Lookbook, Prinsip } from "./components/Beranda";

export default function Home() {
  return (
    <main>
      <Hero />
      <Kapsul />
      <Prinsip />
      <Lookbook />
      <FAQ />
    </main>
  );
}
