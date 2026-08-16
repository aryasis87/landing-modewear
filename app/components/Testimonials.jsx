"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Data testimoni
const testimonials = [
  {
    name: "Sarah Tanaka",
    role: "CEO, Tech Innovations",
    image: "/images/pp3.png",
    quote: "Platform ini meningkatkan metrik keterlibatan pelanggan kami sebesar 180% dalam kuartal pertama penerapan.",
  },
  {
    name: "James Wilson",
    role: "CMO, Global Solutions",
    image: "/images/pp4.png",
    quote: "Layanan luar biasa dengan ROI yang dapat diukur. Tingkat konversi kami meningkat 2,5x sekaligus mengurangi biaya akuisisi.",
  },
  {
    name: "Emma Rodriguez",
    role: "Direktur, Venture Capital",
    image: "/images/pp5.png",
    quote: "Wawasan strategis yang diberikan telah menjadi hal yang sangat diperlukan dalam strategi pertumbuhan perusahaan portofolio kami.",
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            },
          }}
        >
          <h2 className="text-3xl font-light text-onyx sm:text-4xl">
            Dipercaya oleh <span className="font-medium">Para Pemimpin Industri</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-thread">
            Para profesional di organisasi terkemuka berbagi pengalaman mereka.
          </p>
        </motion.div>

        {/* Slider Testimoni */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { delay: 0.3, duration: 0.8 }
            },
          }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ 
              delay: 8000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            effect="fade"
            loop={true}
            className="swiper-container"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-bone p-10 rounded-xl shadow-sm border border-onyx/12">
                  <div className="flex flex-col items-center text-center">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    />
                    <motion.blockquote
                      className="text-xl font-light text-onyx max-w-2xl leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      "{testimonial.quote}"
                    </motion.blockquote>
                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <h3 className="text-lg font-medium text-onyx">
                        {testimonial.name}
                      </h3>
                      <p className="text-thread text-sm mt-1">
                        {testimonial.role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Indikator Kepercayaan */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-xs font-medium text-thread tracking-wider mb-6">
            DIPERCAYA OLEH PERUSAHAAN INOVATIF DI SELURUH DUNIA
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
            {['Forbes', 'TechCrunch', 'Bloomberg', 'Harvard Business Review', 'The Economist'].map((company, i) => (
              <span key={i} className="text-base font-medium text-onyx">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
