import React from "react";
import { motion } from "framer-motion";
import { RiExchangeLine } from "react-icons/ri";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <RiExchangeLine className="text-blue-600 text-2xl mr-2" />
          <span className="text-xl font-bold text-blue-600">SkillSwap</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            How It Works
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Browse Skills
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Success Stories
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="hidden md:block"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
