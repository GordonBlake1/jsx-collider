import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactHero from "../assets/contact-hero.jpg";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.jpg";

const HelpContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="py-20 bg-egg-white text-gray-800 section-container"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            If you have any questions or need assistance, please don't hesitate
            to reach out to us. We're here to help!
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 flex flex-col items-center lg:items-start xl:items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Our customer service team is ready to assist you with any
              inquiries or issues you may have. We strive to provide the best
              support possible to ensure your satisfaction.
            </p>
            <div className="relative">
              <img
                src={contactHero}
                alt="Contact Hero"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-white-lg"
              />
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-12 lg:space-y-16">
            {[
              {
                img: contact1,
                title: "24/7 Customer Support",
                desc: "Our dedicated support team is available round the clock to address your concerns. Whether you're facing technical issues, have questions about our products, or need guidance on using our services, we're here for you. Our experienced staff is committed to providing prompt and effective solutions to ensure your seamless experience.",
              },
              {
                img: contact2,
                title: "Technical Assistance",
                desc: "For more complex technical inquiries, our specialized technical support team is at your service. They possess in-depth knowledge of our systems and can help troubleshoot any issues you might encounter. From software glitches to hardware compatibility, our experts will work diligently to resolve your technical challenges and keep your operations running smoothly.",
              },
              {
                img: contact3,
                title: "Billing and Account Management",
                desc: "Have questions about your account or billing? Our account management team is ready to assist you. They can help with subscription inquiries, payment processing, account upgrades, and any other account-related matters. We're committed to ensuring transparency and ease in managing your relationship with us, providing clear explanations and prompt resolutions to your account queries.",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4"
                initial={{ x: 50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                  <img
                    src={contact.img}
                    alt={contact.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-gray-700">{contact.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpContactSection;
