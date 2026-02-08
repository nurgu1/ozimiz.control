import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Activity } from 'lucide-react';

export function Slide19Analytics() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden px-16">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4">
            Управленческая панель
          </div>
          <h1 className="text-6xl font-light text-white tracking-tight mb-3">
            Дашборды и аналитика
          </h1>
          <p className="text-lg text-white/50 font-light">
            Вся картина бизнеса — в одном экране
          </p>
        </motion.div>

        {/* Main glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10"
        >

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-10 mb-14">
            {[
              { label: 'Выручка', value: '₽18.4M', delta: '+12%' },
              { label: 'Расходы', value: '₽12.1M', delta: '+5%' },
              { label: 'Прибыль', value: '₽6.3M', delta: '+28%' },
              { label: 'Маржа', value: '34.2%', delta: '+2.1%' }
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.7 }}
                className="space-y-2"
              >
                <div className="text-xs uppercase tracking-widest text-white/40">
                  {m.label}
                </div>
                <div className="text-4xl font-light text-white">
                  {m.value}
                </div>
                <div className="text-sm text-white/50">
                  {m.delta}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Analytics area */}
          <div className="grid grid-cols-2 gap-10">

            {/* Revenue trend */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-5 h-5 text-white/60" />
                <span className="text-white font-light">
                  Динамика выручки
                </span>
              </div>

              {/* Apple-style bars */}
              <div className="flex items-end h-40 gap-4">
                {[0.55, 0.6, 0.5, 0.75, 0.85, 0.7, 0.9].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1.4 + i * 0.08, duration: 0.6 }}
                    style={{ height: `${v * 100}%` }}
                    className="flex-1 origin-bottom rounded-full bg-white/80"
                  />
                ))}
              </div>

              <div className="flex justify-between mt-4 text-xs text-white/40">
                {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </motion.div>

            {/* Plan / Fact */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Activity className="w-5 h-5 text-white/60" />
                <span className="text-white font-light">
                  План и исполнение
                </span>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Продажи', value: 112 },
                  { label: 'Маркетинг', value: 95 },
                  { label: 'Операции', value: 103 }
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="flex justify-between mb-2 text-sm text-white/70">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="h-[3px] bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${row.value}%` }}
                        transition={{ delay: 1.6 + i * 0.15, duration: 0.9 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Live */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
            <span className="text-xs tracking-widest uppercase text-white/40">
              Обновляется в реальном времени
            </span>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
