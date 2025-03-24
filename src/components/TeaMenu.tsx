import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { teas } from '../data/teas';
import { TeaCup } from './TeaCup';

export const TeaMenu = () => {
  const [hoveredTea, setHoveredTea] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id="menu" className="py-16 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Signature Teas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teas.map((tea) => (
            <motion.div
              key={tea.id}
              className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredTea(tea.id)}
              onHoverEnd={() => setHoveredTea(null)}
              onClick={() => navigate(`/tea/${tea.id}`)}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover"
                />
                {tea.popular && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    Popular
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{tea.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{tea.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{tea.price}</span>
                <TeaCup name={tea.name} isHovered={hoveredTea === tea.id} />
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2 dark:text-gray-200">Ingredients:</h4>
                <div className="flex flex-wrap gap-2">
                  {tea.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full text-xs"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};