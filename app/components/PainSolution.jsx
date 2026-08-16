"use client";
import React from "react";
import { motion } from "framer-motion";

const PainSolution = () => {
  const painPoints = [
    {
      pain: "Wasting time on outdated trends",
      solution: "Our curated collection keeps you ahead of the latest fashion, saving you time and ensuring you're always on point.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      pain: "Struggling with finding the right fit",
      solution: "Our personalized fit guide ensures every piece looks perfect on you, regardless of size or body type.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      pain: "Losing style points with poor accessories",
      solution: "Complete your look with our exclusive accessories, designed to elevate your style to the next level.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const solutionItem = {
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
          className="text-center mb-20"
        >
          <motion.h2 variants={item} className="text-3xl font-light text-onyx sm:text-4xl">
            The <span className="font-medium">Fashion Challenges</span> We Solve
          </motion.h2>
          <motion.p variants={item} className="mt-4 max-w-3xl mx-auto text-lg text-thread">
            Fashion is all about staying ahead of the curve. Let us help you solve these challenges and bring your style to life.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Pain Point */}
              <motion.div 
                variants={item}
                className="bg-bone p-8 rounded-xl shadow-sm border border-onyx/12"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-rouge/12 text-rouge">
                    {point.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-onyx">Fashion Dilemma</h3>
                </div>
                <p className="text-onyx text-lg">{point.pain}</p>
              </motion.div>

              {/* Our Solution */}
              <motion.div 
                variants={solutionItem}
                className="bg-bone p-8 rounded-xl shadow-sm border border-onyx/12 relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-rouge to-rouge opacity-60 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-rouge/12 text-rouge">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-onyx">Our Stylish Solution</h3>
                  </div>
                  <p className="text-onyx text-lg">{point.solution}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-thread">
            SEE WHAT OTHERS ARE SAYING ABOUT OUR STYLE
          </p>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-6 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-bone bg-onyx hover:bg-onyx cursor-pointer transition-all duration-300"
          >
            Discover Our Lookbooks
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSolution;
