"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Essentials",
      price: {
        monthly: "Rp750.000",
        annual: "Rp600.000",
      },
      description: "Cocok untuk fashion enthusiast yang ingin tampil stylish setiap saat",
      features: [
        "Akses koleksi terbaru",
        "Konsultasi gaya via chat",
        "Diskon member 10%",
        "Pengiriman standar gratis",
        "Early access produk limited"
      ],
      cta: "Langganan Sekarang",
      featured: false
    },
    {
      name: "Signature",
      price: {
        monthly: "Rp1.500.000",
        annual: "Rp1.200.000",
      },
      description: "Untuk kamu yang ingin fashion statement lebih eksklusif dan personal",
      features: [
        "Semua fitur Essentials",
        "Stylist pribadi bulanan",
        "Diskon eksklusif 20%",
        "Pengiriman express gratis",
        "Akses koleksi kapsul",
        "Undangan private event"
      ],
      cta: "Coba Gratis",
      featured: true
    },
    {
      name: "Couture",
      price: {
        monthly: "Rp3.000.000",
        annual: "Rp2.400.000",
      },
      description: "Layanan premium untuk fashion-forward clientele yang mengutamakan kemewahan",
      features: [
        "Semua fitur Signature",
        "Custom fitting & tailoring",
        "Akses first-look runway",
        "Stylist eksklusif on-call",
        "Membership concierge 24/7",
        "Undangan fashion show VIP",
        "Garansi tukar tanpa batas"
      ],
      cta: "Hubungi Kami",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Bagian */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-onyx sm:text-4xl">
            Pilihan <span className="font-medium">membership fashion</span> yang fleksibel
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-thread">
            Temukan paket yang paling sesuai dengan gaya dan kebutuhan fashion kamu.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 text-sm font-medium ${!isAnnual ? 'text-onyx' : 'text-thread'}`}>Bulanan</span>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-bone-2 transition-colors focus:outline-none focus:ring-2 focus:ring-rouge focus:ring-offset-2"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-6 bg-onyx' : 'translate-x-1 bg-bone'
                } inline-block h-4 w-4 transform rounded-full transition-transform`}
              />
            </button>
            <span className={`ml-4 text-sm font-medium ${isAnnual ? 'text-onyx' : 'text-thread'}`}>
              Tahunan <span className="text-rouge">(Hemat 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Kartu Harga */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border ${
                plan.featured 
                  ? 'border-onyx/25 shadow-lg' 
                  : 'border-onyx/12 shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-onyx text-xs font-medium text-bone">
                    Paling Favorit
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-lg font-medium ${
                  plan.featured ? 'text-onyx' : 'text-onyx'
                }`}>
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-thread">{plan.description}</p>
                
                <div className="mt-6">
                  <p className="text-4xl font-light tracking-tight text-onyx">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                    <span className="text-base font-medium text-thread">
                      {isAnnual ? '/tahun' : '/bulan'}
                    </span>
                  </p>
                </div>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-rouge mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-thread">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`mt-8 w-full px-6 py-3 border text-base font-medium rounded-md transition-all ${
                    plan.featured
                      ? 'bg-onyx text-bone hover:bg-onyx'
                      : 'bg-bone text-onyx border-onyx/12 hover:bg-bone'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-thread mb-4">
            BUTUH PENGALAMAN BERGAYA YANG LEBIH PERSONAL?
          </p>
          <button className="px-6 py-3 border border-onyx/12 text-base font-medium rounded-md text-onyx bg-bone hover:bg-bone transition-all">
            Hubungi Tim Fashion Concierge
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
