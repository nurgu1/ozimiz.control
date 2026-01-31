import { motion } from 'motion/react';
import { Building2, Factory, Store, Landmark } from 'lucide-react';

export function Slide14Industries() {
  const industries = [
    { label: 'Строительство', icon: Building2, color: 'from-orange-400 to-red-500' },
    { label: 'Производство', icon: Factory, color: 'from-blue-400 to-cyan-500' },
    { label: 'Торговля и сервис', icon: Store, color: 'from-green-400 to-emerald-500' },
    { label: 'Квазигоссектор', icon: Landmark, color: 'from-purple-400 to-pink-500' }
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
          Отраслевые решения
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Выберите вашу отрасль
        </h1>
        <div className="text-xl text-white/60 font-light">
          Ozimiz.Control адаптируется под специфику бизнеса
        </div>
      </motion.div>

      {/* Central Core */}
      <div className="relative w-full max-w-5xl h-[500px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-blue-400/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-lg font-light mb-1">Ozimiz</div>
              <div className="text-blue-400 text-xl font-light">.Control</div>
            </div>
          </div>
        </motion.div>

        {/* Industry Cards */}
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const angle = (index * 90) * (Math.PI / 180);
          const radius = 280;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={industry.label}>
              {/* Connection */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `${radius}px`,
                  height: '3px',
                  transformOrigin: 'left center',
                  transform: `rotate(${angle}rad)`,
                  background: `linear-gradient(to right, rgba(59, 130, 246, 0.4), transparent)`
                }}
              />

              {/* Industry Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 cursor-pointer group"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className={`w-56 h-56 rounded-3xl bg-gradient-to-br ${industry.color} p-0.5`}>
                  <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center gap-6 group-hover:bg-black/70 transition-all">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-xl text-white font-light text-center px-4 leading-tight">
                      {industry.label}
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 text-white/40 text-sm font-light"
      >
        Специализированные модули для каждой отрасли
      </motion.div>
    </div>
  );
}
