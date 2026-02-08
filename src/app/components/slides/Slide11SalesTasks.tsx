import { motion } from 'motion/react';
import { TrendingUp, CheckCircle2, Clock, User, ArrowRight, Zap } from 'lucide-react';

export function Slide11SalesTasks() {
  const funnelStages = [
    { name: 'Лид', deals: 8, color: 'from-blue-500 to-cyan-500', width: 100 },
    { name: 'Переговоры', deals: 5, color: 'from-purple-500 to-pink-500', width: 75 },
    { name: 'Договор', deals: 3, color: 'from-green-500 to-emerald-500', width: 50 },
    { name: 'Оплата', deals: 2, color: 'from-amber-500 to-orange-500', width: 35 }
  ];

  const tasks = [
    { title: 'Подготовить КП', user: 'Иван П.', time: 'Сегодня 14:00', status: 'done', priority: 'high' },
    { title: 'Согласовать условия', user: 'Мария С.', time: 'Сегодня 16:30', status: 'progress', priority: 'high' },
    { title: 'Отправить договор', user: 'Алексей К.', time: 'Завтра', status: 'pending', priority: 'medium' }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 w-full max-w-7xl px-12">

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
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <TrendingUp className="w-3 h-3 text-white/50" />
            <span className="text-white/50 text-xs tracking-wider uppercase">
              Модуль продаж
            </span>
          </motion.div>

          <h1 className="text-5xl font-semibold text-white tracking-tight">
            Продажи и исполнение
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">

          {/* Left: Sales Funnel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-xl text-white font-medium">Воронка продаж</h2>
            </div>

            {/* Funnel stages */}
            <div className="space-y-3 mb-6">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ x: 4 }}
                  className="relative group cursor-pointer"
                  style={{ width: `${stage.width}%` }}
                >
                  <div className="relative rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08] hover:border-white/20 transition-all p-4 overflow-hidden">
                    
                    {/* Gradient background */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${stage.color}`}
                    />

                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stage.color}`} />

                    {/* Content */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${stage.color}`} />
                        <span className="text-white font-light tracking-tight">{stage.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm font-light">{stage.deals}</span>
                        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: 'Конверсия', value: '65%', icon: Zap, color: 'from-green-500 to-emerald-500' },
                { label: 'Средний чек', value: '₸450K', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
                { label: 'Цикл сделки', value: '14 дн', icon: Clock, color: 'from-purple-500 to-pink-500' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08] p-4"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} opacity-20 flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-2xl text-white font-light mb-1">{stat.value}</div>
                    <div className="text-xs text-white/40 font-light tracking-wide">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl text-white font-medium">Задачи исполнения</h2>
            </div>

            {/* Task cards */}
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.9 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="group cursor-pointer"
                >
                  <div className={`relative rounded-xl backdrop-blur-sm border p-5 overflow-hidden transition-all ${
                    task.status === 'done' 
                      ? 'bg-black/30 border-white/[0.05]' 
                      : task.status === 'progress'
                      ? 'bg-blue-500/[0.03] border-blue-500/20 hover:border-blue-500/40'
                      : 'bg-black/40 border-white/[0.08] hover:border-white/20'
                  }`}>
                    
                    {/* Status indicator */}
                    {task.status === 'done' && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle2 className="w-5 h-5 text-green-400/60" />
                      </div>
                    )}
                    {task.status === 'progress' && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                      />
                    )}
                    {task.priority === 'high' && task.status !== 'done' && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500" />
                    )}

                    {/* Content */}
                    <div className="relative">
                      <h3 className={`text-white font-light mb-3 ${task.status === 'done' ? 'line-through opacity-40' : ''}`}>
                        {task.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          <span className="font-light">{task.user}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-light">{task.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-6"
            >
              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08] p-4">
                <div className="flex items-center justify-center gap-2 text-white/50">
                  <span className="text-sm font-light">Сделка</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-light">Задачи</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-light">Исполнение</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}