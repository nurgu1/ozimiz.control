import { motion } from 'motion/react';
import { Users, ShoppingCart, Package, TrendingUp } from 'lucide-react';

export function Slide17Trade() {
  const flow = [
    { label: 'Клиенты', icon: Users },
    { label: 'Заказы', icon: ShoppingCart },
    { label: 'Склад', icon: Package },
    { label: 'Прибыль', icon: TrendingUp }
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
          Торговля и сервис
        </h1>
        <div className="text-2xl text-white/70 font-light">
          Продажи, склад, маржа
        </div>
      </motion.div>

      {/* Linear Flow */}
      <div className="flex items-center justify-center gap-8 mb-16">
        {flow.map((stage, index) => {
          const Icon = stage.icon;
          const isHighlight = index === flow.length - 1;

          return (
            <div key={stage.label} className="flex items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    scale: isHighlight ? [1, 1.05, 1] : 1,
                    borderColor: isHighlight
                      ? ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.3)']
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-44 h-44 rounded-3xl backdrop-blur-md border-2 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer ${
                    isHighlight ? 'bg-green-500/10' : 'bg-white/5'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isHighlight
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                      : 'bg-gradient-to-br from-green-400/50 to-emerald-500/50'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg text-white font-light">{stage.label}</div>
                </motion.div>

                {/* Order/Transaction Counter */}
                {index > 0 && index < flow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.3 }}
                    className="mt-2 text-center text-sm text-white/50"
                  >
                    {index === 1 ? '145 заказов' : '₽2.1M'}
                  </motion.div>
                )}
              </motion.div>

              {index < flow.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '60px' }}
                  transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
                  className="h-1 bg-gradient-to-r from-green-400 to-green-400/30 rounded-full"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Profit Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="px-12 py-6 rounded-3xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/40"
      >
        <div className="text-center">
          <div className="text-sm text-white/60 mb-2">Чистая прибыль за месяц</div>
          <div className="text-5xl text-white font-light">₽847K</div>
          <div className="text-sm text-green-400 mt-2">↑ 23% к прошлому месяцу</div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="mt-12 grid grid-cols-3 gap-6 max-w-4xl"
      >
        {[
          'CRM + Продажи',
          'Управление складом',
          'Расчет маржинальности'
        ].map((feature) => (
          <div key={feature} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20 text-center">
            <div className="text-white font-light">{feature}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
