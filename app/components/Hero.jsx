"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Head from 'next/head';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: 'spring', damping: 12, stiffness: 100 }
        }
      };

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      <Head>
        <link rel="preload" href="/images/k1.webp" as="image" />
      </Head>

      {/* Brand Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-6 md:top-8 md:left-8 z-50"
      >
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            MODEWEAR
          </span>
          <span className="w-2 h-2 mx-2 bg-gray-900 rounded-full"></span>
          <span className="text-sm md:text-base font-medium text-gray-600">
            Collection
          </span>
        </div>
      </motion.div>

      {/* Background Gradient */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"
        />
      )}

      {/* Mobile Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="block lg:hidden w-full px-6 pt-20 pb-8"
      >
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/images/k1.webp"
            alt="Fashion Collection"
            fill
            className="object-cover"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)'
            }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent h-1/3 bottom-0"></div>
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-medium text-gray-800">NEW DROP</span>
          </div>
        </div>
      </motion.div>

      {/* Desktop Image */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-0 top-0 h-full w-1/2 xl:w-2/5"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/k1.webp"
              alt="Fashion Collection"
              fill
              className="object-cover"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent w-1/3"></div>
          </div>
        </motion.div>
      )}

      {/* Text Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10 text-center lg:text-left lg:w-1/2"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            <span className="block">Tampil Stylish</span>
            <span className="block font-medium text-gray-800">
              dengan Koleksi Terbaru
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-700 mb-8 md:mb-10"
          >
            Temukan pakaian terbaik untuk semua musim dan gaya hidup Anda.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <button className="px-6 md:px-8 py-2 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg group relative overflow-hidden">
              <span className="relative z-10">Belanja Sekarang</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="px-6 md:px-8 py-2 md:py-3 border border-gray-300 text-sm md:text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-all duration-300 relative group">
              <span className="relative z-10">Lihat Lookbook</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 flex flex-col items-center lg:items-start"
          >
            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 flex items-center">
              <span className="mr-2">FEATURED IN</span>
              <span className="hidden md:inline-block w-16 h-px bg-gray-400"></span>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {['Vogue', 'GQ', 'Harper’s Bazaar', 'Elle'].map((logo) => (
                <span key={logo} className="text-sm md:text-base font-medium text-gray-800 relative">
                  {logo}
                  <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full"></span>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
