import { motion } from 'motion/react';
import { FileQuestion, AlertCircle, TrendingDown } from 'lucide-react';

export function Slide02Problem() {
  const issues = [
    { label: 'Разрозненно', icon: FileQuestion },
    { label: 'Запоздало', icon: AlertCircle },
    { label: 'Потери', icon: TrendingDown }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Chaotic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: [0, 0.1, 0],
              rotate: Math.random() * 360 + 180,
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
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
          Общий недостаток
        </div>
        <h1 className="text-7xl font-light text-white tracking-tight">
          Фиксация есть — контроля нет
        </h1>
      </motion.div>

      {/* Central Chaos Composition */}
      <div className="relative w-full max-w-4xl h-96 mb-16">
        {/* Disconnected Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: 0.6,
              scale: 1,
              x: Math.cos((i * Math.PI * 2) / 8) * 200,
              y: Math.sin((i * Math.PI * 2) / 8) * 150
            }}
            transition={{
              duration: 1,
              delay: 0.5 + i * 0.1,
              ease: 'easeOut'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-24 h-24 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white/30 rounded" />
            </div>
          </motion.div>
        ))}

        {/* Broken Connections */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos((i * Math.PI * 2) / 6) * 30}%`}
              y2={`${50 + Math.sin((i * Math.PI * 2) / 6) * 30}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
            />
          ))}
        </svg>

        {/* Empty Center - Question Mark */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border-2 border-red-500/30 flex items-center justify-center"
        >
          <span className="text-6xl text-red-400/80">?</span>
        </motion.div>
      </div>

      {/* Issues */}
      <div className="flex items-center justify-center gap-12 relative z-10">
        {issues.map((issue, index) => {
          const Icon = issue.icon;
          return (
            <motion.div
              key={issue.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-2xl text-white font-light">{issue.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Freeze Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
