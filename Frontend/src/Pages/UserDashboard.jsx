import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import {
  FaCalendarAlt,
  FaStar,
  FaChalkboardTeacher,
  FaUserFriends,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const UserDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [skills, setSkills] = useState({
    offering: ["Yoga", "React.js", "Meditation"],
    seeking: ["Spanish", "Data Science", "Guitar"],
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setSessions([
      {
        id: 1,
        date: "2025-06-25",
        time: "10:00 AM",
        partner: "Alex M.",
        topic: "React.js",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        date: "2025-06-28",
        time: "3:00 PM",
        partner: "Sara T.",
        topic: "Yoga",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        date: "2025-07-02",
        time: "11:30 AM",
        partner: "Jamie L.",
        topic: "Spanish Conversation",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ]);

    setReviews([
      {
        id: 1,
        from: "Liam N.",
        text: "Great session on Yoga! Very patient and helpful. The breathing techniques were exactly what I needed.",
        rating: 5,
        date: "2025-06-20",
      },
      {
        id: 2,
        from: "Maya P.",
        text: "Learned so much about React hooks in our session. Explained complex concepts in simple terms!",
        rating: 4,
        date: "2025-06-18",
      },
      {
        id: 3,
        from: "Carlos S.",
        text: "The meditation guidance was transformative. Looking forward to our next session!",
        rating: 5,
        date: "2025-06-15",
      },
    ]);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Welcome back, <span className="text-blue-600">Jordan!</span>
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your skill exchanges
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Sessions */}
          <motion.div variants={container} initial="hidden" animate="show">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <IoMdTime className="mr-2 text-blue-600 text-2xl" />
                Upcoming Sessions
              </h2>
              <button className="text-sm flex items-center text-blue-600 hover:text-blue-800">
                <FiPlus className="mr-1" /> Schedule New
              </button>
            </div>

            <div className="grid gap-4">
              {sessions.map((session) => (
                <motion.div key={session.id} variants={item}>
                  <Card className="border-l-4 border-blue-500 bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={session.avatar}
                              alt={session.partner}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition">
                              {session.topic}
                            </h3>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Scheduled
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            With{" "}
                            <span className="font-medium">
                              {session.partner}
                            </span>
                          </p>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <FaCalendarAlt className="mr-1 text-gray-400" />
                            <span className="mr-3">
                              {new Date(session.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </span>
                            <IoMdTime className="mr-1 text-gray-400" />
                            <span>{session.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaChalkboardTeacher className="mr-2 text-green-600 text-2xl" />
              Your Skills
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-white shadow-sm hover:shadow-md transition">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-blue-600">
                    Offering
                  </h3>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.offering.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    <button className="flex items-center text-blue-600 text-sm">
                      <FiPlus className="mr-1" /> Add skill
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-green-600">
                    Seeking
                  </h3>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.seeking.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    <button className="flex items-center text-green-600 text-sm">
                      <FiPlus className="mr-1" /> Add skill
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaStar className="mr-2 text-yellow-500 text-2xl" />
              Recent Reviews
            </h2>

            <div className="space-y-4">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="bg-white shadow-sm hover:shadow-md transition"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start mb-2">
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">
                          {review.text}
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">
                        — {review.from}
                      </span>
                      <span className="text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUserFriends className="mr-2 text-purple-600 text-2xl" />
              Your Stats
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">
                    Sessions Completed
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">7</div>
                  <div className="text-sm text-gray-600">Skills Offered</div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-600">5</div>
                  <div className="text-sm text-gray-600">Skills Learning</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-600 text-2xl" />
              Calendar
            </h2>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Calendar Integration
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Connect your calendar to view and manage sessions in one place
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                  Connect Calendar
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
