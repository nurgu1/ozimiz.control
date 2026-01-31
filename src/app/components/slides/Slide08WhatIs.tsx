import { motion } from 'motion/react';
import { Target, Zap, TrendingUp } from 'lucide-react';

export function Slide08WhatIs() {
  const properties = [
    { label: 'Контроль', icon: Target, color: 'from-blue-400 to-cyan-500' },
    { label: 'Гибкость', icon: Zap, color: 'from-purple-400 to-pink-500' },
    { label: 'Масштабируемость', icon: TrendingUp, color: 'from-green-400 to-emerald-500' }
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
          Позиционирование
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-8">
          Что такое Ozimiz<span className="text-blue-400">.Control</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl mx-auto text-2xl text-white/70 font-light leading-relaxed"
        >
          ERP-система для управления бизнес-процессами,
          <br />
          финансами и ответственностью в едином контуре
        </motion.div>
      </motion.div>

      {/* Central Block */}
      <div className="relative mb-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(59, 130, 246, 0.2)',
                '0 0 100px rgba(59, 130, 246, 0.4)',
                '0 0 60px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-16 py-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-400/40"
          >
            <div className="text-7xl font-thin text-white text-center">
              Ozimiz<span className="text-blue-400">.Control</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Properties */}
      <div className="flex items-center justify-center gap-12">
        {properties.map((prop, index) => {
          const Icon = prop.icon;
          const angle = (index * 120) * (Math.PI / 180);
          
          return (
            <motion.div
              key={prop.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
            >
              <div className={`w-56 h-56 rounded-3xl bg-gradient-to-br ${prop.color} p-0.5`}>
                <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl text-white font-light">
                    {prop.label}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {properties.map((_, index) => {
          const angle = (index * 120) * (Math.PI / 180);
          const startX = 50;
          const startY = 50;
          const endX = 50 + Math.cos(angle) * 15;
          const endY = 50 + Math.sin(angle) * 15;
          
          return (
            <motion.line
              key={index}
              x1={`${startX}%`}
              y1={`${startY}%`}
              x2={`${endX}%`}
              y2={`${endY}%`}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
            />
          );
        })}
      </svg>
    </div>
  );
}
