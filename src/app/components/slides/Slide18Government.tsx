import { motion } from 'motion/react';
import { Landmark, FolderKanban, DollarSign, Eye, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export function Slide18Government() {
  const [activeTab, setActiveTab] = useState(0);

  const mainModules = [
    { 
      label: 'Проекты', 
      icon: FolderKanban,
      count: 47,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Бюджеты', 
      icon: DollarSign,
      count: '₸2.4млрд',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Контроль', 
      icon: Eye,
      count: 892,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const budgetData = {
    plan: { label: 'Плановый бюджет', value: '₸15.2М', percent: 100 },
    fact: { label: 'Фактическое исполнение', value: '₸14.8М', percent: 97 }
  };

  const keyMetrics = [
    { label: 'Завершенных проектов', value: '128', icon: CheckCircle, change: '+12%' },
    { label: 'В работе', value: '47', icon: Clock, change: '→' },
    { label: 'Исполнение бюджета', value: '97.3%', icon: TrendingUp, change: '+2.1%' }
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-black relative overflow-hidden">
      
      {/* Formal Background - более строгий */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        
        {/* Тонкие линии вместо градиентов */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Минимальное свечение */}
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600 rounded-full blur-[180px]"
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-10 py-10 flex flex-col h-full">
        
        {/* Formal Header - более компактный */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-8"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <Landmark className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-white/30">Квазигоссектор</span>
            <span className="text-white/20">/</span>
            <span className="text-white/50">Управление</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="text-emerald-400 text-xs">Онлайн</span>
            </motion.div>
          </div>

          {/* Title - более формальный стиль */}
          <div className="flex items-end justify-between">
            <div>
              <motion.h1 
                className="text-5xl font-semibold text-white tracking-tight mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Квазигоссектор
              </motion.h1>
              <motion.p
                className="text-lg text-white/50 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Управление проектами, бюджетами и отчетностью
              </motion.p>
            </div>

            {/* Quick stats - horizontal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6"
            >
              {keyMetrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <Icon className="w-4 h-4 text-purple-400" />
                      <span className="text-2xl font-semibold text-white">{metric.value}</span>
                      <span className="text-xs text-emerald-400">{metric.change}</span>
                    </div>
                    <div className="text-xs text-white/40">{metric.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-5 flex-1">
          
          {/* Left: Module Cards - вертикальные */}
          {mainModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all p-6 flex flex-col justify-between">
                  
                  {/* Icon & Label */}
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">{module.label}</h3>
                      <div className="text-3xl font-bold text-white/90">{module.count}</div>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    className="h-1 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full mt-6"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom: Budget Panel - широкая панель */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Landmark className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Исполнение бюджета</h2>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Полная прозрачность</span>
            </div>
          </div>

          {/* Budget Comparison */}
          <div className="grid grid-cols-2 gap-8">
            {/* Plan */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">{budgetData.plan.label}</span>
                <span className="text-white font-semibold text-xl">{budgetData.plan.value}</span>
              </div>
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${budgetData.plan.percent}%` }}
                  transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-white/20 rounded-full"
                />
              </div>
            </div>

            {/* Fact */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">{budgetData.fact.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-semibold text-xl">{budgetData.fact.value}</span>
                  <span className="text-purple-400 text-sm font-medium">{budgetData.fact.percent}%</span>
                </div>
              </div>
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${budgetData.fact.percent}%` }}
                  transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                >
                  {/* Shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center"
          >
            {[
              'Проектный учет',
              'Контроль бюджетов',
              'Аудит и отчетность'
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + i * 0.1 }}
                className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <span className="text-white/70 text-sm font-light">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}