import { motion } from 'motion/react';
import { Factory, Sparkles, Activity, Gauge, Users, Shield, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export function Slide16Manufacturing() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { 
      label: 'Эффективность производства', 
      value: '96.8', 
      unit: '%', 
      icon: Gauge,
      subtitle: 'Выше плана',
      color: 'from-emerald-400 via-teal-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    { 
      label: 'Активных линий', 
      value: '24', 
      unit: '/28', 
      icon: Activity,
      subtitle: 'Пиковая нагрузка',
      color: 'from-blue-400 via-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80'
    },
    { 
      label: 'Качество', 
      value: '99.2', 
      unit: '%', 
      icon: Shield,
      subtitle: 'Ноль дефектов сегодня',
      color: 'from-violet-400 via-purple-500 to-fuchsia-600',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
    }
  ];

  const productionPhases = [
    { 
      name: 'Прием материалов', 
      progress: 100, 
      status: 'complete',
      time: '2ч 15м',
      color: 'bg-emerald-500',
      glowColor: 'shadow-emerald-500/50'
    },
    { 
      name: 'Сборка', 
      progress: 67, 
      status: 'active',
      time: 'Осталось 4ч 30м',
      color: 'bg-blue-500',
      glowColor: 'shadow-blue-500/50'
    },
    { 
      name: 'Контроль качества', 
      progress: 34, 
      status: 'active',
      time: 'Осталось 6ч 45м',
      color: 'bg-purple-500',
      glowColor: 'shadow-purple-500/50'
    },
    { 
      name: 'Упаковка', 
      progress: 0, 
      status: 'pending',
      time: 'Начало в 14:00',
      color: 'bg-gray-500',
      glowColor: 'shadow-gray-500/50'
    }
  ];

  const liveStats = [
    { label: 'Единиц/час', value: '847', trend: '+12%' },
    { label: 'Простой', value: '0.4ч', trend: '-28%' },
    { label: 'Энергия', value: '2.1МВт', trend: '-8%' }
  ];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      
      {/* Sophisticated Background */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Animated mesh gradient */}
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-12 space-y-8">
        
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-2 text-sm"
          >
            <span className="text-white/40">Панель управления</span>
            <span className="text-white/20">/</span>
            <span className="text-white/60">Производство</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium"
            >
              Онлайн
            </motion.div>
          </motion.div>

          {/* Main title */}
          <div className="space-y-3">
            <motion.h1 
              className="text-6xl md:text-7xl font-semibold text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Производство
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                под контролем
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-white/50 font-light max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Контроль производства в режиме реального времени. 
              Производительность, качество и эффективность в одном месте.
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Metrics with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = activeMetric === index;
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.7 + index * 0.15, 
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setActiveMetric(index)}
                className="group cursor-pointer"
              >
                <div className="relative h-[340px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10">
                  
                  {/* Image background */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={metric.image}
                      alt={metric.label}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: isActive ? 1 : 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                    
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${metric.color} mix-blend-overlay`}
                      animate={{ opacity: isActive ? 0.4 : 0.2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    
                    {/* Top section */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        animate={{ scale: isActive ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-2xl bg-gradient-to-br ${metric.color} shadow-2xl`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
                      >
                        <span className="text-white/80 text-xs font-medium">{metric.subtitle}</span>
                      </motion.div>
                    </div>

                    {/* Bottom section */}
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <motion.span 
                          className="text-6xl font-bold text-white tracking-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                        >
                          {metric.value}
                        </motion.span>
                        <span className="text-3xl text-white/60 font-light">{metric.unit}</span>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 + index * 0.1 }}
                      >
                        <p className="text-white/70 text-base font-medium">{metric.label}</p>
                      </motion.div>

                      {/* Hover indicator */}
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0, 
                          width: isActive ? '100%' : 0 
                        }}
                        className="h-1 bg-gradient-to-r from-white/80 to-transparent rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Production Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/10 p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-white">Производственный конвейер</h2>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="p-2 rounded-xl bg-white/5"
                >
                  <Factory className="w-5 h-5 text-blue-400" />
                </motion.div>
              </div>
              <p className="text-white/50 font-light">Контроль всех этапов</p>
            </div>

            {/* Live stats mini cards */}
            <div className="flex gap-3">
              {liveStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 min-w-[100px]"
                >
                  <div className="text-xs text-white/50 mb-1">{stat.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-white">{stat.value}</span>
                    <span className="text-xs text-emerald-400">{stat.trend}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Production phases */}
          <div className="space-y-6">
            {productionPhases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.12, duration: 0.7 }}
                className="group"
              >
                {/* Phase header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {/* Status indicator */}
                    <motion.div
                      animate={{ 
                        scale: phase.status === 'active' ? [1, 1.3, 1] : 1,
                        opacity: phase.status === 'active' ? [0.7, 1, 0.7] : phase.status === 'complete' ? 1 : 0.4
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-3 h-3 rounded-full ${phase.color} ${phase.glowColor} shadow-lg`}
                    />
                    
                    <div>
                      <h3 className="text-white font-medium text-lg">{phase.name}</h3>
                      <p className="text-white/50 text-sm">{phase.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-white/70 font-medium text-lg">{phase.progress}%</span>
                    {phase.status === 'active' && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Play className="w-5 h-5 text-blue-400" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Progress bar with Apple-style animation */}
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  {/* Background glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase.status === 'active' ? 0.5 : 0 }}
                    className={`absolute inset-0 ${phase.color} blur-xl`}
                  />
                  
                  {/* Progress fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${phase.progress}%` }}
                    transition={{ 
                      delay: 2 + index * 0.12, 
                      duration: 1.5, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className={`relative h-full ${phase.color} rounded-full overflow-hidden`}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        ease: "easeInOut" 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{ width: '50%' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.8)]"
              />
              <span className="text-white/70 font-light">Все системы работают штатно</span>
            </div>

            <button className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
              <span className="text-white/80 text-sm font-medium">Подробнее</span>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="text-center py-6"
        >
          <p className="text-white/30 text-sm font-light">
            Интеллектуальная автоматизация • Мониторинг в реальном времени • Предиктивная аналитика
          </p>
        </motion.div>

      </div>
    </div>
  );
}