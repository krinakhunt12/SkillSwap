import React from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";

const features = [
  {
    title: "Free to Use",
    description:
      "No hidden fees or subscriptions. Exchange skills without exchanging money.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Learn and teach on your own schedule. Find times that work for both of you.",
  },
  {
    title: "Verified Members",
    description:
      "Our verification process ensures you're connecting with real people.",
  },
  {
    title: "Safe & Secure",
    description:
      "All sessions happen through our secure platform with safety features.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Why Choose SkillSwap?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're building the best platform for skill exchange
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-gray-200"
            >
              <div className="flex items-start mb-4">
                <BsCheckCircleFill className="text-blue-600 text-xl mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
