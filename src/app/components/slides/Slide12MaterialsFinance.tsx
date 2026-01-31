import { motion } from 'motion/react';
import { Package, ArrowRight, DollarSign } from 'lucide-react';

export function Slide12MaterialsFinance() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
            Контроль ресурсов
          </div>
          <h1 className="text-6xl font-light text-white tracking-tight">
            Материалы и финансы
          </h1>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Material Flow */}
          <div className="flex items-center justify-center gap-8 mb-16">
            {['Закупка', 'Склад', 'Использование'].map((stage, index) => (
              <div key={stage} className="flex items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                  className="w-48 h-48 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer"
                >
                  <Package className="w-12 h-12 text-purple-400" />
                  <div className="text-xl text-white font-light">{stage}</div>
                  <div className="text-2xl text-purple-400">
                    {index === 0 ? '₽245K' : index === 1 ? '156 ед' : '89 ед'}
                  </div>
                </motion.div>

                {index < 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.3, duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-purple-400/50" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Financial Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl text-white font-light">Финансовый контроль</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Остатки', value: '₽1.2M', sublabel: 'на складе' },
                { label: 'Расходы', value: '₽856K', sublabel: 'за месяц' },
                { label: 'План/Факт', value: '92%', sublabel: 'выполнение' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.15, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-sm text-white/50 mb-2">{item.label}</div>
                  <div className="text-4xl text-white font-light mb-1">{item.value}</div>
                  <div className="text-xs text-white/40">{item.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Plan/Fact Comparison */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 text-sm text-white/50">
                  <span>План</span>
                  <span>₽930K</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="h-full bg-white/30 rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 text-sm text-white/50">
                  <span>Факт</span>
                  <span>₽856K</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
