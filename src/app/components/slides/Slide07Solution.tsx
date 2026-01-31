import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Slide07Solution() {
  const transformations = [
    { pain: 'Разрозненные данные', solution: 'Единый контур' },
    { pain: 'Запоздалые решения', solution: 'Реальное время' },
    { pain: 'Потери', solution: 'Контроль процессов' }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          От проблемы к решению
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight">
          Ozimiz<span className="text-blue-400">.Control</span> — решение
        </h1>
      </motion.div>

      {/* Transformations */}
      <div className="w-full max-w-5xl space-y-12">
        {transformations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
            className="flex items-center gap-8"
          >
            {/* Pain Side */}
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              className="flex-1 p-8 rounded-2xl bg-red-500/10 border border-red-500/20"
            >
              <div className="text-xl text-white/60 font-light line-through">
                {item.pain}
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
            >
              <ArrowRight className="w-12 h-12 text-blue-400" />
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
              className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            >
              <div className="text-2xl text-white font-light">
                {item.solution}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Center Bridge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-20"
      >
        <div className="px-12 py-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
          <span className="text-2xl text-white font-light">Единая система управления</span>
        </div>
      </motion.div>
    </div>
  );
}
