import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CupSoda as TeaCup } from "lucide-react";

export const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3000);
    setTimeout(onComplete, 3500);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-amber-50 dark:bg-gray-900 z-50"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TeaCup size={80} className="text-amber-700 dark:text-amber-400" />
        </motion.div>

        {/* Tea Filling Animation */}
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 w-16 h-16 bg-amber-600 rounded-b-full"
          style={{ clipPath: "ellipse(50% 60% at 50% 100%)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-4 text-xl font-semibold text-gray-900 dark:text-white"
        >
          Brewing the Perfect Cup...
        </motion.p>
      </div>
    </motion.div>
  );
};
