import { useState } from 'react';
import { motion } from 'framer-motion';
import { teas } from '../data/teas';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleMessage = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    
    const lowercaseInput = input.toLowerCase();
    const matchedTea = teas.find(tea => 
      tea.name.toLowerCase().includes(lowercaseInput) || 
      tea.description.toLowerCase().includes(lowercaseInput)
    );

    const response = matchedTea 
      ? `I recommend ${matchedTea.name}! Price: ${matchedTea.price}. ${matchedTea.description}`
      : `Try our popular tea: ${teas.find(t => t.popular)?.name || 'Green Bliss'}!`;

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg relative overflow-hidden"
        >
          {/* Tea cup with handle */}
          <div className="w-10 h-10 bg-white rounded-full relative">
            <div className="absolute bottom-1 w-full h-8 bg-amber-600 rounded-b-full" />
            {/* Handle */}
            <div className="absolute top-2 right-0 w-4 h-6 border-2 border-white rounded-full translate-x-2" />
            {/* Steam */}
            <motion.div
              animate={{ y: [-5, -15], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 left-1/2 w-1 h-2 bg-gray-300 rounded-full -translate-x-1/2"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="w-96 h-[28rem] rounded-xl shadow-2xl flex flex-col relative overflow-hidden border-2 border-amber-700"
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #d9b382 100%)', // Soft tea-inspired gradient
            boxShadow: 'inset 0 0 15px rgba(139, 69, 19, 0.2)', // Warm brown inner glow
          }}
        >
          {/* Tea-inspired header */}
          <div className="absolute top-0 left-0 w-full h-16 bg-amber-800/90 backdrop-blur-sm flex items-center justify-center border-b-2 border-amber-900">
            <h3 className="text-xl font-bold text-amber-100 tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm1-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </span>
              Tea Lover’s Chat
            </h3>
          </div>

          {/* Tea leaf decorations */}
          <div className="absolute top-16 left-3 w-6 h-8 bg-green-700/50 rounded-tl-full rounded-br-full opacity-60 transform -rotate-45" />
          <div className="absolute top-20 right-3 w-5 h-7 bg-green-800/50 rounded-tl-full rounded-br-full opacity-60 transform rotate-45" />

          {/* Chat area */}
          <div className="flex-1 mt-20 mb-16 px-5 py-3 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-amber-100">
            {messages.length === 0 ? (
              <div className="text-center mt-12">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block w-12 h-12 bg-amber-600 rounded-full mb-2 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9h2v6h-2zm0-4h2v2h-2z" />
                  </svg>
                </motion.div>
                <p className="text-amber-900 text-lg font-semibold">Hello, Tea Enthusiast!</p>
                <p className="text-amber-800 text-sm">Let’s brew some tea talk...</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`mb-4 p-4 rounded-2xl max-w-[80%] shadow-md relative ${
                    msg.isBot
                      ? 'bg-amber-300/90 text-amber-900 mr-auto border-l-4 border-amber-500'
                      : 'bg-amber-50/90 text-gray-800 ml-auto border-r-4 border-amber-300'
                  }`}
                >
                  {/* Tea stain effect */}
                  <div
                    className={`absolute w-6 h-6 rounded-full opacity-20 ${
                      msg.isBot ? '-top-2 -left-2 bg-amber-400' : '-top-2 -right-2 bg-amber-200'
                    }`}
                  />
                  <p className="text-sm font-medium leading-relaxed relative z-10">{msg.text}</p>
                  <span className="block text-xs mt-1 text-amber-700 opacity-80 relative z-10">
                    {msg.isBot ? 'Tea Master' : 'Tea Lover'}
                  </span>
                </motion.div>
              ))
            )}
          </div>

          {/* Input area */}
          <div className="p-4 bg-amber-900/80 backdrop-blur-md flex items-center gap-3 border-t-2 border-amber-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 rounded-3xl bg-amber-100/90 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md text-sm font-medium"
              placeholder="Spill the tea..."
              onKeyPress={(e) => e.key === 'Enter' && handleMessage()}
            />
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMessage}
              className="w-11 h-11 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};