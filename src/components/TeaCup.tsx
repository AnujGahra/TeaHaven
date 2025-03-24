import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TeaCupProps {
  name: string;
  isHovered?: boolean;
}

export const TeaCup = ({ name, isHovered = false }: TeaCupProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`relative ${isHovered ? 'scale-105' : ''} transition-transform duration-300`}
    >
      <div className="w-24 h-24 relative">
        {/* Cup */}
        <div className="absolute bottom-0 w-full h-16 bg-white dark:bg-gray-800 rounded-b-full shadow-lg transform-gpu">
          {/* Tea liquid */}
          <div className="absolute bottom-0 w-full h-12 bg-amber-700 dark:bg-amber-900 rounded-b-full opacity-80" />
        </div>
        
        {/* Steam */}
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -20 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 left-1/4 w-1 h-3 bg-gray-200 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -20 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              className="absolute -top-4 left-1/2 w-1 h-3 bg-gray-200 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -20 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="absolute -top-4 left-3/4 w-1 h-3 bg-gray-200 rounded-full"
            />
          </>
        )}
      </div>
      <p className="text-center mt-2 text-sm font-medium dark:text-gray-200">{name}</p>
    </motion.div>
  );
};