import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Slide25Conclusion() {
  const points = [
    'Управление в одном контуре',
    'Прозрачность процессов',
    'Контроль в реальном времени',
    'Растёт с компанией'
  ];

  return (
    <div className="w-full h-full min-h-full bg-black relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />

      {/* Soft glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[1000px] h-[1000px] bg-blue-600/20 blur-[160px] rounded-full"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-12 pt-24 pb-32">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="text-6xl font-semibold text-white tracking-tight mb-2">
            Ozimiz<span className="text-blue-400">.Control</span>
          </div>

          <p className="text-lg text-white/50 font-light">
            Управление будущего. Доступно сегодня.
          </p>
        </motion.div>

        {/* Points */}
        <div className="grid grid-cols-2 gap-6 mb-14">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl
                              border border-white/10 hover:border-white/20
                              transition-all p-7 h-full">

                <div className="w-9 h-9 rounded-full bg-blue-500/20
                                flex items-center justify-center mb-5">
                  <span className="text-blue-400 text-base font-semibold">
                    {index + 1}
                  </span>
                </div>

                <p className="text-white text-lg font-light leading-relaxed">
                  {point}
                </p>

                <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-400
                                rounded-full mt-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="rounded-3xl bg-gradient-to-r
                          from-blue-500/10 via-purple-500/10 to-blue-500/10
                          backdrop-blur-2xl border border-white/20
                          p-10 text-center relative overflow-hidden">

            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r
                         from-transparent via-white/5 to-transparent"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  Начните сегодня
                </span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>

              <h3 className="text-3xl font-semibold text-white mb-3">
                Готовы к трансформации?
              </h3>

              <p className="text-white/60 font-light max-w-xl mx-auto mb-6">
                Система управления, которая растёт вместе с вашим бизнесом
              </p>

              <div className="flex justify-center gap-2">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-8 text-center"
        >
          <span className="text-white/30 text-sm font-light">
            Управляемый • Прозрачный • Эффективный
          </span>
        </motion.div>

      </div>
    </div>
  );
}
