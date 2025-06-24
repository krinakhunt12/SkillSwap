import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Textarea } from "../components/ui/Textarea";

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reviews = [
    {
      id: 1,
      reviewer: "Alex M.",
      rating: 5,
      comment: "Great session! Very clear and helpful.",
    },
    {
      id: 2,
      reviewer: "Sam R.",
      rating: 4,
      comment: "Awesome skills shared. Would book again.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit review to backend
    console.log({ rating, comment });
    setSubmitted(true);
    setRating(0);
    setComment("");
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-bold text-blue-700 mb-4">Leave a Review</h2>
        {submitted ? (
          <p className="text-green-600 font-medium mb-4">
            ✅ Review submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    rating >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
              <span className="text-sm text-gray-600">{rating} / 5</span>
            </div>

            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback..."
              rows={4}
            />

            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </Button>
          </form>
        )}
      </motion.div>

      {/* Display Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-2xl mt-8"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Your Received Reviews
        </h3>
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-4 bg-white shadow-md rounded-xl border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{rev.reviewer}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{rev.comment}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewPage;
