import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { Input } from "../ui/Input"; // Adjust path as needed
import { Button } from "../ui/Button"; // Adjust path as needed

const skillsList = [
  "Web Development",
  "Graphic Design",
  "Yoga",
  "Cooking",
  "Guitar",
  "Photography",
  "Digital Marketing",
  "Video Editing",
  "Public Speaking",
  "UI/UX Design",
];

const BrowseSkills = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Browse Popular Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover skills you want to learn or find people to teach what you
            know
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 relative max-w-md mx-auto"
        >
          <Input
            placeholder="What do you want to learn?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-3"
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skillsList
            .filter((skill) =>
              skill.toLowerCase().includes(search.toLowerCase())
            )
            .map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm cursor-pointer transition"
              >
                {skill}
              </motion.span>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="flex items-center mx-auto">
            View All Skills <FaArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrowseSkills;
