import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { Button } from "../ui/Button"; // Adjust if needed

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

const Hero = () => {
  const sliderRef = useRef(null);
  const timeout = useRef();

  const [sliderInstanceRef, slider] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1 },
      created: () => {
        nextTimeout();
      },
      animationEnded: () => {
        nextTimeout();
      },
      updated: () => {
        nextTimeout();
      },
    },
    []
  );

  const clearNextTimeout = () => {
    clearTimeout(timeout.current);
  };

  const nextTimeout = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      slider.current?.next();
    }, 4000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
        className="keen-slider absolute inset-0 z-0 h-full w-full"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="keen-slider__slide flex justify-center items-center"
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow"
        >
          <span className="text-blue-300">Learn</span> New Skills.{" "}
          <span className="text-blue-300">Share</span> What You Know.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          SkillSwap connects you with people who can teach what you want to
          learn – and helps you teach what you already know. It’s learning made
          personal, free, and flexible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
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
