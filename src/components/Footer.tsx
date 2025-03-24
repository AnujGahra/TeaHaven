import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-amber-100 to-amber-200 dark:from-gray-900 dark:to-gray-800 py-12 overflow-hidden">
      {/* Floating Tea Leaves Animation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-700 dark:text-amber-500 opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <FaLeaf size={24} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-900 dark:text-gray-300">
        {/* Brand Section */}
        <div className="space-y-4">
          <motion.h3
            className="text-2xl font-bold text-amber-800 dark:text-amber-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TeaHaven 🍵
          </motion.h3>
          <p className="text-sm">
            Crafting perfect tea experiences since <span className="font-semibold">2020</span>. Indulge in a sip of pure bliss.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Shop", "About Us", "Contact", "FAQ"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition duration-300">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400">Contact Us</h3>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-amber-700 dark:text-amber-400" />
            <p>123 Tea Street, Brew City</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-amber-700 dark:text-amber-400" />
            <p>contact@teahaven.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-amber-700 dark:text-amber-400" />
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400">Follow Us</h3>
          <div className="flex gap-4">
            {[
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaFacebookF, link: "#" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition duration-300"
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center mt-10 text-sm text-gray-700 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        © {new Date().getFullYear()} TeaHaven. All Rights Reserved.
      </motion.div>
    </footer>
  );
};
