import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button"; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 px-4 text-center overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-blue-600">Learn</span> New Skills.{" "}
          <span className="text-blue-600">Share</span> What You Know.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600"
        >
          SkillSwap connects you with people who can teach what you want to
          learn – and helps you teach what you already know. It’s learning made
          personal, free, and flexible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg">
            Browse Skills
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-5xl mx-auto shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="absolute -inset-2 bg-blue-100 rounded-2xl blur-xl opacity-40"></div>
          <img
            src="https://images.unsplash.com/photo-1616587894914-abb62f03d91c?auto=format&fit=crop&w=1600&q=80"
            alt="People teaching and learning"
            className="relative w-full object-cover h-[400px] sm:h-[500px]"
          />
        </motion.div>
      </div>

      <div className="absolute -top-10 left-0 w-32 h-32 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
