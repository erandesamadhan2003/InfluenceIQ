import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Trash, ShieldCheck, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";

const dummyProfiles = [
    { id: 1, name: "Rahul Verma", credibility: 87, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Priya Sharma", credibility: 92, image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Amit Khanna", credibility: 78, image: "https://randomuser.me/api/portraits/men/5.jpg" },
];

export const SavedProfiles = () => {
    const [profiles, setProfiles] = useState(dummyProfiles);

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this profile?")) {
            setProfiles(profiles.filter(profile => profile.id !== id));
        }
    };

    return (
        <div className="p-6 bg-black text-white shadow-lg">
            <h2 className="text-3xl font-extrabold mb-6 text-center">Saved Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {profiles.map((profile) => (
                    <motion.div
                        key={profile.id}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-lg border border-gray-700"
                    >
                        <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full mb-4 shadow-lg" />
                        <h3 className="text-lg font-bold">{profile.name}</h3>
                        <p className="text-sm text-gray-400">Credibility Score: {profile.credibility}%</p>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                            onClick={() => handleRemove(profile.id)}
                        >
                            <FaTrashAlt size={18} />
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};





const dummyReviews = [
    {
        id: 1,
        name: "Rahul Verma",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4,
        comment: "A great platform to analyze true influence!",
    },
    {
        id: 2,
        name: "Sanya Mehta",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5,
        comment: "Finally, a credibility-based ranking system!",
    },
];

export const SubmittedReviews = () => {
    const [reviews, setReviews] = useState(dummyReviews);
    const [editReview, setEditReview] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleEdit = (review) => {
        setEditReview(review);
        setIsDialogOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            setReviews(reviews.filter((review) => review.id !== id));
        }
    };

    return (
        <div className="p-6 bg-black py-10 flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-white mb-6">My Submitted Reviews</h2>
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gray-800/60 shadow-lg backdrop-blur-lg rounded-xl p-5 flex items-center justify-between transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={review.profilePic}
                                alt={review.name}
                                className="w-16 h-16 rounded-full border-2 border-gray-400 shadow-lg"
                            />
                            <div>
                                <h3 className="font-semibold text-lg text-white">{review.name}</h3>
                                <div className="flex gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className={i < review.rating ? "text-yellow-400" : "text-gray-600"} />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mt-2">"{review.comment}"</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-md px-4 py-1.5" size="sm" onClick={() => handleEdit(review)}>
                                Edit
                            </Button>
                            <Button className="bg-red-500 hover:bg-red-600 text-white shadow-md px-4 py-1.5" size="sm" onClick={() => handleDelete(review.id)}>
                                Delete
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Edit Review Modal */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-[#2A2A3C] text-white border border-gray-600 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Edit Review</DialogTitle>
                    </DialogHeader>
                    <input
                        type="text"
                        className="border border-gray-500 p-3 w-full rounded bg-[#1E1E2E] text-white shadow-md"
                        value={editReview?.comment || ""}
                        onChange={(e) => setEditReview({ ...editReview, comment: e.target.value })}
                    />
                    <Button className="mt-3 bg-green-500 hover:bg-green-600 text-white shadow-md" onClick={() => setIsDialogOpen(false)}>
                        Save Changes
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};


export const ProfileSettings = () => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [profile, setProfile] = useState({
        name: "Rahul Sharma",
        email: "rahul@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        password: "",
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleDeleteAccount = () => {
        setShowDeleteDialog(false);
        alert("Account Deleted! (Simulated)");
    };

    return (
        <div className="p-8 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Profile Settings</h2>

            <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-xl shadow-2xl bg-gray-800 backdrop-blur-md bg-opacity-60 w-full max-w-lg">
                <div className="flex flex-col items-center">
                    <motion.img
                        src={profile.profilePic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-gray-600 shadow-lg mb-4"
                        whileHover={{ scale: 1.1 }}
                    />
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                    <p className="text-gray-400 text-sm">{profile.email}</p>
                </div>

                <div className="mt-6 space-y-4">
                    <Input name="name" placeholder="Name" value={profile.name} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-400" />
                    <Input name="email" type="email" placeholder="Email" value={profile.email} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-400" />
                    <Input name="password" type="password" placeholder="New Password" onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-400" />
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">Save Changes</Button>
                </div>
            </motion.div>

            <div className="mt-6 w-full max-w-lg flex justify-between items-center p-4 rounded-xl bg-gray-800 backdrop-blur-md bg-opacity-60 shadow-lg">
                <div className="flex items-center gap-2 text-gray-300">
                    <ShieldCheck size={20} />
                    <span>Enable Two-Factor Authentication</span>
                </div>
                <Switch />
            </div>

            <div className="mt-6 w-full max-w-lg p-4 rounded-xl bg-gray-800 backdrop-blur-md bg-opacity-60 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-200">Recent Activity</h3>
                <ul className="mt-2 text-gray-300 space-y-2">
                    <li>✔ Profile updated - 2 hours ago</li>
                    <li>✔ Password changed - 3 days ago</li>
                    <li>✔ 2FA enabled - 1 week ago</li>
                </ul>
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 w-full max-w-lg flex items-center justify-between p-4 rounded-xl bg-red-600 text-white cursor-pointer shadow-lg hover:bg-red-700 transition-transform"
                onClick={() => setShowDeleteDialog(true)}
            >
                <span>Delete Account</span>
                <Trash size={20} />
            </motion.div>

            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="bg-gray-800 text-white border border-gray-600 rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-red-400">Confirm Account Deletion</DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-300">Are you sure you want to delete your account? This action is irreversible.</p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white mt-4 w-full py-3 rounded-lg shadow-md" onClick={handleDeleteAccount}>
                        Yes, Delete
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};