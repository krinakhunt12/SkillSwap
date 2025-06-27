// import { useState } from "react";
// import { Input } from "../components/ui/Input";
// import { Button } from "../components/ui/Button";
// import { Textarea } from "../components/ui/Textarea";
// import { Switch } from "../components/ui/Switch";
// import { motion } from "framer-motion";

// const Settings = () => {
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john@example.com",
//     bio: "I love sharing my design and coding skills!",
//   });

//   const [skills, setSkills] = useState(["Web Development", "UI/UX Design"]);
//   const [newSkill, setNewSkill] = useState("");
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//   const handleProfileChange = (e) => {
//     setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const addSkill = () => {
//     if (newSkill.trim() !== "") {
//       setSkills([...skills, newSkill]);
//       setNewSkill("");
//     }
//   };

//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter((s) => s !== skillToRemove));
//   };

//   const deleteAccount = () => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete your account?"
//     );
//     if (confirm) {
//       // TODO: Add backend call
//       alert("Account deleted!");
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-10"
//       >
//         <h2 className="text-2xl font-bold text-blue-700">Settings</h2>

//         {/* Profile Info */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Profile Info</h3>
//           <div className="space-y-4">
//             <Input
//               name="name"
//               placeholder="Full Name"
//               value={profile.name}
//               onChange={handleProfileChange}
//             />
//             <Input
//               name="email"
//               placeholder="Email"
//               value={profile.email}
//               onChange={handleProfileChange}
//             />
//             <Textarea
//               name="bio"
//               placeholder="Bio"
//               rows={4}
//               value={profile.bio}
//               onChange={handleProfileChange}
//             />
//             <Button className="bg-blue-600 text-white hover:bg-blue-700">
//               Save Profile
//             </Button>
//           </div>
//         </div>

//         {/* Skills Management */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Manage Skills</h3>
//           <div className="flex gap-2 mb-4">
//             <Input
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//               placeholder="Add a new skill"
//             />
//             <Button onClick={addSkill} className="bg-green-600 text-white">
//               Add
//             </Button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {skills.map((skill, idx) => (
//               <span
//                 key={idx}
//                 className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//               >
//                 {skill}
//                 <button
//                   onClick={() => removeSkill(skill)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   ×
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Notification Preferences */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Notifications</h3>
//           <div className="flex items-center gap-4">
//             <Switch
//               checked={notificationsEnabled}
//               onCheckedChange={() =>
//                 setNotificationsEnabled(!notificationsEnabled)
//               }
//             />
//             <span className="text-gray-700">
//               {notificationsEnabled ? "Enabled" : "Disabled"}
//             </span>
//           </div>
//         </div>

//         {/* Account Deletion */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2 text-red-600">
//             Delete Account
//           </h3>
//           <p className="text-sm text-gray-600 mb-2">
//             This action is permanent and cannot be undone.
//           </p>
//           <Button
//             className="bg-red-600 text-white hover:bg-red-700"
//             onClick={deleteAccount}
//           >
//             Delete My Account
//           </Button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Settings;
