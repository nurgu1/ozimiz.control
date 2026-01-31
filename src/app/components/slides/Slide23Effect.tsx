import { motion } from 'motion/react';
import { Eye, Target, TrendingUp, ArrowRight } from 'lucide-react';

export function Slide23Effect() {
  const effects = [
    {
      icon: Eye,
      title: 'Прозрачные процессы',
      before: 'Информация в разных местах',
      after: 'Единая картина бизнеса'
    },
    {
      icon: Target,
      title: 'Контроль в реальном времени',
      before: 'Запоздалые решения',
      after: 'Мгновенная реакция на изменения'
    },
    {
      icon: TrendingUp,
      title: 'Рост эффективности и прибыли',
      before: 'Потери денег и времени',
      after: 'Оптимизация и прибыльность'
    }
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
          Результат внедрения
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Эффект для бизнеса
        </h1>
        <div className="text-xl text-white/60 font-light">
          Что меняется после внедрения Ozimiz.Control
        </div>
      </motion.div>

      {/* Effects */}
      <div className="space-y-12 max-w-5xl w-full">
        {effects.map((effect, index) => {
          const Icon = effect.icon;
          return (
            <motion.div
              key={effect.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl text-white font-light">{effect.title}</h2>
              </div>

              {/* Before / After */}
              <div className="flex items-center gap-8">
                {/* Before */}
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 rounded-2xl bg-red-500/10 border-2 border-red-500/30 p-6"
                >
                  <div className="text-sm text-red-400/70 mb-2 uppercase tracking-wider">
                    До
                  </div>
                  <div className="text-lg text-white/60 font-light line-through">
                    {effect.before}
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
                >
                  <ArrowRight className="w-12 h-12 text-green-400" />
                </motion.div>

                {/* After */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
                  className="flex-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-green-400/40 p-6"
                >
                  <div className="text-sm text-green-400 mb-2 uppercase tracking-wider">
                    После
                  </div>
                  <div className="text-xl text-white font-light">
                    {effect.after}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="mt-16 px-12 py-8 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30"
      >
        <div className="text-center">
          <div className="text-3xl text-white font-light mb-2">
            Управляемый, прозрачный, прибыльный бизнес
          </div>
          <div className="text-white/60 font-light">
            Это результат работы с Ozimiz.Control
          </div>
        </div>
      </motion.div>
    </div>
  );
}
