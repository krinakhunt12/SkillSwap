import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/Tabs";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

const mockSessions = {
  pending: [
    {
      id: 1,
      user: "Alex M.",
      skill: "Photography",
      time: "June 28, 3:00 PM",
      note: "Awaiting confirmation.",
    },
  ],
  upcoming: [
    {
      id: 2,
      user: "Sara L.",
      skill: "Yoga",
      time: "June 29, 10:00 AM",
      note: "Bring a yoga mat.",
    },
  ],
  completed: [
    {
      id: 3,
      user: "Dev P.",
      skill: "Guitar",
      time: "June 15, 5:00 PM",
      note: "Left a 5-star review.",
    },
  ],
  canceled: [
    {
      id: 4,
      user: "Lily R.",
      skill: "French",
      time: "June 22, 2:00 PM",
      note: "Canceled by user.",
    },
  ],
};

const SessionCard = ({ session, status }) => (
  <Card className="mb-4">
    <CardContent className="py-4 space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {session.skill}
          </h3>
          <p className="text-sm text-gray-500">With {session.user}</p>
        </div>
        <Badge variant={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <div className="flex items-center text-sm text-gray-600 gap-2">
        <CalendarDays className="w-4 h-4" /> {session.time}
      </div>
      {session.note && (
        <p className="text-sm text-gray-500 italic mt-1">{session.note}</p>
      )}
    </CardContent>
  </Card>
);

const SessionManagement = () => {
  const [tab, setTab] = useState("upcoming");

  return (
    <section className="min-h-screen px-4 py-10 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Session Management
        </h2>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-4 gap-2 bg-blue-100 p-1 rounded-xl">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-6">
            {mockSessions.pending.map((s) => (
              <SessionCard key={s.id} session={s} status="pending" />
            ))}
          </TabsContent>
          <TabsContent value="upcoming" className="mt-6">
            {mockSessions.upcoming.map((s) => (
              <SessionCard key={s.id} session={s} status="upcoming" />
            ))}
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            {mockSessions.completed.map((s) => (
              <SessionCard key={s.id} session={s} status="completed" />
            ))}
          </TabsContent>
          <TabsContent value="canceled" className="mt-6">
            {mockSessions.canceled.map((s) => (
              <SessionCard key={s.id} session={s} status="canceled" />
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default SessionManagement;
