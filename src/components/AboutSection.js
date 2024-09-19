import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import downloadHero from "../assets/download-hero.jpg";
import down1 from "../assets/down1.jpg";
import down2 from "../assets/down2.jpg";
import down3 from "../assets/down3.jpg";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const buttonRefs = useRef([]);

  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      buttonRefs.current.forEach((button, index) => {
        tl.to(button, {
          y: -50,
          duration: 0.15,
          ease: "power2.out",
          delay: index * 0.1,
        }).to(button, {
          y: 0,
          duration: 0.25,
          ease: "bounce.out",
        });
      });

      tl.totalDuration(2);

      return () => {
        tl.kill();
      };
    }
  }, [isInView]);

  const handleDownload = (e, platform) => {
    e.preventDefault();
    // Here you can add logic to handle the download or show a message
    console.log(`Downloading for ${platform}`);
  };

  const buttons = [
    { logo: down1, text: "Download on Gram", platform: "Gram" },
    { logo: down2, text: "Download on Ramp", platform: "Ramp" },
    { logo: down3, text: "Download on Stump", platform: "Stump" },
  ];

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white section-container"
      ref={ref}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4">
            Download Our App
          </h2>
          <p className="text-xl md:text-lg lg:text-xl mb-8">
            Get our app on your favorite platforms. Experience the best features
            and stay connected with us on the go. Download now and join our
            community!
          </p>
          <div className="flex flex-col space-y-4">
            {buttons.map((button, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <img
                  src={button.logo}
                  alt={`${button.text} logo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <a
                  href={`/download/${button.platform.toLowerCase()}`}
                  onClick={(e) => handleDownload(e, button.platform)}
                  className="btn-download py-3 px-6 text-lg flex-grow text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  ref={(el) => (buttonRefs.current[index] = el)}
                >
                  {button.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <img
              src={downloadHero}
              alt="Download Hero"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-white-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
