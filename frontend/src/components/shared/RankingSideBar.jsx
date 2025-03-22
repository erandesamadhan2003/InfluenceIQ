import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSortAmountDown, FaSortAmountUp, FaTimes } from "react-icons/fa";

export const SidebarFilters = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [credibility, setCredibility] = useState(50);
  const [sortOrder, setSortOrder] = useState("ranking");
  const [isOpen, setIsOpen] = useState(false);

  // Apply filters function
  const applyFilters = () => {
    onFilterChange({ category, location, credibility, sortOrder });
  };

  return (
    <>
      {/* Sidebar Toggle Button - Adjusted position below navbar */}
      <button
        className="fixed top-24 left-5 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaFilter size={20} />}
      </button>

      {/* Sidebar Panel - Adjusted position below navbar */}
      <motion.div
        className={`fixed left-0 top-16 h-auto w-72 bg-gray-900 shadow-xl text-white p-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center mt-16">
          <FaFilter className="mr-2 text-blue-400" /> Filters
        </h2>

        {/* Category Selection */}
        <label className="block mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Politics">Politics</option>
        </select>

        {/* Location Input */}
        <label className="block mt-4 mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter Country/City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {/* Credibility Slider */}
        <label className="block mt-4 mb-2">Minimum Credibility: {credibility}%</label>
        <input
          type="range"
          min="50"
          max="100"
          value={credibility}
          onChange={(e) => setCredibility(e.target.value)}
          className="w-full cursor-pointer"
        />

        {/* Sorting Options */}
        <label className="block mt-4 mb-2">Sort By</label>
        <div className="flex gap-2">
          <button
            className={`flex-1 p-2 rounded-lg shadow-md ${
              sortOrder === "ranking" ? "bg-blue-500" : "bg-gray-800"
            }`}
            onClick={() => setSortOrder("ranking")}
          >
            <FaSortAmountDown className="inline mr-2" /> Ranking
          </button>
          <button
            className={`flex-1 p-2 rounded-lg shadow-md ${
              sortOrder === "credibility" ? "bg-blue-500" : "bg-gray-800"
            }`}
            onClick={() => setSortOrder("credibility")}
          >
            <FaSortAmountUp className="inline mr-2" /> Credibility
          </button>
        </div>

        {/* Apply Button */}
        <motion.button
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition duration-300 p-2 rounded-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={applyFilters}
        >
          Apply Filters
        </motion.button>
      </motion.div>
    </>
  );
};
