import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/Card";

const testimonials = [
  {
    quote:
      "I taught Python and learned watercolor painting — SkillSwap makes it so easy!",
    author: "Ananya R.",
    role: "Student",
  },
  {
    quote:
      "This is the best way to learn from real people, not boring YouTube videos.",
    author: "Mark T.",
    role: "Designer",
  },
  {
    quote:
      "I've grown my network while picking up new skills. Amazing platform!",
    author: "Jasmine L.",
    role: "Freelancer",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who have transformed their skills through SkillSwap
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto h-64">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeTestimonial === index ? 1 : 0,
                zIndex: activeTestimonial === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                activeTestimonial === index ? "block" : "hidden"
              }`}
            >
              <Card className="h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="text-5xl text-gray-200 mb-4">"</div>
                  <p className="text-xl mb-6">{testimonial.quote}</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
