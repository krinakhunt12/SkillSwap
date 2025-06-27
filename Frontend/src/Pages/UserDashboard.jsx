import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { FaCalendarAlt, FaStar, FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const UserDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [skills, setSkills] = useState({
    offering: ["Yoga", "React.js"],
    seeking: ["Spanish", "Data Science"],
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setSessions([
      {
        id: 1,
        date: "2025-06-25",
        time: "10:00 AM",
        partner: "Alex M.",
        topic: "React.js",
      },
      {
        id: 2,
        date: "2025-06-28",
        time: "3:00 PM",
        partner: "Sara T.",
        topic: "Yoga",
      },
    ]);

    setReviews([
      {
        id: 1,
        from: "Liam N.",
        text: "Great session on Yoga! Very patient and helpful.",
        rating: 5,
      },
      {
        id: 2,
        from: "Maya P.",
        text: "Learned so much about React. Thanks again!",
        rating: 4,
      },
    ]);
  }, []);

  return (
    <section className="p-6 sm:p-10 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-blue-800 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to Your Dashboard
      </motion.h1>

      {/* Upcoming Sessions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <IoMdTime className="mr-2 text-blue-600" />
          Upcoming Sessions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sessions.map((session) => (
            <Card
              key={session.id}
              className="border-l-4 border-blue-600 bg-white shadow hover:shadow-md transition-all duration-200"
            >
              <CardContent>
                <p className="font-medium text-gray-800">
                  With <span className="text-blue-700">{session.partner}</span>
                </p>
                <p className="text-gray-600">{session.topic}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {session.date} at {session.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaChalkboardTeacher className="mr-2 text-green-600" />
          Your Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white shadow hover:shadow-md transition">
            <CardContent>
              <h3 className="font-semibold text-blue-600 mb-2 text-lg">
                Offering
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {skills.offering.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow hover:shadow-md transition">
            <CardContent>
              <h3 className="font-semibold text-blue-600 mb-2 text-lg">
                Seeking
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {skills.seeking.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaStar className="mr-2 text-yellow-500" />
          Reviews Received
        </h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-white shadow hover:shadow-md transition"
            >
              <CardContent>
                <p className="text-gray-800 font-medium">{review.text}</p>
                <div className="text-sm text-gray-500 mt-1">
                  — {review.from}{" "}
                  <span className="text-yellow-400 ml-1">
                    {"⭐".repeat(review.rating)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaCalendarAlt className="mr-2 text-indigo-600" />
          Calendar View
        </h2>
        <div className="p-10 border-2 border-dashed border-indigo-300 rounded-xl bg-white text-gray-500 text-center shadow-sm">
          📅 <span className="italic">Calendar integration coming soon!</span>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
