import { motion } from 'motion/react';
import { Building2, Layers, Truck, DollarSign } from 'lucide-react';

export function Slide15Construction() {
  const stages = [
    { label: 'Объекты', icon: Building2 },
    { label: 'Этапы', icon: Layers },
    { label: 'Снабжение', icon: Truck },
    { label: 'Финансы', icon: DollarSign }
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
          Строительство
        </h1>
        <div className="text-2xl text-white/70 font-light">
          Управление объектами и финансами
        </div>
      </motion.div>

      {/* Linear Flow */}
      <div className="flex items-center justify-center gap-8">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="flex items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
                className="relative group"
              >
                <motion.div
                  animate={{
                    borderColor: index === 0 || index === 3
                      ? ['rgba(249, 115, 22, 0.3)', 'rgba(249, 115, 22, 0.6)', 'rgba(249, 115, 22, 0.3)']
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-48 h-48 rounded-3xl bg-white/5 backdrop-blur-md border-2 hover:border-orange-400/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl text-white font-light">{stage.label}</div>
                </motion.div>

                {/* Data Flow Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: 1.5 + index * 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"
                />
              </motion.div>

              {index < stages.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '60px' }}
                  transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
                  className="h-1 bg-gradient-to-r from-orange-400 to-orange-400/30 rounded-full"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-16 grid grid-cols-3 gap-6 max-w-4xl"
      >
        {[
          'Контроль по объектам',
          'Этапность работ',
          'Бюджеты и затраты'
        ].map((feature, i) => (
          <div key={feature} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20 text-center">
            <div className="text-white font-light">{feature}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
