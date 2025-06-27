import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiExchangeLine,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(credentials);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md border border-blue-100 p-8 sm:p-10 rounded-3xl shadow-lg w-full max-w-md"
      >
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center text-blue-600 text-3xl font-extrabold mb-2"
          >
            <RiExchangeLine className="mr-2 rotate-45" />
            SkillSwap
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm"
          >
            Welcome back! Please log in to continue.
          </motion.p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-blue-700 mb-1.5 pl-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiMailLine className="text-blue-300" />
              </div>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={credentials.email}
                onChange={handleChange}
                className="pl-10 w-full bg-white border border-blue-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-sm font-medium text-blue-700 mb-1.5 pl-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiLockLine className="text-blue-300" />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={handleChange}
                className="pl-10 pr-10 w-full bg-white border border-blue-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <RiEyeOffLine className="text-blue-400 hover:text-blue-600" />
                ) : (
                  <RiEyeLine className="text-blue-400 hover:text-blue-600" />
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-between"
          >
            <label className="flex items-center text-sm text-blue-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              disabled={isSubmitting}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Logging In...
                  </motion.span>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Log In
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </form>

        {/* Divider */}
        <div className="my-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-blue-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="w-full flex items-center justify-center py-2 px-4 border border-blue-200 rounded-xl shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10..."
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-blue-200 rounded-xl shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10..."
                clipRule="evenodd"
              />
            </svg>
            Google
          </button>
        </div>

        <p className="text-sm text-center mt-8 text-blue-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
