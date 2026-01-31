import { motion } from 'motion/react';
import { Calendar, Cog, Package, TrendingDown } from 'lucide-react';

export function Slide16Manufacturing() {
  const cycle = [
    { label: 'Планирование', icon: Calendar, angle: 0 },
    { label: 'Производство', icon: Cog, angle: 90 },
    { label: 'Выпуск', icon: Package, angle: 180 },
    { label: 'Себестоимость', icon: TrendingDown, angle: 270 }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Отрасль
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Производство
        </h1>
        <div className="text-2xl text-white/70 font-light">
          От плана до себестоимости
        </div>
      </motion.div>

      {/* Circular Cycle */}
      <div className="relative w-[500px] h-[500px]">
        {/* Center */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border-2 border-blue-400/50 flex items-center justify-center">
            <Cog className="w-16 h-16 text-blue-400" />
          </div>
        </motion.div>

        {/* Cycle Nodes */}
        {cycle.map((stage, index) => {
          const Icon = stage.icon;
          const angle = stage.angle * (Math.PI / 180);
          const radius = 200;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={stage.label}>
              {/* Connection Arc */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="10,10"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 0.5, duration: 2 }}
                />
              </svg>

              {/* Stage Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="w-36 h-36 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm text-white font-light text-center px-2 leading-tight">
                    {stage.label}
                  </div>
                </div>
              </motion.div>

              {/* Flow Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: 2 + index * 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                style={{
                  transform: `translate(calc(-50% + ${x * 0.7}px), calc(-50% + ${y * 0.7}px))`
                }}
              />
            </div>
          );
        })}

        {/* Rotation Indicator */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-blue-400/10"
        />
      </div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-12 flex gap-8"
      >
        {[
          { label: 'Цикл', value: '12 дней' },
          { label: 'Эффективность', value: '94%' },
          { label: 'Выпуск', value: '1200 ед/мес' }
        ].map((metric, i) => (
          <div key={metric.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 text-center min-w-[140px]">
            <div className="text-2xl text-white font-light mb-1">{metric.value}</div>
            <div className="text-sm text-white/50">{metric.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
