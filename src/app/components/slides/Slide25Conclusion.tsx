import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Slide25Conclusion() {
  const points = [
    'Управление бизнесом в одном контуре',
    'Прозрачность процессов и финансов',
    'Контроль в реальном времени',
    'Система, которая растёт вместе с компанией'
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Radial Glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-radial from-blue-500 via-transparent to-transparent"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Итоги
        </div>
        <h1 className="text-7xl font-light text-white tracking-tight mb-8">
          Итог
        </h1>
      </motion.div>

      {/* Points */}
      <div className="space-y-8 max-w-4xl w-full relative z-10">
        {points.map((point, index) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
          >
            <motion.div
              animate={{
                borderColor: index === points.length - 1
                  ? ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.3)']
                  : 'rgba(255, 255, 255, 0.1)'
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-md border-2"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0"
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl text-white font-light leading-tight">
                {point}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="mt-20 relative z-10"
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 40px rgba(59, 130, 246, 0.2)',
              '0 0 80px rgba(59, 130, 246, 0.4)',
              '0 0 40px rgba(59, 130, 246, 0.2)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-6xl font-thin text-white">
            Ozimiz<span className="text-blue-400">.Control</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '400px' }}
        transition={{ delay: 3, duration: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-12"
      />

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-8 text-white/40 text-sm font-light"
      >
        Управление будущего. Доступно сегодня.
      </motion.div>
    </div>
  );
}
