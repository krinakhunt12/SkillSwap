import React from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";

const steps = [
  {
    title: "Set Up Your Profile",
    description:
      "Add what you can teach, what you want to learn, and your availability.",
    icon: <FaUserEdit className="text-blue-600 text-4xl" />,
  },
  {
    title: "Match & Book",
    description: "Browse others’ skills, message them, and book sessions.",
    icon: <FaHandshake className="text-blue-600 text-4xl" />,
  },
  {
    title: "Learn & Share",
    description: "Meet online, swap skills, leave feedback. Grow together.",
    icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4"
        >
          How SkillSwap Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Swap skills with others in just a few simple steps
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
