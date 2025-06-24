import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { FaStar, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const UserProfile = () => {
  const profile = {
    name: "John Doe",
    bio: "A passionate software developer and yoga enthusiast. I love teaching frontend frameworks and learning new languages.",
    skillsOffered: ["React.js", "JavaScript", "Yoga"],
    skillsWanted: ["Spanish", "Public Speaking"],
    reviews: [
      {
        id: 1,
        text: "John was super helpful with React!",
        from: "Alicia K.",
        rating: 5,
      },
      {
        id: 2,
        text: "Great energy and clarity while teaching Yoga.",
        from: "Carlos D.",
        rating: 4,
      },
    ],
  };

  return (
    <section className="min-h-screen bg-gray-50 py-8 px-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 text-blue-600 rounded-full p-4">
            <MdPerson className="text-4xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700">{profile.name}</h2>
            <p className="text-gray-600">{profile.bio}</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent>
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center">
                <FaChalkboardTeacher className="mr-2" /> Skills Offered
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {profile.skillsOffered.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center">
                <FaChalkboardTeacher className="mr-2 rotate-180" /> Skills
                Wanted
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {profile.skillsWanted.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaStar className="mr-2 text-yellow-500" /> Reviews
          </h3>
          <div className="space-y-4">
            {profile.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent>
                  <p className="text-gray-800">{review.text}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    — {review.from} ({"⭐".repeat(review.rating)})
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar + Request Button */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCalendarAlt className="mr-2 text-indigo-600" /> Availability
          </h3>
          <div className="border border-gray-300 p-6 rounded-xl text-gray-500 text-center mb-6">
            📅 Calendar integration coming soon!
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
            Request a Session
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default UserProfile;
