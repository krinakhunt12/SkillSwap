import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Paperclip, Send, StickyNote } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

const mockMessages = [
  { id: 1, sender: "you", text: "Hi! Looking forward to the session." },
  { id: 2, sender: "other", text: "Same here! Let's cover beginner Python." },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [newMsg, setNewMsg] = useState("");
  const [note, setNote] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (newMsg.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "you", text: newMsg },
      ]);
      setNewMsg("");
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="min-h-screen bg-gray-50 p-4 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-md flex flex-col h-[85vh]"
      >
        <div className="p-4 border-b bg-blue-100 rounded-t-2xl">
          <h2 className="text-xl font-bold text-blue-700">
            Chat with Alex M. – Python Session
          </h2>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-sm px-4 py-2 rounded-lg text-sm ${
                msg.sender === "you"
                  ? "ml-auto bg-blue-100 text-right"
                  : "mr-auto bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t p-3 flex gap-2 items-center">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input
            className="flex-1"
            placeholder="Type your message..."
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} className="bg-blue-600 text-white">
            <Send className="w-4 h-4 mr-1" /> Send
          </Button>
        </div>
      </motion.div>

      {/* Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-4 p-4 bg-white rounded-xl shadow"
      >
        <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
          <StickyNote className="w-5 h-5" />
          Shared Notes
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="Add shared notes here..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </motion.div>
    </section>
  );
};

export default ChatPage;
