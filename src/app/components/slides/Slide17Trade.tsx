import { motion } from 'motion/react';
import { Users, ShoppingCart, Package, TrendingUp, ArrowUpRight, Sparkles, BarChart3, Store } from 'lucide-react';
import { useState } from 'react';

export function Slide17Trade() {
  const [hoveredStage, setHoveredStage] = useState(null);

  const flow = [
    { 
      label: 'Клиенты', 
      icon: Users,
      value: '1,247',
      subtitle: 'Активных',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
    },
    { 
      label: 'Заказы', 
      icon: ShoppingCart,
      value: '145',
      subtitle: 'За неделю',
      color: 'from-purple-500 to-fuchsia-500',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80'
    },
    { 
      label: 'Склад', 
      icon: Package,
      value: '₸2.1М',
      subtitle: 'Товаров',
      color: 'from-orange-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80'
    },
    { 
      label: 'Прибыль', 
      icon: TrendingUp,
      value: '₸847К',
      subtitle: 'За месяц',
      color: 'from-emerald-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      highlight: true
    }
  ];

  const keyMetrics = [
    { label: 'Средний чек', value: '₸5,847', trend: '+18%' },
    { label: 'Конверсия', value: '23.4%', trend: '+5.2%' },
    { label: 'Повторные покупки', value: '67%', trend: '+12%' }
  ];

  const features = [
    { icon: Store, label: 'CRM + Продажи', description: 'Полный цикл' },
    { icon: Package, label: 'Управление складом', description: 'В реальном времени' },
    { icon: BarChart3, label: 'Маржинальность', description: 'Расчет прибыли' }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center">
      
      {/* Premium Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Animated gradients */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-600 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px]"
        />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm mb-4"
          >
            <Store className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-white/30">Отрасль</span>
            <span className="text-white/20">/</span>
            <span className="text-white/50">Торговля и сервис</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/20"
            >
              <span className="text-emerald-400 text-xs">Онлайн</span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <div className="flex items-end justify-between">
            <div>
              <motion.h1 
                className="text-6xl font-semibold text-white tracking-tight mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Торговля
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent"
                >
                  и сервис
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-lg text-white/50 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Продажи, склад, маржа — всё под контролем
              </motion.p>
            </div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6"
            >
              {keyMetrics.map((metric, i) => (
                <div key={metric.label} className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="text-2xl font-semibold text-white">{metric.value}</span>
                    <span className="text-xs text-emerald-400 font-medium">{metric.trend}</span>
                  </div>
                  <div className="text-xs text-white/40">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Flow Cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {flow.map((stage, index) => {
            const Icon = stage.icon;
            const isHovered = hoveredStage === index;
            const isHighlight = stage.highlight;
            
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.15, 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredStage(index)}
                onHoverEnd={() => setHoveredStage(null)}
                className="relative group cursor-pointer"
              >
                <div className={`relative h-[280px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border transition-all duration-300 ${
                  isHighlight 
                    ? 'border-emerald-500/40' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={stage.image}
                      alt={stage.label}
                      className="w-full h-full object-cover"
                      animate={{ scale: isHovered ? 1.05 : 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                    
                    {/* Color Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stage.color} mix-blend-overlay`}
                      animate={{ opacity: isHovered ? 0.4 : 0.25 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    
                    {/* Top - Icon */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${stage.color} shadow-xl`}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </motion.div>
                      
                      {isHighlight && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5, type: "spring" }}
                          className="px-2 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40"
                        >
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                        </motion.div>
                      )}
                    </div>

                    {/* Bottom - Info */}
                    <div className="space-y-2">
                      <div>
                        <motion.div 
                          className="text-4xl font-bold text-white mb-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                        >
                          {stage.value}
                        </motion.div>
                        <div className="text-white/60 text-xs mb-2">{stage.subtitle}</div>
                      </div>
                      
                      <div className="text-white font-medium text-lg">{stage.label}</div>
                      
                      {/* Connection Arrow */}
                      {index < flow.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0.5, x: 0 }}
                          transition={{ delay: 1.8 + index * 0.1 }}
                          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                        >
                          <ArrowUpRight className="w-6 h-6 text-white rotate-90" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Highlight Glow */}
                  {isHighlight && (
                    <motion.div
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-green-600 blur-2xl -z-10"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Profit Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-8 mb-6"
        >
          <div className="flex items-center justify-between">
            {/* Left - Main stat */}
            <div className="flex items-center gap-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600"
              >
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={2} />
              </motion.div>
              
              <div>
                <div className="text-white/50 text-sm mb-2">Чистая прибыль за месяц</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-white">₸847К</span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30"
                  >
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">23%</span>
                  </motion.div>
                </div>
                <div className="text-white/40 text-sm mt-1">к прошлому месяцу</div>
              </div>
            </div>

            {/* Right - Features */}
            <div className="flex gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all min-w-[140px]"
                  >
                    <Icon className="w-6 h-6 text-emerald-400 mb-2" strokeWidth={1.5} />
                    <div className="text-white font-medium text-sm mb-0.5">{feature.label}</div>
                    <div className="text-white/40 text-xs">{feature.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="text-center"
        >
          <p className="text-white/30 text-sm font-light">
            Автоматизация продаж • Контроль склада • Аналитика прибыли
          </p>
        </motion.div>

      </div>
    </div>
  );
}