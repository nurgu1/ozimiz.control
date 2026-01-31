import { motion } from 'motion/react';
import { BarChart3, TrendingUp, TrendingDown, Activity } from 'lucide-react';

export function Slide19Analytics() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Управленческая панель
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Дашборды и аналитика
        </h1>
        <div className="text-xl text-white/60 font-light">
          Вся картина бизнеса — в одном экране
        </div>
      </motion.div>

      {/* Main Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-6xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-8"
      >
        {/* Top Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Выручка', value: '₽18.4M', change: '+12%', trend: 'up' },
            { label: 'Расходы', value: '₽12.1M', change: '+5%', trend: 'neutral' },
            { label: 'Прибыль', value: '₽6.3M', change: '+28%', trend: 'up' },
            { label: 'Маржа', value: '34.2%', change: '+2.1%', trend: 'up' }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-white/50">{metric.label}</span>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <Activity className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="text-3xl text-white font-light mb-1">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {metric.value}
                </motion.span>
              </div>
              <div className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-blue-400'}`}>
                {metric.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="grid grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-white font-light">Динамика выручки</span>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-32 gap-2">
              {[65, 72, 58, 85, 92, 78, 95].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/40">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </motion.div>

          {/* Plan/Fact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-white font-light">План / Факт</span>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Продажи', plan: 100, fact: 112 },
                { label: 'Маркетинг', plan: 100, fact: 95 },
                { label: 'Операции', plan: 100, fact: 103 }
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>{item.label}</span>
                    <span>{item.fact}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.fact}%` }}
                      transition={{ delay: 2 + i * 0.2, duration: 0.8 }}
                      className={`h-full rounded-full ${
                        item.fact >= 100 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                          : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span className="text-sm text-white/50 font-light">Обновление в реальном времени</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
