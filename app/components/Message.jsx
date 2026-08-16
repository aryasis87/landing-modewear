'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const Message = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Sembunyi sendiri setelah 10 detik.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          /* Masuk dari bawah, bukan dari kanan: geseran sumbu-X membuat kotak
             ini menonjol keluar layar dan memicu gulir mendatar di ponsel. */
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          /* Di layar sempit melebar mengikuti tepi kiri-kanan; baru di sm ke atas
             menempel di sudut kanan dengan lebar terbatas. */
          className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-80"
          role="status"
          aria-live="polite"
        >
          <div className="relative rounded-lg border-l-4 border-yellow-500 bg-yellow-100 p-4 pr-9 text-yellow-800 shadow-lg">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="min-w-0">
                <p className="text-sm font-medium">
                  Ini adalah <span className="font-bold">Versi 1.0</span> dari halaman ini
                </p>
                <p className="mt-1 text-xs">
                  Jika terdapat bug silakan hubungi <span className="font-bold">Developer</span>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 rounded p-1 text-yellow-600 transition-colors hover:text-yellow-900"
              aria-label="Tutup pemberitahuan"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>

            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 10, ease: 'linear' }}
              className="mt-3 h-1 rounded-full bg-yellow-300"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
