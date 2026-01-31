import { motion } from 'motion/react';
import { Database, DollarSign, Activity, BarChart3, Users, FileText } from 'lucide-react';

export function Slide09Architecture() {
  const zones = [
    { label: 'Финансы', icon: DollarSign, angle: 0 },
    { label: 'Процессы', icon: Activity, angle: 72 },
    { label: 'Операции', icon: FileText, angle: 144 },
    { label: 'Аналитика', icon: BarChart3, angle: 216 },
    { label: 'Пользователи', icon: Users, angle: 288 }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Technical Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Инженерная зрелость
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Архитектура Ozimiz<span className="text-blue-400">.Control</span>
        </h1>
        <div className="text-xl text-white/60 font-light">
          Единое ядро управления бизнесом
        </div>
      </motion.div>

      {/* Architecture Diagram */}
      <div className="relative w-full max-w-4xl h-[500px]">
        {/* Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 80px rgba(59, 130, 246, 0.3)',
                '0 0 120px rgba(59, 130, 246, 0.5)',
                '0 0 80px rgba(59, 130, 246, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-blue-400/50 flex items-center justify-center"
          >
            <div className="text-center">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <div className="text-white text-lg font-light">Core</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Functional Zones */}
        {zones.map((zone, index) => {
          const Icon = zone.icon;
          const angle = zone.angle * (Math.PI / 180);
          const radius = 280;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={zone.label}>
              {/* Connection Line */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  width: `${radius}px`,
                  height: '2px',
                  transform: `rotate(${angle}rad)`,
                  background: `linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.1))`
                }}
              />

              {/* Zone Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 flex flex-col items-center justify-center gap-2 hover:border-blue-400/60 transition-all cursor-pointer">
                  <Icon className="w-8 h-8 text-blue-400" />
                  <span className="text-white text-sm font-light">{zone.label}</span>
                </div>
              </motion.div>

              {/* Data Flow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: 2 + index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                style={{
                  transform: `translate(calc(-50% + ${x * 0.5}px), calc(-50% + ${y * 0.5}px))`
                }}
              />
            </div>
          );
        })}

        {/* Orbital Rings */}
        {[1, 2].map((ring, i) => (
          <motion.div
            key={ring}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ delay: 1.5 + i * 0.2, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
            style={{
              width: `${180 + ring * 60}px`,
              height: `${180 + ring * 60}px`
            }}
          />
        ))}
      </div>
    </div>
  );
}
