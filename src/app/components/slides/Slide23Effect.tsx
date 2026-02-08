import { motion, AnimatePresence } from 'motion/react';
import { Eye, Target, TrendingUp, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Slide23Effect() {
  const [activeIndex, setActiveIndex] = useState(0);

  const effects = [
    {
      icon: Eye,
      title: 'Прозрачные процессы',
      before: 'Информация в разных местах',
      after: 'Единая картина бизнеса',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Контроль в реальном времени',
      before: 'Запоздалые решения',
      after: 'Мгновенная реакция',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Рост эффективности',
      before: 'Потери денег и времени',
      after: 'Оптимизация и прибыль',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Auto-cycle through effects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % effects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeEffect = effects[activeIndex];
  const Icon = activeEffect.icon;

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        
        {/* Animated gradient orb */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10"
          >
            <Sparkles className="w-3 h-3 text-white/60" />
            <span className="text-white/60 text-xs tracking-wider uppercase">
              Результат внедрения
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl font-semibold text-white mb-3 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Эффект для бизнеса
          </motion.h1>

          <motion.p
            className="text-lg text-white/50 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Что меняется после внедрения
          </motion.p>
        </motion.div>

        {/* Main Transformation Card */}
        <div className="relative">
          
          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {effects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`h-1 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-12 bg-white' 
                    : 'w-8 bg-white/20 group-hover:bg-white/40'
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Transformation Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              
              {/* Main Card */}
              <div className="rounded-[32px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden">
                
                {/* Top Section - Icon & Title */}
                <div className="p-10 border-b border-white/10">
                  <div className="flex items-center gap-6">
                    <motion.div
                      key={`icon-${activeIndex}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeEffect.color} flex items-center justify-center shadow-2xl`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h2 
                      className="text-3xl font-semibold text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {activeEffect.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Bottom Section - Before & After */}
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  
                  {/* Before */}
                  <motion.div
                    className="p-10"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                        <span className="text-red-400 text-xs font-medium uppercase tracking-wider">
                          До
                        </span>
                      </div>
                    </div>
                    <div className="text-xl text-white/40 font-light leading-relaxed line-through decoration-red-500/50">
                      {activeEffect.before}
                    </div>
                  </motion.div>

                  {/* After */}
                  <motion.div
                    className="p-10 relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {/* Subtle glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeEffect.color} opacity-5`} />
                    
                    <div className="relative mb-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                        <span className="text-green-400 text-xs font-medium uppercase tracking-wider">
                          После
                        </span>
                      </div>
                    </div>
                    <div className="relative text-2xl text-white font-medium leading-relaxed">
                      {activeEffect.after}
                    </div>
                  </motion.div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-white/70 font-light text-sm">
              Управляемый • Прозрачный • Прибыльный бизнес
            </p>
          </div>
        </motion.div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
        </motion.div>

      </div>
    </div>
  );
}