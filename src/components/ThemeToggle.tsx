import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Theme } from '../types';

export const ThemeToggle = ({ isDark, toggleTheme }: Theme) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg z-50"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-amber-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800" />
      )}
    </motion.button>
  );
};