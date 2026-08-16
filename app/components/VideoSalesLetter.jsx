"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoSalesLetter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Ganti dengan ID video YouTube Anda
  const youtubeVideoId = "5RjEQF8yEHE"; // Contoh ID, ganti dengan ID video Anda
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-light text-onyx sm:text-4xl">
            <span className="font-medium">Kisah Kami</span> dalam Video
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-thread">
            Saksikan bagaimana kami mengubah tantangan menjadi pengalaman yang mulus dalam waktu kurang dari 3 menit.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-bone">
            {!isPlaying ? (
              <div 
                className="relative cursor-pointer group"
                onClick={handlePlay}
              >
                <img 
                  src={thumbnailUrl} 
                  alt="Thumbnail video" 
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-bone bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-10 h-10 text-onyx ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-onyx bg-opacity-70 text-bone px-3 py-1 rounded-md text-sm">
                  3:14
                </div>
              </div>
            ) : (
              <iframe 
                className="w-full h-155"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Video produk"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
        >
          {[
            { value: "95%", label: "Tingkat Kepuasan" },
            { value: "24/7", label: "Dukungan Tersedia" },
            { value: "3x", label: "Hasil Lebih Cepat" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -3 }}
              className="bg-bone p-4 rounded-lg"
            >
              <p className="text-2xl font-medium text-onyx">{item.value}</p>
              <p className="text-sm text-thread mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-thread mb-4">
            SIAP MERASAKAN PERBEDAANNYA?
          </p>
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-bone bg-onyx hover:bg-onyx transition-all duration-300">
            Mulai Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;
