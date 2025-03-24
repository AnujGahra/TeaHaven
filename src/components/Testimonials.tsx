import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "Absolutely in love with our Frenchie! The process was smooth, and the pup is adorable!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    text: "Best decision ever! Our Frenchie is playful, healthy, and full of energy. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophie Martinez",
    text: "Couldn't be happier with our furry friend! Great service and amazing puppies!",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[50vh] bg-gradient-to-b from-amber-100 to-amber-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
      {/* Floating Background Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 bg-white dark:bg-gray-700 opacity-20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5 }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-3xl w-full relative">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6">
          What People Say About Our Frenchies
        </h2>

        <div className="overflow-hidden relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img
                src={testimonials[index].img}
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full mx-auto shadow-md"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "{testimonials[index].text}"
              </p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                - {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
