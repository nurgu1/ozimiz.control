import { motion, AnimatePresence } from 'motion/react';
import { Mic, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Slide13AI() {
  const [activeQuery, setActiveQuery] = useState(0);
  
  const queries = [
    { question: 'Покажи прибыль за месяц', answer: '₽2.4M чистая прибыль' },
    { question: 'Где перерасход?', answer: 'Маркетинг: +18% от плана' },
    { question: 'Какие задачи просрочены?', answer: '3 задачи требуют внимания' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuery((prev) => (prev + 1) % queries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* AI Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Технологии будущего
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          ИИ-управление бизнесом
        </h1>
        <div className="text-2xl text-white/70 font-light">
          Быстрые ответы. Умные решения.
        </div>
      </motion.div>

      {/* Central AI Interface */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Voice Wave */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(147, 51, 234, 0.3)',
                '0 0 100px rgba(147, 51, 234, 0.6)',
                '0 0 60px rgba(147, 51, 234, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl border-2 border-purple-400/50 flex items-center justify-center"
          >
            <Mic className="w-16 h-16 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Voice Wave Animation */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: [20, 60, 20]
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
            />
          ))}
        </div>

        {/* Query Examples */}
        <div className="space-y-6">
          {queries.map((query, index) => (
            <motion.div
              key={query.question}
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: activeQuery === index ? 1 : 0.3,
                x: 0,
                scale: activeQuery === index ? 1 : 0.95
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Question */}
              <motion.div
                animate={{
                  borderColor: activeQuery === index 
                    ? 'rgba(147, 51, 234, 0.5)' 
                    : 'rgba(255, 255, 255, 0.1)'
                }}
                className="rounded-2xl bg-white/5 backdrop-blur-md border p-6 mb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-xl text-white font-light">
                    "{query.question}"
                  </div>
                </div>
              </motion.div>

              {/* Answer */}
              <AnimatePresence>
                {activeQuery === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="ml-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 p-6"
                  >
                    <div className="text-2xl text-white font-light">
                      {query.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Data Update Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-400/30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-sm text-white/70 font-light">Данные обновляются в реальном времени</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}