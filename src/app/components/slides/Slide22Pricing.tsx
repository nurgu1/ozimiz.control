import { motion } from 'motion/react';
import { Zap, Building2, Rocket, Check, Star, TrendingUp, Award } from 'lucide-react';

export function Slide22Pricing() {
  const packages = [
    {
      name: 'Start',
      tagline: 'Начните контролировать бизнес',
      subtitle: 'Для растущих компаний',
      icon: Zap,
      features: [
        'Базовые модули ERP',
        'Контроль финансов',
        'Задачи и исполнение',
        'Готовая архитектура'
      ],
      badge: 'Быстрый старт',
      gradient: 'from-green-500 to-emerald-500',
      highlight: false
    },
    {
      name: 'Business',
      tagline: 'Управляйте как профи',
      subtitle: 'Для амбициозного бизнеса',
      icon: Building2,
      features: [
        'Все модули Start',
        'Гибкая настройка процессов',
        'Дашборды и аналитика',
        'Интеграции и API'
      ],
      badge: '✨ Хит продаж',
      gradient: 'from-blue-500 to-purple-500',
      highlight: true,
      savings: 'Окупается за 3 месяца'
    },
    {
      name: 'Enterprise',
      tagline: 'Безграничные возможности',
      subtitle: 'Для корпораций',
      icon: Rocket,
      features: [
        'Все модули Business',
        'Полная кастомизация',
        'Расширенные интеграции',
        'Высокие нагрузки'
      ],
      badge: 'Максимум',
      gradient: 'from-orange-500 to-red-500',
      highlight: false
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Dynamic glows */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [-100, 100, -100]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.06, 0.12, 0.06],
          x: [100, -100, 100]
        }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px]"
      />

      <div className="relative z-10 w-full max-w-7xl px-12">

        {/* Header - More compelling */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs tracking-wider uppercase font-medium">
              Инвестиция в успех
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-semibold text-white tracking-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Выберите ваш путь к росту
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/70 font-light mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ozimiz<span className="text-blue-400">.Control</span> — система, которая растет с вами
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-6 text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>ROI 300%+ за год</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>50+ довольных клиентов</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Packages - More dramatic */}
        <div className="grid grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: pkg.highlight ? 1.08 : 1
                }}
                transition={{ 
                  delay: 0.6 + index * 0.15, 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: pkg.highlight ? 1.12 : 1.05,
                  y: -8
                }}
                className={`relative rounded-3xl backdrop-blur-xl p-8 cursor-pointer transition-all ${
                  pkg.highlight 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/60 shadow-2xl shadow-blue-500/20'
                    : 'bg-black/40 border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.15, duration: 0.5, type: "spring" }}
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium shadow-lg ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-black/60 border border-white/20 text-white/80'
                  }`}
                >
                  {pkg.badge}
                </motion.div>

                {/* Glow effect for highlight */}
                {pkg.highlight && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl rounded-3xl"
                  />
                )}

                <div className="relative">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                      pkg.highlight
                        ? `bg-gradient-to-br ${pkg.gradient}`
                        : 'bg-white/5'
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Name & Tagline */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl text-white font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-white/90 font-medium mb-1">
                      {pkg.tagline}
                    </p>
                    <p className="text-white/50 text-xs font-light">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Savings badge for highlight */}
                  {pkg.savings && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="mb-5 text-center"
                    >
                      <div className="inline-block px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                        <span className="text-green-400 text-sm font-medium">💰 {pkg.savings}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 1 + index * 0.15 + i * 0.08, 
                          duration: 0.5 
                        }}
                        className="flex items-start gap-2.5"
                      >
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          pkg.highlight ? 'text-green-400' : 'text-green-400/70'
                        }`} />
                        <span className={`text-sm font-light leading-relaxed ${
                          pkg.highlight ? 'text-white/90' : 'text-white/70'
                        }`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button - More compelling */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 rounded-xl font-medium transition-all shadow-lg ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {pkg.highlight ? 'Начать прямо сейчас' : `Выбрать ${pkg.name}`}
                  </motion.button>

                  {/* Progress indicator */}
                  {!pkg.highlight && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.8 + index * 0.2, duration: 0.8 }}
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pkg.gradient} rounded-b-3xl origin-left`}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08]">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
            />
            <span className="text-white/70 text-sm font-light">
              Не уверены? <span className="text-blue-400 font-medium">Начните с бесплатной консультации</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}