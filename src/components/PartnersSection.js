import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.jpg";
import logo7 from "../assets/logo7.jpg";
import logo8 from "../assets/logo8.jpg";
import logo9 from "../assets/logo9.jpg";
import logo10 from "../assets/logo10.jpg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const PartnersSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleLogosCount, setVisibleLogosCount] = useState(5);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const updateVisibleLogosCount = () => {
    if (window.innerWidth < 452) {
      setVisibleLogosCount(1);
    } else if (window.innerWidth < 640) {
      setVisibleLogosCount(2);
    } else if (window.innerWidth < 768) {
      setVisibleLogosCount(3);
    } else if (window.innerWidth < 1024) {
      setVisibleLogosCount(4);
    } else {
      setVisibleLogosCount(5);
    }
  };

  useEffect(() => {
    updateVisibleLogosCount();
    window.addEventListener("resize", updateVisibleLogosCount);
    return () => window.removeEventListener("resize", updateVisibleLogosCount);
  }, []);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 6000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    resetInterval();
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setStartIndex(index);
    resetInterval();
  };

  const visibleLogos = logos
    .slice(startIndex, startIndex + visibleLogosCount)
    .concat(
      logos.slice(0, Math.max(0, startIndex + visibleLogosCount - logos.length))
    );

  return (
    <section
      id="partners"
      className="py-20 bg-gray-300 text-center px-4"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners and Sponsors
        </motion.h2>
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
          >
            &#9664;
          </button>
          <div className="flex overflow-hidden space-x-6 justify-center items-center h-40 md:h-60 transition-transform duration-700 ease-in-out">
            {visibleLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 flex-shrink-0 rounded-full overflow-hidden border-4 border-white transform transition duration-700 ease-in-out"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
          >
            &#9654;
          </button>
        </motion.div>
        <motion.div
          className="flex justify-center mt-4 space-x-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {logos.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                startIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
