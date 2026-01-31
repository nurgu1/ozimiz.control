import { motion } from 'motion/react';
import { Landmark, FolderKanban, DollarSign, Eye } from 'lucide-react';

export function Slide18Government() {
  const elements = [
    { label: 'Проекты', icon: FolderKanban },
    { label: 'Бюджеты', icon: DollarSign },
    { label: 'Контроль', icon: Eye }
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
          Квазигоссектор
        </h1>
        <div className="text-2xl text-white/70 font-light">
          Проекты, бюджеты, прозрачность
        </div>
      </motion.div>

      {/* Central Flow */}
      <div className="flex items-center justify-center gap-12 mb-16">
        {elements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div key={element.label} className="flex items-center gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
              >
                <div className="w-52 h-52 rounded-3xl bg-white/5 backdrop-blur-md border-2 border-purple-400/30 hover:border-purple-400/60 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl text-white font-light">{element.label}</div>
                </div>
              </motion.div>

              {index < elements.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.3, duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Plan/Fact Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="w-full max-w-4xl rounded-3xl bg-white/5 backdrop-blur-md border border-purple-400/30 p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <Landmark className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl text-white font-light">План / Факт выполнения</h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Plan */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 font-light">Плановый бюджет</span>
              <span className="text-2xl text-white font-light">₽15.2M</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2.2, duration: 1 }}
                className="h-full bg-white/30 rounded-full"
              />
            </div>
          </div>

          {/* Fact */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 font-light">Фактическое исполнение</span>
              <span className="text-2xl text-white font-light">₽14.8M</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '97%' }}
                transition={{ delay: 2.2, duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Transparency Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-2 text-purple-400"
        >
          <Eye className="w-5 h-5" />
          <span className="text-sm font-light">Полная прозрачность использования средств</span>
        </motion.div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="mt-12 grid grid-cols-3 gap-6 max-w-4xl"
      >
        {[
          'Проектный учет',
          'Контроль бюджетов',
          'Аудит и отчетность'
        ].map((feature) => (
          <div key={feature} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 text-center">
            <div className="text-white font-light">{feature}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
