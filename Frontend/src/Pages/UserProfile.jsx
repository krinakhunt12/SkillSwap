import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  FaStar,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiMedalFill } from "react-icons/ri";

const UserProfile = () => {
  const profile = {
    name: "John Doe",
    title: "Senior Developer & Yoga Instructor",
    bio: "A passionate software developer and yoga enthusiast. I love teaching frontend frameworks and learning new languages. Certified React developer with 5+ years experience.",
    skillsOffered: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Yoga",
      "Meditation",
    ],
    skillsWanted: ["Spanish", "Public Speaking", "Data Visualization"],
    reviews: [
      {
        id: 1,
        text: "John was super helpful with React! Explained complex concepts in simple terms and provided excellent examples.",
        from: "Alicia K.",
        rating: 5,
        date: "2025-06-15",
      },
      {
        id: 2,
        text: "Great energy and clarity while teaching Yoga. The breathing techniques were exactly what I needed to reduce stress.",
        from: "Carlos D.",
        rating: 4,
        date: "2025-05-28",
      },
      {
        id: 3,
        text: "Best JavaScript mentor I've worked with! Patient and knowledgeable with great real-world examples.",
        from: "Samantha P.",
        rating: 5,
        date: "2025-05-10",
      },
    ],
    stats: {
      sessions: 42,
      rating: 4.9,
    },
    availability: [
      "Mon-Wed: 9am-12pm",
      "Thu-Fri: 2pm-6pm",
      "Weekends: Flexible",
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        {/* Profile Header */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          whileHover={{ scale: 1.005 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-24"></div>
          <div className="px-6 pb-6 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 -mt-12">
              <div className="bg-white p-1 rounded-full shadow-xl">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                  <FaUserCircle className="text-5xl" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {profile.name}
                    </h1>
                    <p className="text-blue-600 font-medium">{profile.title}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    <RiMedalFill className="text-yellow-500" />
                    <span className="font-medium">Pro Member</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{profile.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600">
              {profile.stats.sessions}
            </div>
            <div className="text-sm text-gray-500">Sessions</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600">
              {profile.stats.rating}
            </div>
            <div className="text-sm text-gray-500">Avg Rating</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center col-span-2 sm:col-span-1">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              Request Session
            </Button>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-blue-600" />
                  Skills Offered
                </h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {profile.skillsOffered.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skillsOffered.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-green-600 rotate-180" />
                  Skills Wanted
                </h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {profile.skillsWanted.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skillsWanted.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Availability */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-indigo-600" />
                Availability
              </h3>
              <div className="space-y-3">
                {profile.availability.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700">{slot}</span>
                    <IoIosArrowForward className="text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <FaStar className="mr-2 text-yellow-500" />
            Recent Reviews
            <span className="ml-auto text-sm font-normal text-gray-500">
              {profile.reviews.length} reviews
            </span>
          </h3>

          <div className="space-y-4">
            {profile.reviews.map((review) => (
              <motion.div key={review.id} whileHover={{ scale: 1.01 }}>
                <Card className="hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <p className="text-gray-800">{review.text}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            — {review.from}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 text-yellow-400 flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            size="lg"
          >
            Connect with {profile.name.split(" ")[0]}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UserProfile;
