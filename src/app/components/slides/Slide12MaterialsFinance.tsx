import { motion } from 'motion/react';
import { Package, ArrowRight, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

export function Slide12MaterialsFinance() {
  const flowStages = [
    { name: 'Закупка', value: '12.5M ₸', icon: ShoppingCart, color: 'from-blue-500 to-cyan-500' },
    { name: 'Склад', value: '156 ед', icon: Package, color: 'from-purple-500 to-pink-500' },
    { name: 'Использование', value: '89 ед', icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
  ];

  const financials = [
    { label: 'Остатки', value: '62M ₸', sublabel: 'на складе', color: 'from-blue-500 to-cyan-500' },
    { label: 'Расходы', value: '43.8M ₸', sublabel: 'за месяц', color: 'from-orange-500 to-red-500' },
    { label: 'План/Факт', value: '92%', sublabel: 'выполнение', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 w-full max-w-6xl px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-3 py-1 mb-4 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <span className="text-white/50 text-xs tracking-wider uppercase">
              Контроль ресурсов
            </span>
          </motion.div>

          <h1 className="text-5xl font-semibold text-white tracking-tight">
            Материалы и финансы
          </h1>
        </motion.div>

        {/* Material Flow - Horizontal */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {flowStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.name} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.15, 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-2xl bg-black/40 backdrop-blur-sm border border-white/[0.08] hover:border-white/20 transition-all p-6 w-56 overflow-hidden">
                      
                      {/* Gradient accent */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.05 }}
                        className={`absolute inset-0 bg-gradient-to-br ${stage.color}`}
                      />

                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7 + index * 0.15, duration: 0.6, type: "spring" }}
                        className="relative mb-4"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} opacity-90 flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      {/* Text */}
                      <div className="relative">
                        <h3 className="text-white text-lg font-medium mb-2 tracking-tight">
                          {stage.name}
                        </h3>
                        <div className={`text-2xl font-light bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                          {stage.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between stages */}
                  {index < flowStages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                    >
                      <ArrowRight className="w-6 h-6 text-white/20" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Financial Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="rounded-3xl bg-black/40 backdrop-blur-sm border border-white/[0.08] p-8 overflow-hidden relative"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.02] to-blue-500/[0.02]" />

          {/* Header */}
          <div className="relative flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-2xl text-white font-medium">Финансовый контроль</h2>
          </div>

          {/* Financial cards */}
          <div className="relative grid grid-cols-3 gap-4 mb-6">
            {financials.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08] p-5 relative overflow-hidden group"
              >
                {/* Gradient on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                />

                <div className="relative">
                  <div className="text-sm text-white/50 mb-2 font-light tracking-wide">{item.label}</div>
                  <div className={`text-3xl font-light bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                    {item.value}
                  </div>
                  <div className="text-xs text-white/30 font-light">{item.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Plan vs Fact bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="relative space-y-4"
          >
            {/* Plan */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70 font-light">План</span>
                <span className="text-sm text-white/50 font-light">47.5M ₸</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                  className="h-full bg-white/20 rounded-full"
                />
              </div>
            </div>

            {/* Fact */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70 font-light">Факт</span>
                <span className="text-sm text-white/50 font-light">43.8M ₸</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full relative"
                >
                  {/* Shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3, repeatDelay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ width: '50%' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}