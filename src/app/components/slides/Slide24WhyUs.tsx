import { motion } from 'motion/react';
import { Award, Zap, Shield, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export function Slide24WhyUs() {
  const cases = [
    { 
      industry: 'Строительство', 
      result: '-24%',
      metric: 'перерасхода',
      color: 'from-orange-500 to-red-500',
      icon: '🏗️'
    },
    { 
      industry: 'Производство', 
      result: '100%',
      metric: 'прозрачность',
      color: 'from-blue-500 to-cyan-500',
      icon: '⚙️'
    },
    { 
      industry: 'Торговля', 
      result: '+18%',
      metric: 'оборачиваемость',
      color: 'from-green-500 to-emerald-500',
      icon: '🛒'
    }
  ];

  const reasons = [
    { icon: Award, text: 'Подход под бизнес' },
    { icon: Zap, text: 'Гибкость процессов' },
    { icon: Shield, text: 'Контроль и прозрачность' },
    { icon: Users, text: 'Партнёрство' }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[150px]"
        />
      </div>

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
            className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10"
          >
            <span className="text-white/60 text-xs tracking-wider uppercase">
              Доверие и результаты
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl font-semibold text-white mb-3 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Почему Ozimiz<span className="text-blue-400">.Control</span>
          </motion.h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          
          {/* Cases - Large Cards */}
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.industry}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.6 + index * 0.15, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute -inset-2 bg-gradient-to-br ${caseItem.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl`}
              />

              {/* Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-8 h-full flex flex-col">
                
                {/* Icon */}
                <motion.div 
                  className="text-5xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.6, type: "spring" }}
                >
                  {caseItem.icon}
                </motion.div>

                {/* Industry */}
                <div className="text-white/60 text-sm font-light mb-2">
                  {caseItem.industry}
                </div>

                {/* Result - Big number */}
                <div className={`text-6xl font-bold bg-gradient-to-br ${caseItem.color} bg-clip-text text-transparent mb-2`}>
                  {caseItem.result}
                </div>

                {/* Metric */}
                <div className="text-white text-lg font-light">
                  {caseItem.metric}
                </div>

                {/* Badge */}
                <div className="mt-auto pt-4">
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-white/60 text-xs">Кейс</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Reasons & Stats */}
        <div className="grid grid-cols-5 gap-4">
          
          {/* Reasons - 4 columns */}
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.text}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2 + index * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 transition-all p-5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-white text-sm font-light leading-tight">
                  {reason.text}
                </div>
              </motion.div>
            );
          })}

          {/* Stats - 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 p-5"
          >
            <div className="flex flex-col h-full justify-center">
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/50 text-xs font-light">Клиентов</div>
              </div>
              <div className="h-px bg-white/10 mb-3" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-white/50 text-xs font-light">Внедрений</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-white/70 text-sm font-light">
              Практика, подход, результаты
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}