import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users, Target, TrendingUp, CheckCircle2, Award, Network } from 'lucide-react';

export function Slide04Control() {
  const [phase, setPhase] = useState(0);

  // Click handler to advance phases
  const handleClick = () => {
    if (phase < 2) {
      setPhase(prev => prev + 1);
    }
  };

  const pillars = [
    {
      title: 'Финансы',
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-500',
      items: ['Доходы', 'Расходы', 'Прибыль']
    },
    {
      title: 'Процессы',
      icon: Activity,
      gradient: 'from-blue-500 to-cyan-500',
      items: ['План', 'Исполнение', 'Контроль']
    },
    {
      title: 'Люди',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      items: ['Роли', 'Ответственность', 'KPI']
    }
  ];

  const subIcons = {
    'Доходы': TrendingUp,
    'Расходы': TrendingUp,
    'Прибыль': DollarSign,
    'План': CheckCircle2,
    'Исполнение': Activity,
    'Контроль': CheckCircle2,
    'Роли': Users,
    'Ответственность': Award,
    'KPI': TrendingUp
  };

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      
      {/* Persistent Logo at top - always visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-blue-400" />
            <span className="text-xl font-medium text-white">
              Ozimiz<span className="text-blue-400">.Control</span>
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Click indicator */}
      {phase < 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="text-white/50 text-sm font-light">
              {phase === 0 ? 'Нажмите чтобы увидеть решение' : 'Нажмите чтобы увидеть столпы'}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" 
      />

      {/* Converging lines - Phase 0 */}
      {phase === 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;
            
            return (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
              />
            );
          })}
        </svg>
      )}

      {/* PHASE 0 & 1: Central transformation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        
        {/* Central Logo - morphs from circle to pill */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            width: phase >= 1 ? '240px' : '120px',
            height: phase >= 1 ? '60px' : '120px',
            borderRadius: phase >= 1 ? '9999px' : '50%',
            y: phase >= 2 ? -160 : 0
          }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            y: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: phase >= 2 ? 0.2 : 0 }
          }}
          className="relative flex items-center justify-center mb-12"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(59, 130, 246, 0.2)',
                '0 0 60px rgba(59, 130, 246, 0.4)',
                '0 0 30px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-400/30"
            style={{ borderRadius: 'inherit' }}
          />

          {/* Target icon - Phase 0 */}
          <motion.div
            animate={{ 
              opacity: phase >= 1 ? 0 : 1,
              scale: phase >= 1 ? 0.5 : 1
            }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            <Target className="w-14 h-14 text-blue-400" />
          </motion.div>

          {/* Logo text - Phase 1+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: phase >= 1 ? 1 : 0,
              scale: phase >= 1 ? 1 : 0.5
            }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg font-medium tracking-tight px-4"
          >
            <span className="text-white">Ozimiz</span>
            <span className="text-blue-400">.Control</span>
          </motion.div>
        </motion.div>

        {/* Main heading - Phase 0 */}
        <motion.div
          animate={{ 
            opacity: phase >= 1 ? 0 : 1,
            y: phase >= 1 ? -30 : 0,
            filter: phase >= 1 ? 'blur(10px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl font-semibold tracking-tight leading-tight mb-6">
            Бизнес должен быть<br/>под контролем
          </h1>

          <p className="text-xl text-white/60 font-light">
            Иначе им управляют обстоятельства
          </p>
        </motion.div>
      </div>

      {/* PHASE 2: Three pillars - Apple style */}
      {phase >= 2 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          
          <div className="flex gap-8 mt-24">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const startDelay = 0.5 + (index * 0.2);

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ scale: 0, opacity: 0, y: 60 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ 
                    delay: startDelay, 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group cursor-pointer"
                >
                  {/* Subtle glow */}
                  <motion.div
                    animate={{ 
                      opacity: [0.1, 0.2, 0.1],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                    className={`absolute -inset-4 bg-gradient-to-br ${pillar.gradient} blur-3xl rounded-3xl`}
                  />

                  {/* Connection line - thinner */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100px' }}
                    transition={{ delay: startDelay - 0.2, duration: 0.6 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-blue-400/30 to-transparent"
                  />

                  {/* Card - Apple glassmorphism */}
                  <div className="w-72 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/[0.08] hover:border-white/20 transition-all relative overflow-hidden shadow-2xl">
                    
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.gradient}`} />
                    
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className={`p-3 rounded-2xl bg-gradient-to-br ${pillar.gradient} opacity-90 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="text-2xl text-white font-semibold tracking-tight">{pillar.title}</h3>
                      </div>

                      {/* Items */}
                      <div className="space-y-3 pl-1">
                        {pillar.items.map((item, itemIndex) => {
                          const SubIcon = subIcons[item] || TrendingUp;
                          return (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: startDelay + 0.5 + (itemIndex * 0.12), 
                                duration: 0.5 
                              }}
                              className="flex items-center gap-3 text-white/80 text-base group/item"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${pillar.gradient} opacity-20 flex items-center justify-center`}>
                                <SubIcon className="w-3.5 h-3.5 text-white/60" />
                              </div>
                              <span className="font-light">{item}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom line indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: startDelay + 1, duration: 0.8 }}
                      className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${pillar.gradient} origin-left`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

// Slide08 with persistent logo and Apple design
export function Slide08WhatIs() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Persistent Logo at top - matches Slide04 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-blue-400" />
            <span className="text-xl font-medium text-white">
              Ozimiz<span className="text-blue-400">.Control</span>
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Background - matches Slide04 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" 
      />

      <div className="max-w-6xl w-full grid grid-cols-2 gap-16 items-center relative z-10 px-12">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block"
          >
            <div className="px-3 py-1.5 rounded-full bg-blue-500/[0.08] border border-blue-500/20 backdrop-blur-sm">
              <span className="text-blue-400 text-xs tracking-wider uppercase font-medium">
                О системе
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl font-semibold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Что такое<br/>
            Ozimiz<span className="text-blue-400">.Control</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Отечественная ERP-система для комплексной автоматизации строительных и производственных предприятий.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Объединяет управление складами, продажами, производством, финансами и персоналом в единой платформе.
            </p>
          </motion.div>

          {/* Properties - enhanced Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 pt-2"
          >
            {[
              { label: 'Контроль', gradient: 'from-green-500 to-emerald-500' },
              { label: 'Гибкость', gradient: 'from-blue-500 to-cyan-500' },
              { label: 'Масштаб', gradient: 'from-purple-500 to-pink-500' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative px-5 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 cursor-pointer overflow-hidden group transition-all"
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient}`} />
                
                {/* Glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.08 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />
                
                <span className="relative text-white text-sm font-light">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Interface preview - enhanced */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Glow - more subtle */}
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl"
          />
          
          {/* Screenshot with better border */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/[0.08] group-hover:border-white/20 bg-black/60 backdrop-blur-xl transition-all shadow-2xl">
            <img 
              src="/uploads/1770567378215_image.png"
              alt="Ozimiz.Control Interface"
              className="w-full h-auto"
            />
          </div>

          {/* Decorative rings - more subtle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border border-blue-400/[0.06] rounded-full"
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-40 h-40 border border-purple-400/[0.06] rounded-full"
          />
        </motion.div>

      </div>
    </div>
  );
}