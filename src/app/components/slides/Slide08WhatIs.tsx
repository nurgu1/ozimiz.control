import { motion } from 'motion/react';

export function Slide08WhatIs() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Background Glow */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full" 
      />

      <div className="max-w-7xl w-full grid grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm"
          >
            <span className="text-blue-400/80 text-sm tracking-[0.3em] uppercase font-medium">О НАС</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl font-light text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Что такое <br/>
            Ozimiz<span className="text-blue-400 font-normal">.Control</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Отечественная ERP-система для комплексной автоматизации строительных и производственных предприятий.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Она объединяет управление складами, продажами, производством, финансами, клиентами и персоналом в единой цифровой платформе.
            </p>
          </motion.div>

          {/* Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {['Контроль', 'Гибкость', 'Масштабируемость'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-white/80 text-sm font-light">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Interface Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl rounded-3xl"
          />
          
          {/* Screenshot container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-[0_0_60px_rgba(59,130,246,0.3)] bg-black/40 backdrop-blur-xl">
            <img 
              src="src/screenshots/mobile.svg" 
              alt="Ozimiz.Control Interface"
              className="w-full h-auto"
            />
          </div>

          {/* Corner accents */}
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border-2 border-blue-400/20 rounded-full"
          />
          
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-purple-400/20 rounded-full"
          />
        </motion.div>

      </div>
    </div>
  );
}