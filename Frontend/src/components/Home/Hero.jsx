import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

const Hero = () => {
  const sliderRef = useRef(null);
  const timeout = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1 },
    created: () => nextTimeout(),
    animationEnded: (s) => {
      setCurrentSlide(s.track.details.rel);
      nextTimeout();
    },
    updated: (s) => {
      setCurrentSlide(s.track.details.rel);
      nextTimeout();
    },
  });

  const nextTimeout = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      slider.current?.next();
    }, 4000);
  };

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentSlide]}
          src={images[currentSlide]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>

      {/* Overlay (better readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 backdrop-blur-sm z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl"
        >
          <span className="text-blue-300">Learn</span> New Skills.{" "}
          <span className="text-blue-300">Share</span> What You Know.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
        >
          SkillSwap connects you with people who can teach what you want to
          learn – and helps you teach what you already know. It’s learning made
          personal, free, and flexible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-600 px-6 py-3 text-lg"
          >
            Browse Skills
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
