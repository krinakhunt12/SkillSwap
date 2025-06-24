import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { BsPeopleFill, BsCheckCircleFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/States";
import HowItWorks from "../components/Home/HowItWorks";
import BrowseSkills from "../components/Home/BrowseSkills";
import Testimonials from "../components/Home/Testimonials";
import Features from "../components/Home/Features";
import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/Footer";
const Home = () => {
  const [search, setSearch] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    "Web Development",
    "Graphic Design",
    "Yoga",
    "Cooking",
    "Guitar",
    "Photography",
    "Spanish",
    "Data Science",
    "Knitting",
    "Public Speaking",
    "Digital Marketing",
    "Piano",
    "Meditation",
    "Creative Writing",
    "Excel",
  ];

  const testimonials = [
    {
      quote:
        "I taught Python and learned watercolor painting — SkillSwap makes it so easy!",
      author: "Ananya R., Student",
      role: "Student",
    },
    {
      quote:
        "This is the best way to learn from real people, not boring YouTube videos.",
      author: "Mark T., Designer",
      role: "Designer",
    },
    {
      quote:
        "As a retiree, I love sharing my woodworking skills while learning about technology.",
      author: "Robert J., Retired Engineer",
      role: "Mentor",
    },
  ];

  const steps = [
    {
      icon: <BsPeopleFill className="text-blue-600 text-3xl" />,
      title: "Set Up Your Profile",
      description:
        "Add what you can teach, what you want to learn, and your availability.",
    },
    {
      icon: <RiExchangeLine className="text-blue-600 text-3xl" />,
      title: "Match & Book",
      description: "Browse others' skills, message them, and book sessions.",
    },
    {
      icon: <IoMdTime className="text-blue-600 text-3xl" />,
      title: "Learn & Share",
      description: "Meet online, swap skills, leave feedback. Grow together.",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
   <Hero/>

      {/* Stats Section */}
   <Stats/>

      {/* How It Works */}
     <HowItWorks/>

      {/* Browse Skills */}
     <BrowseSkills/>
      {/* Testimonials */}
   <Testimonials/>
      {/* Features */}
      <Features/>

      {/* Final CTA */}
    <CallToAction/>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default Home;
