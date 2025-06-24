import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { value: "10,000+", label: "Active Members" },
    { value: "500+", label: "Skills Available" },
    { value: "20,000+", label: "Sessions Completed" },
    { value: "4.9/5", label: "Average Rating" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-gray-50"
            >
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
