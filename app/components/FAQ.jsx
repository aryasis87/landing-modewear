"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah saya bisa menukar ukuran pakaian jika tidak pas?",
      answer: "Tentu saja. Anda bisa melakukan penukaran ukuran dalam waktu 7 hari sejak barang diterima, selama tag masih terpasang dan barang belum dicuci."
    },
    {
      question: "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
      answer: "Kami menyediakan penawaran eksklusif untuk pembelian grosir atau bundling. Silakan hubungi tim kami untuk info lengkap."
    },
    {
      question: "Bagaimana cara mengetahui ukuran yang tepat untuk saya?",
      answer: "Setiap produk dilengkapi panduan ukuran lengkap. Jika masih ragu, Anda bisa menghubungi kami untuk konsultasi styling secara gratis."
    },
    {
      question: "Metode pembayaran apa yang tersedia?",
      answer: "Kami menerima pembayaran melalui kartu kredit, e-wallet (OVO, GoPay, DANA), bank transfer, dan COD di beberapa wilayah."
    },
    {
      question: "Kapan pesanan saya akan dikirim?",
      answer: "Pesanan diproses dalam 1x24 jam (hari kerja) dan dikirim menggunakan jasa ekspedisi terpercaya. Nomor resi akan dikirim otomatis via email."
    },
    {
      question: "Apakah saya bisa membatalkan pesanan?",
      answer: "Pesanan dapat dibatalkan sebelum status berubah menjadi 'Sedang Diproses'. Hubungi CS kami sesegera mungkin setelah pemesanan."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bone">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-onyx">
            Pertanyaan <span className="font-medium">Umum</span>
          </h2>
          <p className="mt-4 text-lg text-thread">
            Info penting seputar pembelian, pengiriman, dan layanan kami.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="overflow-hidden rounded-lg border border-onyx/12"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-bone hover:bg-bone transition"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-base sm:text-lg font-medium text-onyx">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-thread transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ 
                  height: activeIndex === index ? "auto" : 0,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-0 text-sm text-thread">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-thread mb-4">
            MASIH BUTUH BANTUAN?
          </p>
          <button className="inline-flex px-6 py-3 border border-onyx/12 bg-bone hover:bg-bone text-onyx rounded-md transition text-sm sm:text-base font-medium">
            Hubungi Tim Kami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
