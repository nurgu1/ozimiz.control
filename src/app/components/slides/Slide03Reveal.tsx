import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users, Zap } from 'lucide-react';

export function Slide03Reveal() {
  const [showBrand, setShowBrand] = useState(false);
  const [showConnections, setShowConnections] = useState(false);

  useEffect(() => {
    const brandTimer = setTimeout(() => setShowBrand(true), 500);
    const connectTimer = setTimeout(() => setShowConnections(true), 1500);
    
    return () => {
      clearTimeout(brandTimer);
      clearTimeout(connectTimer);
    };
  }, []);

  const zones = [
    { icon: DollarSign, label: 'Финансы', color: 'from-emerald-400 to-green-600', border: 'border-emerald-500/30', shadow: 'shadow-emerald-500/20' },
    { icon: Activity, label: 'Процессы', color: 'from-blue-400 to-cyan-600', border: 'border-blue-500/30', shadow: 'shadow-blue-500/20' },
    { icon: Users, label: 'Люди', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/30', shadow: 'shadow-purple-500/20' }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#0a0a0a] text-white overflow-hidden relative selection:bg-blue-500/30">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* 1. HEADER SECTION (Top 20% of screen) */}
      <div className="relative z-20 w-full pt-12 pb-4 flex flex-col items-center justify-center min-h-[160px]">
        {showBrand && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
             <motion.div 
               className="inline-block px-3 py-1 mb-4 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm"
               initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
             >
              <span className="text-blue-400/80 text-xs tracking-[0.3em] uppercase font-medium">Новый уровень</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">
              Ozimiz<span className="text-blue-500 font-normal">.Control</span>
            </h1>
            
            {/* Key Words Pills */}
            <div className="flex gap-4 justify-center mt-2">
              {['Единый контур', 'Гибкость', 'Контроль'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 backdrop-blur-md"
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* 2. DIAGRAM SECTION (Center/Bottom 80%) */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 pb-10">
        
        {/* Chaos Particles (Disappearing) */}
        {!showConnections && (
           <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 800,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: [0, 0.5, 0],
                  scale: [1, 0]
                }}
                transition={{ duration: 1.5, ease: "anticipate" }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full blur-[1px]"
              />
            ))}
           </div>
        )}

        {showConnections && (
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            
            {/* Central Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1.2 }}
              className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-[#1a1a1
