import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";

const features = [
  {
    img: cat1,
    title: "Whisker Wonders",
    description:
      "Discover the enchanting world of Whisker Wonders, where every cat is a superstar. These cats are known for their majestic whiskers and playful antics. Come and see why Whisker Wonders is the best place to experience feline grace.",
  },
  {
    img: cat2,
    title: "Paws & Claws",
    description:
      "Explore the adventures of Paws & Claws, the ultimate feline warriors. These brave cats are always ready for an adventure, whether it's climbing the highest tree or chasing the fastest mouse. Paws & Claws will keep you entertained with their daring feats.",
  },
  {
    img: cat3,
    title: "Feline Fantasies",
    description:
      "Dive into Feline Fantasies, a realm of imagination and playful kitties. Here, cats embark on whimsical journeys and explore fantastical worlds. Feline Fantasies is where dreams come true for every curious kitten.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="features"
      className="py-20 bg-gray-200 text-center px-4"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
