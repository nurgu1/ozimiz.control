import { motion } from 'motion/react';
import { ShoppingCart, CheckSquare, Package, DollarSign, FileText, Network } from 'lucide-react';

export function Slide10Modules() {
  const modules = [
    { 
      label: 'Продажи', 
      icon: ShoppingCart,
      gradient: 'from-green-500 to-emerald-500',
      description: 'CRM и сделки'
    },
    { 
      label: 'Задачи', 
      icon: CheckSquare,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Планирование'
    },
    { 
      label: 'Склад', 
      icon: Package,
      gradient: 'from-orange-500 to-amber-500',
      description: 'Материалы'
    },
    { 
      label: 'Финансы', 
      icon: DollarSign,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Учет'
    },
    { 
      label: 'Документы', 
      icon: FileText,
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Оборот'
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" 
      />

      <div className="relative z-10 w-full max-w-6xl px-12">

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
            className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/[0.05] border border-blue-500/20"
          >
            <span className="text-blue-400 text-xs tracking-wider uppercase font-medium">
              Модульная платформа
            </span>
          </motion.div>
          
          <h1 className="text-4xl font-semibold text-white tracking-tight mb-2">
            Модули системы
          </h1>
          <p className="text-white/50 font-light">
            Подключаются только нужные блоки
          </p>
        </motion.div>

        {/* Central Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 30px rgba(59, 130, 246, 0.2)',
                '0 0 60px rgba(59, 130, 246, 0.3)',
                '0 0 30px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-6 py-3 rounded-xl bg-black/60 backdrop-blur-xl border border-blue-500/20"
          >
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" />
              <span className="text-xl font-medium text-white">
                Ozimiz<span className="text-blue-400">.Control</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            
            return (
              <motion.div
                key={module.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative group cursor-pointer"
              >
                {/* Connection line to top */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-t from-blue-500/30 to-transparent origin-bottom"
                />

                {/* Glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute -inset-2 bg-gradient-to-br ${module.gradient} blur-2xl rounded-3xl`}
                />

                {/* Card */}
                <div className="relative rounded-2xl bg-black/40 backdrop-blur-sm border border-white/[0.08] hover:border-white/20 transition-all p-5 overflow-hidden">
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${module.gradient}`} />

                  <div className="flex flex-col items-center gap-3">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} opacity-90 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Text */}
                    <div className="text-center">
                      <div className="text-white font-medium mb-1 text-sm">
                        {module.label}
                      </div>
                      <div className="text-white/40 text-xs font-light">
                        {module.description}
                      </div>
                    </div>
                  </div>

                  {/* Pulse effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.1, 0]
                    }}
                    transition={{ 
                      duration: 2.5,
                      delay: 1.5 + index * 0.4,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${module.gradient} rounded-2xl`}
                  />
                </div>

                {/* Active dot */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 2 + index * 0.3,
                    repeat: Infinity
                  }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.08]">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span className="text-white/60 text-sm font-light">
              Гибкая конфигурация под задачи бизнеса
            </span>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}