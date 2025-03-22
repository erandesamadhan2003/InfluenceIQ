import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-16 px-8">
      {/* Header Section */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in <span className="text-blue-500">Touch</span>
      </motion.h2>
      <p className="text-gray-400 text-center max-w-xl mb-12">
        Have questions or suggestions? We'd love to hear from you! Fill out the form below or connect with us on social media.
      </p>

      {/* Contact Form & Details */}
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span className="text-gray-300">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="text-gray-300">support@influenceiq.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span className="text-gray-300">IIIT Vadodara, India</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <div className="relative">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 py-3 rounded-lg text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};
