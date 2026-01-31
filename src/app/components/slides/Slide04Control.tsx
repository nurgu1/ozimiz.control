import { motion } from 'motion/react';
import { Target } from 'lucide-react';

export function Slide04Control() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Focusing Background */}
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-transparent to-transparent"
      />

      {/* Converging Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x2 = 50 + Math.cos(angle) * 50;
          const y2 = 50 + Math.sin(angle) * 50;
          
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
            />
          );
        })}
      </svg>

      {/* Central Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(59, 130, 246, 0.2)',
                '0 0 80px rgba(59, 130, 246, 0.4)',
                '0 0 40px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-400/30 items-center justify-center"
          >
            <Target className="w-16 h-16 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-7xl font-light text-white mb-8 tracking-tight leading-tight"
        >
          Бизнес должен быть
          <br />
          под контролем
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl text-white/50 font-light"
        >
          Иначе им управляют обстоятельства
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 2, duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-12"
        />
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 3,
              delay: 2 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
