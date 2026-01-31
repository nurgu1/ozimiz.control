import { motion } from 'motion/react';
import { AlertTriangle, Clock, DollarSign, Hand } from 'lucide-react';

export function Slide06Pains() {
  const pains = [
    { text: 'Нет единой картины', icon: AlertTriangle },
    { text: 'Решения принимаются с опозданием', icon: Clock },
    { text: 'Потери денег и времени', icon: DollarSign },
    { text: 'Ручное управление', icon: Hand }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Overwhelming Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.8, 1.1, 0.9],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
            className="absolute w-24 h-24 border border-red-500/20 rounded-lg"
          />
        ))}
      </div>

      {/* Notifications/Alerts Flying Around */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0
          }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute w-16 h-12 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center"
        >
          <AlertTriangle className="w-6 h-6 text-red-400/70" />
        </motion.div>
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Типичные проблемы
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight">
          С какими проблемами
          <br />
          сталкивается бизнес
        </h1>
      </motion.div>

      {/* Pain Points */}
      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-5xl">
        {pains.map((pain, index) => {
          const Icon = pain.icon;
          return (
            <motion.div
              key={pain.text}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-red-500/20 p-8 hover:border-red-500/40 transition-all">
                {/* Stress Effect */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute inset-0 bg-red-500/10"
                />

                {/* Icon */}
                <div className="relative flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-400" />
                  </div>

                  {/* Text */}
                  <div className="text-2xl text-white font-light leading-tight">
                    {pain.text}
                  </div>
                </div>

                {/* Subtle Pulse on Hover */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  className="absolute inset-0 bg-red-500 rounded-3xl"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Void - No Control */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-red-500/30 flex items-center justify-center"
      >
        <span className="text-4xl text-red-500/40">⚠</span>
      </motion.div>

      {/* Freeze/Pause Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-20 text-white/30 text-sm font-light"
      >
        Знакомо?
      </motion.div>
    </div>
  );
}
