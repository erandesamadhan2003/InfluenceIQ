import { motion } from "framer-motion";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-3"
        whileHover={{ scale: 1.1 }}
      />
      <h3 className="text-xl font-semibold text-blue-400">{testimonial.name}</h3>
      <p className="text-sm text-gray-300">{testimonial.role}</p>
      <p className="mt-3 text-gray-400 italic">"{testimonial.feedback}"</p>
    </motion.div>
  );
};
