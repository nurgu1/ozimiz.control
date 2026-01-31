import { motion } from 'motion/react';
import { Network, Database, Cloud, FileCode, Building2, Plug } from 'lucide-react';

export function Slide21Integrations() {
  const systems = [
    { label: 'Банки', icon: Building2, angle: 0 },
    { label: 'Бухгалтерия', icon: FileCode, angle: 72 },
    { label: 'CRM', icon: Database, angle: 144 },
    { label: 'Внешние сервисы', icon: Cloud, angle: 216 },
    { label: 'API', icon: Plug, angle: 288 }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Экосистема
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Интеграции и API
        </h1>
        <div className="text-xl text-white/60 font-light">
          Единый контур данных
        </div>
      </motion.div>

      {/* Integration Map */}
      <div className="relative w-full max-w-4xl h-[500px]">
        {/* Central Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(59, 130, 246, 0.3)',
                '0 0 100px rgba(59, 130, 246, 0.5)',
                '0 0 60px rgba(59, 130, 246, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-blue-400/50 flex flex-col items-center justify-center"
          >
            <Network className="w-16 h-16 text-blue-400 mb-2" />
            <div className="text-white font-light">Ozimiz.Control</div>
          </motion.div>
        </motion.div>

        {/* External Systems */}
        {systems.map((system, index) => {
          const Icon = system.icon;
          const angle = system.angle * (Math.PI / 180);
          const radius = 240;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={system.label}>
              {/* Connection Line */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `${radius}px`,
                  height: '2px',
                  transformOrigin: 'left center',
                  transform: `rotate(${angle}rad)`,
                  background: `linear-gradient(to right, rgba(59, 130, 246, 0.5), transparent)`
                }}
              />

              {/* System Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 hover:border-blue-400/60 transition-all flex flex-col items-center justify-center gap-2">
                  <Icon className="w-10 h-10 text-blue-400" />
                  <span className="text-white text-sm font-light text-center px-2 leading-tight">
                    {system.label}
                  </span>
                </div>
              </motion.div>

              {/* Data Flow Animation */}
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

        {/* Orbital Ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-400/20"
        />
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-12 flex gap-8 relative z-10"
      >
        {[
          'REST API',
          'Webhooks',
          'Синхронизация'
        ].map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3 + i * 0.15, duration: 0.5 }}
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-blue-400/30"
          >
            <span className="text-white font-light">{feature}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
