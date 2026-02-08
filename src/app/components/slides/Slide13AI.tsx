import { motion, AnimatePresence } from 'motion/react';
import { Mic, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Slide13AI() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  
  const queries = [
    { question: 'Покажи прибыль за месяц', answer: '122M ₸ чистая прибыль' },
    { question: 'Где перерасход?', answer: 'Маркетинг: +18% от плана' },
    { question: 'Какие задачи просрочены?', answer: '3 задачи требуют внимания' }
  ];

  useEffect(() => {
    // Hide intro after 2 seconds
    const introTimer = setTimeout(() => setShowIntro(false), 2500);
    
    // Start query rotation after intro
    const queryTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setActiveQuery((prev) => (prev + 1) % queries.length);
      }, 4000);
      return () => clearInterval(interval);
    }, 3000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(queryTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Animated particles - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px]"
      />

      <div className="relative z-10 w-full max-w-5xl px-12">

        {/* Intro Text Animation */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-6"
                >
                  <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-5xl font-semibold text-white mb-3"
                >
                  ИИ-помощник
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-2xl text-white/60 font-light"
                >
                  Голосовое управление • Быстрые ответы • Умные решения
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: showIntro ? 0 : 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-10"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-purple-400 text-xs tracking-wider uppercase">
                AI Assistant
              </span>
            </div>

            <h1 className="text-4xl font-semibold text-white mb-2">
              ИИ-управление бизнесом
            </h1>
            <p className="text-white/50 text-lg font-light">
              Быстрые ответы на любые вопросы
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            
            {/* Left: Voice Interface */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: showIntro ? 0 : 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Microphone button */}
              <div className="flex justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(147, 51, 234, 0.2)',
                        '0 0 80px rgba(147, 51, 234, 0.4)',
                        '0 0 40px rgba(147, 51, 234, 0.2)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center"
                  >
                    <Mic className="w-12 h-12 text-purple-400" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Voice wave */}
              <div className="flex items-center justify-center gap-1.5 mb-8">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [16, 40, 16]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.08,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
                  />
                ))}
              </div>

              {/* Feature badges */}
              <div className="space-y-3">
                {[
                  { icon: MessageSquare, text: 'Голосовой запрос' },
                  { icon: Zap, text: 'Ответ в реальном времени' },
                  { icon: Sparkles, text: 'Умный анализ данных' }
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: showIntro ? 0 : 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-white text-sm font-light">{feature.text}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Query Examples */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: showIntro ? 0 : 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-4"
            >
              {queries.map((query, index) => (
                <motion.div
                  key={query.question}
                  animate={{ 
                    opacity: activeQuery === index ? 1 : 0.4,
                    scale: activeQuery === index ? 1 : 0.98
                  }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {/* Question */}
                  <motion.div
                    animate={{
                      borderColor: activeQuery === index 
                        ? 'rgba(147, 51, 234, 0.3)' 
                        : 'rgba(255, 255, 255, 0.05)'
                    }}
                    className="rounded-xl bg-black/40 backdrop-blur-sm border p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-white font-light leading-relaxed">
                        "{query.question}"
                      </div>
                    </div>
                  </motion.div>

                  {/* Answer */}
                  <AnimatePresence mode="wait">
                    {activeQuery === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="ml-11"
                      >
                        <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 p-4">
                          <div className="text-white text-lg font-light">
                            {query.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Bottom indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </motion.div>
              <span className="text-xs text-white/50 font-light">
                Данные обновляются в реальном времени
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}