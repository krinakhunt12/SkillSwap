import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button"; // Adjust path if needed

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Start Your Skill Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Join thousands of learners and teachers sharing their knowledge every
          day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-x-4"
        >
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Join for Free
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
