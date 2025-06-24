import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Textarea } from "../components/ui/Textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/RadioGroup";
import { CheckCircle2 } from "lucide-react";

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
];

const BookSession = () => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) return alert("Please select a time slot.");
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-2xl shadow-xl max-w-md text-center"
        >
          <CheckCircle2 className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Session Booked!
          </h2>
          <p className="text-gray-600">You’ve booked:</p>
          <p className="text-blue-600 font-medium my-2">{selectedSlot}</p>
          <p className="text-gray-500 mb-6">
            You’ll receive a confirmation email shortly.
          </p>
          <Button
            onClick={() => setConfirmed(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book Another Session
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Book a Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Choose a Time Slot
              </h3>
              <RadioGroup
                value={selectedSlot}
                onValueChange={setSelectedSlot}
                className="space-y-2"
              >
                {timeSlots.map((slot, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <RadioGroupItem value={slot} id={`slot-${index}`} />
                    <label htmlFor={`slot-${index}`} className="text-gray-700">
                      {slot}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <label className="block text-gray-700 font-medium mb-2">
                Optional Message
              </label>
              <Textarea
                placeholder="Add a message or any specific request..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            Confirm Booking
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default BookSession;
