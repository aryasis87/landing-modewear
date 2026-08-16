"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate = "2025-05-31T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
          jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
          menit: Math.floor((diff / 1000 / 60) % 60),
          detik: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Hari", value: timeLeft.hari },
    { label: "Jam", value: timeLeft.jam },
    { label: "Menit", value: timeLeft.menit },
    { label: "Detik", value: timeLeft.detik }
  ];

  return (
    <section
      className="py-16 bg-bone"
      role="timer"
      aria-label="Hitung mundur promo fashion"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-widest text-thread uppercase mb-2"
        >
          Promo Fashion Eksklusif
        </motion.h2>

        <motion.p className="mb-10 text-2xl font-light text-onyx sm:text-3xl">
          Waktu hampir habis!
        </motion.p>

        <div className="flex justify-center gap-2.5 sm:gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-onyx/12 bg-bone sm:h-20 sm:w-20 md:h-24 md:w-24">
                <time
                  className="text-xl font-semibold text-onyx sm:text-2xl md:text-3xl"
                  dateTime={item.value.toString()}
                >
                  {item.value.toString().padStart(2, "0")}
                </time>
              </div>
              <span className="mt-2 text-[0.65rem] uppercase tracking-wide text-thread sm:text-xs md:text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-sm text-thread"
        >
          Jangan lewatkan koleksi terbatas kami. Tampil beda di musim ini.
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownTimer;
