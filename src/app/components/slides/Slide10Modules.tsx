import { motion } from 'motion/react';
import { ShoppingCart, CheckSquare, Package, DollarSign, FileText, Hexagon } from 'lucide-react';

export function Slide10Modules() {
  const modules = [
    { label: 'Продажи', icon: ShoppingCart },
    { label: 'Задачи', icon: CheckSquare },
    { label: 'Материалы / склад', icon: Package },
    { label: 'Финансы', icon: DollarSign },
    { label: 'Документы', icon: FileText }
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
          Модульная платформа
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Общие модули системы
        </h1>
        <div className="text-xl text-white/60 font-light">
          Подключаются только нужные блоки
        </div>
      </motion.div>

      {/* Module Map */}
      <div className="relative w-full max-w-5xl h-[500px]">
        {/* Central Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-blue-400/50 flex items-center justify-center">
            <div className="text-center">
              <Hexagon className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-light">Ozimiz.Control</div>
            </div>
          </div>
        </motion.div>

        {/* Modules */}
        {modules.map((module, index) => {
          const Icon = module.icon;
          const angle = (index * (360 / modules.length)) * (Math.PI / 180);
          const radius = 240;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={module.label}>
              {/* Connection */}
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
                  background: `linear-gradient(to right, rgba(59, 130, 246, 0.3), transparent)`
                }}
              />

              {/* Module Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="w-36 h-36 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="text-white text-sm font-light text-center leading-tight">
                    {module.label}
                  </div>
                </div>
              </motion.div>

              {/* Activation indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: 2 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 text-white/40 text-sm font-light"
      >
        Гибкая конфигурация под задачи бизнеса
      </motion.div>
    </div>
  );
}
