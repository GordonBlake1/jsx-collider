import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo1 from "../assets/hero-video-1.mp4";
import heroVideo2 from "../assets/hero-video-2.mp4";
import heroVideo3 from "../assets/hero-video-3.mp4";
import heroVideo4 from "../assets/hero-video-4.mp4";
import heroVideo5 from "../assets/hero-video-5.mp4";
import heroImage from "../assets/hero-image.jpg";
import gotchaLogo from "../assets/gotcha-logo.jpg";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4, heroVideo5];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video
            .play()
            .catch((error) => console.error("Video play error:", error));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    video.load();
    video.play().catch((error) => console.error("Video play error:", error));
  }, [currentVideo]);

  return (
    <div className="hero-container min-h-screen">
      <video ref={videoRef} autoPlay muted className="hero-video">
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content mx-auto py-12 md:py-0">
        <motion.img
          src={heroImage}
          alt="Hero"
          className="hero-image"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="hero-article"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">Discover the Future of Web Development</h1>
          <p className="hero-text">
            Explore the latest trends and technologies in web development with
            <span className="font-semibold"> JSX Collider</span>. Join us and
            take your skills to the next level.
          </p>
          <button className="hero-btn">
            <img src={gotchaLogo} alt="Gotcha Logo" />
            Get It Now on Gotcha
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
