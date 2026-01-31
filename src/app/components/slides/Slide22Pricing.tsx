import { motion } from 'motion/react';
import { Zap, Building2, Rocket, Check } from 'lucide-react';

export function Slide22Pricing() {
  const packages = [
    {
      name: 'Start',
      tagline: 'Базовый контроль бизнеса',
      icon: Zap,
      features: [
        'Базовые модули ERP',
        'Контроль финансов',
        'Задачи и исполнение',
        'Готовая архитектура'
      ],
      highlight: false
    },
    {
      name: 'Business',
      tagline: 'Полноценное управление бизнесом',
      icon: Building2,
      features: [
        'Все модули Start',
        'Гибкая настройка процессов',
        'Дашборды и аналитика',
        'Интеграции'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      tagline: 'Максимальная гибкость и масштаб',
      icon: Rocket,
      features: [
        'Все модули Business',
        'Кастомизация под процессы',
        'Расширенные интеграции',
        'Высокие нагрузки и масштаб'
      ],
      highlight: false
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
          Выберите пакет
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Тарифные пакеты Ozimiz<span className="text-blue-400">.Control</span>
        </h1>
        <div className="text-xl text-white/60 font-light mb-2">
          Масштабируйтесь вместе с бизнесом
        </div>
        <div className="text-sm text-white/40 font-light">
          Вы выбираете уровень системы, а не просто набор функций
        </div>
      </motion.div>

      {/* Packages */}
      <div className="flex items-center justify-center gap-8 max-w-7xl w-full">
        {packages.map((pkg, index) => {
          const Icon = pkg.icon;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: pkg.highlight ? 1.05 : 1
              }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: pkg.highlight ? 1.08 : 1.03 }}
              className={`relative flex-1 rounded-3xl backdrop-blur-xl border-2 p-8 cursor-pointer ${
                pkg.highlight 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/60'
                  : 'bg-white/5 border-white/20 hover:border-white/40'
              } transition-all`}
            >
              {/* Popular Badge */}
              {pkg.highlight && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-light"
                >
                  Популярный
                </motion.div>
              )}

              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-blue-400 to-purple-500'
                  : 'bg-gradient-to-br from-white/10 to-white/5'
              }`}>
                <Icon className="w-10 h-10 text-white" />
              </div>

              {/* Name & Tagline */}
              <div className="text-center mb-8">
                <h3 className="text-3xl text-white font-light mb-3">{pkg.name}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {pkg.tagline}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 font-light text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-light transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Выбрать {pkg.name}
              </motion.button>

              {/* Scale Indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(index + 1) * 33}%` }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-3xl"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-12 text-white/40 text-sm font-light"
      >
        Дальше → какой эффект это даёт бизнесу
      </motion.div>
    </div>
  );
}
