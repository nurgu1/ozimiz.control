import { motion } from 'motion/react';
import { TrendingUp, CheckCircle2, Clock, User } from 'lucide-react';

export function Slide11SalesTasks() {
  const funnelStages = ['Лид', 'Переговоры', 'Договор', 'Оплата'];
  const tasks = [
    { title: 'Подготовить КП', status: 'done' },
    { title: 'Согласовать условия', status: 'progress' },
    { title: 'Отправить договор', status: 'pending' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
            Модуль продаж
          </div>
          <h1 className="text-6xl font-light text-white tracking-tight">
            Продажи и исполнение
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {/* Left: Sales Funnel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl text-white font-light">Воронка продаж</h2>
            </div>

            <div className="space-y-4">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div 
                    className="rounded-xl bg-gradient-to-r from-green-500/20 to-transparent border-l-4 border-green-400 p-6 hover:from-green-500/30 transition-all cursor-pointer"
                    style={{ width: `${100 - index * 15}%` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-light">{stage}</span>
                      <span className="text-white/50 text-sm">{5 - index} сделок</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Конверсия', value: '65%' },
                { label: 'Средний чек', value: '₽450K' },
                { label: 'Цикл сделки', value: '14 дн' }
              ].map((stat, i) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl text-white font-light">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl text-white font-light">Задачи / Исполнение</h2>
            </div>

            <div className="space-y-4">
              {tasks.map((task, index) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                  className={`rounded-xl border p-6 cursor-pointer hover:border-blue-400/50 transition-all ${
                    task.status === 'done' 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : task.status === 'progress'
                      ? 'bg-blue-500/10 border-blue-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className={`text-white font-light mb-2 ${task.status === 'done' ? 'line-through opacity-60' : ''}`}>
                        {task.title}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>Иван П.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Сегодня</span>
                        </div>
                      </div>
                    </div>
                    {task.status === 'done' && (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-400/30">
                <span className="text-sm text-white/70 font-light">Сделка → Задачи</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
