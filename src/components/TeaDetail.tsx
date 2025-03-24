import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { teas } from '../data/teas';

export const TeaDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const tea = teas.find(t => t.id === id);

  if (!tea) return <div>Tea not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-amber-50 dark:bg-gray-900 p-4 pt-20"
    >
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-amber-600 text-white rounded-full"
      >
        Back to Menu
      </button>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={tea.image}
            alt={tea.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{tea.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{tea.description}</p>
            <p className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-4">{tea.price}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{tea.details}</p>
            <div className="mb-4">
              <h3 className="font-semibold dark:text-white">Ingredients:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {tea.ingredients.map((ing, i) => (
                  <span key={i} className="px-2 py-1 bg-amber-100 dark:bg-amber-900 rounded-full text-sm">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700">
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};