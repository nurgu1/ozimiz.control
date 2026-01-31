import { motion } from 'motion/react';
import { Award, Zap, Shield, Users } from 'lucide-react';

export function Slide24WhyUs() {
  const cases = [
    { industry: 'Строительство', task: 'Контроль 15 объектов', result: 'Снижение перерасхода на 24%' },
    { industry: 'Производство', task: 'Учет себестоимости', result: 'Прозрачность затрат 100%' },
    { industry: 'Торговля', task: 'Управление складом', result: 'Оборачиваемость +18%' }
  ];

  const reasons = [
    { icon: Award, text: 'Подход под бизнес, а не коробка' },
    { icon: Zap, text: 'Гибкость под процессы' },
    { icon: Shield, text: 'Контроль и прозрачность' },
    { icon: Users, text: 'Партнёрство и сопровождение' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
            Доверие и результаты
          </div>
          <h1 className="text-6xl font-light text-white tracking-tight mb-4">
            Почему Ozimiz<span className="text-blue-400">.Control</span>
          </h1>
          <div className="text-xl text-white/60 font-light">
            Практика и подход
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {/* Left: Cases */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl text-white font-light mb-8">Практические кейсы</h2>
            
            <div className="space-y-6">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 p-6 hover:border-blue-400/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-lg text-white font-light">{caseItem.industry}</div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs text-blue-400">
                      Кейс
                    </div>
                  </div>
                  <div className="text-sm text-white/60 mb-3">{caseItem.task}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-px bg-gradient-to-r from-green-400/50 to-transparent" />
                    <div className="text-sm text-green-400">{caseItem.result}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Why Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl text-white font-light mb-8">Наши отличия</h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 hover:border-blue-400/60 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-lg text-white font-light leading-tight">
                      {reason.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Клиентов', value: '50+' },
                { label: 'Успешных внедрений', value: '98%' }
              ].map((stat, i) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-3xl text-white font-light mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
