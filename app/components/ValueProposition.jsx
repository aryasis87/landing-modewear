"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Effortless Elegance",
      description: "Timeless designs that elevate your style without trying too hard — sophistication made simple."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15l8-8m0 0l-8-8m8 8H4" />
        </svg>
      ),
      title: "Seamless Versatility",
      description: "From casual to couture — pieces that adapt effortlessly to every occasion and season."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Sustainable Craftsmanship",
      description: "Consciously made using ethical practices and premium eco-materials — fashion that feels good and does good."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Limited Edition Exclusivity",
      description: "Stand out with pieces you won’t find anywhere else — designed in small batches to keep it truly unique."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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

  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl font-light text-onyx sm:text-4xl">
            Why <span className="font-medium">Fashion Lovers</span> Choose Us
          </motion.h2>
          <motion.p variants={item} className="mt-4 max-w-2xl mx-auto text-lg text-thread">
            Every detail is curated with intention — from fabrics to fit — delivering statement style with lasting value.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rouge to-rouge rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative h-full bg-bone p-8 rounded-lg border border-onyx/12 shadow-lg">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rouge/12 text-rouge">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-medium text-onyx">{feature.title}</h3>
                <p className="mt-2 text-base text-thread">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-thread">
            WORN BY STYLE ICONS WORLDWIDE
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-70">
            {['Vogue', 'Elle', 'GQ', 'Harper’s Bazaar', 'Hypebeast', 'WWD'].map((brand) => (
              <span key={brand} className="text-lg font-medium text-onyx">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
