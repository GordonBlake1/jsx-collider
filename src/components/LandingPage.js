import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import PartnersSection from "./PartnersSection"; // Import the PartnersSection component
import logo from "../assets/logo-dold.jpg";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      const header = document.querySelector("header");
      const headerHeight = header.offsetHeight;

      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <header className="w-full bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-30">
        <nav className="container-center flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center">
            <img
              src={logo}
              alt="My Website Logo"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <div className="ml-3 font-title">
              <span className="text-jsx">JSX</span> Collider
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-gray-800 focus:outline-none p-2 rounded ${
                menuOpen ? "border border-blue-500 bg-blue-100" : ""
              }`}
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className={`hidden md:flex md:items-center`}>
            <a href="#features" className="header-link">
              Features
            </a>
            <a href="#download" className="header-link">
              Download
            </a>
            <a href="#contact" className="header-link">
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`dropdown-menu ${menuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col items-center">
            <a
              href="#features"
              className="header-link border-b border-blue-500 w-full text-center py-2"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="header-link border-b border-blue-500 w-full text-center py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="header-link w-full text-center py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col mt-16">
        <HeroSection />
        <FeaturesSection />
        <PartnersSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="w-full bg-gray-800 py-6 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-blue-400 font-bold text-xl">JSX</span>{" "}
            <span className="font-bold text-xl">Collider</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a
              href="mailto:jsxcollider@gmail.com"
              className="hover:text-blue-400"
            >
              jsxcollider@gmail.com
            </a>
            <div className="mt-2 text-sm">
              <a href="/privacy-policy" className="hover:text-blue-400 mr-4">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
