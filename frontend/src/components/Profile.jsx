import { useParams } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const influencers = [
  {
    id: 1,
    name: "Virat Kohli",
    category: "Sports",
    ranking: "#1",
    credibility: "98%",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "One of the greatest cricketers of the modern era, known for his aggressive style and remarkable leadership.",
    followers: "250M",
    achievements: ["ICC Cricketer of the Year", "Fastest 10,000 ODI runs", "Most runs in a single IPL season"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 2,
    name: "Shah Rukh Khan",
    category: "Entertainment",
    ranking: "#2",
    credibility: "95%",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "The 'King of Bollywood' with over 80 films, SRK is one of the most influential actors globally.",
    followers: "150M",
    achievements: ["Filmfare Best Actor Awards (14 times)", "Padma Shri Award", "UNESCO Charity Work"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 3,
    name: "Sundar Pichai",
    category: "Technology",
    ranking: "#3",
    credibility: "93%",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "CEO of Google & Alphabet, leading innovation in AI, cloud computing, and software development.",
    followers: "10M",
    achievements: ["CEO of Google & Alphabet", "Pioneer in AI & Cloud Computing", "Advocate for Digital Inclusion"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 4,
    name: "Narendra Modi",
    category: "Politics",
    ranking: "#4",
    credibility: "90%",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Prime Minister of India, driving digital transformation and economic reforms.",
    followers: "180M",
    achievements: ["Swachh Bharat Abhiyan", "Digital India Initiative", "Make in India"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 5,
    name: "Elon Musk",
    category: "Business",
    ranking: "#5",
    credibility: "88%",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Founder of Tesla, SpaceX, and Neuralink. Innovating technology for the future.",
    followers: "160M",
    achievements: ["Developed Tesla & SpaceX", "Revolutionized Electric Vehicles", "Pioneer in Space Exploration"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
];

export const Profile = () => {
  const { id } = useParams();
  const influencer = influencers.find((inf) => inf.id === parseInt(id));

  if (!influencer) return <div className="text-center text-gray-500">Influencer not found</div>;

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-900 to-black text-white p-10 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-gray-800 bg-opacity-90 p-10 rounded-2xl shadow-2xl backdrop-blur-xl border border-blue-500/50"
      >
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center"
        >
          <img src={influencer.image} alt={influencer.name} className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-lg hover:scale-105 transition duration-300" />
          <div className="ml-8 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">{influencer.name}</h1>
            <p className="text-blue-400 text-2xl mt-2 font-semibold">{influencer.category}</p>
            <p className="mt-3 text-gray-300 text-lg">{influencer.bio}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {["Ranking", "Credibility", "Followers", "Country"].map((stat, index) => (
            <div key={index} className="p-6 bg-gray-700 rounded-xl shadow-md border border-blue-500/30 hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                {index === 0 ? influencer.ranking : index === 1 ? influencer.credibility : index === 2 ? influencer.followers : "India"}
              </h2>
              <p className="text-gray-400 text-lg">{stat}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400">Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            {influencer.achievements.map((achievement, index) => (
              <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index }} className="hover:text-white transition duration-300">
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="mt-10 text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-400">Follow {influencer.name}</h3>
          <div className="mt-6 flex justify-center space-x-8">
            <a href={influencer.social.twitter} className="text-blue-400 hover:text-white text-3xl transition duration-300 transform hover:scale-125">
              <FaTwitter />
            </a>
            <a href={influencer.social.instagram} className="text-pink-400 hover:text-white text-3xl transition duration-300 transform hover:scale-125">
              <FaInstagram />
            </a>
            <a href={influencer.social.linkedin} className="text-blue-500 hover:text-white text-3xl transition duration-300 transform hover:scale-125">
              <FaLinkedin />
            </a>
            <a href={influencer.social.youtube} className="text-red-500 hover:text-white text-3xl transition duration-300 transform hover:scale-125">
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
