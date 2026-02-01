import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users, Zap } from 'lucide-react';

export function Slide03Reveal() {
  const [step, setStep] = useState(0);

  // Сценарий анимации (как в кино)
  useEffect(() => {
    // 1. Появляется "Новый уровень"
    const timer1 = setTimeout(() => setStep(1), 500);
    // 2. Появляется Ozimiz.Control
    const timer2 = setTimeout(() => setStep(2), 2000);
    // 3. Появляются карточки вокруг
    const timer3 = setTimeout(() => setStep(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const zones = [
    { icon: DollarSign, label: 'Финансы', color: 'from-emerald-400 to-green-600', border: 'border-emerald-500/30', shadow: 'shadow-emerald-500/20' },
    { icon: Activity, label: 'Процессы', color: 'from-blue-400 to-cyan-600', border: 'border-blue-500/30', shadow: 'shadow-blue-500/20' },
    { icon: Users, label: 'Люди', color: 'from-purple-400 to-pink-600', border: 'border-purple-500/30', shadow: 'shadow-purple-500/20' }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
         <motion.div 
           animate={{ opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 5, repeat: Infinity }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full" 
         />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 1. "Новый уровень" (Intro) */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white/60 text-sm tracking-[0.4em] uppercase font-medium">Новый уровень</span>
            </div>
          </motion.div>
        )}

        {/* 2. LOGO REVEAL */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Ozimiz<span className="text-blue-500 font-normal">.Control</span>
            </h1>

            {/* 3 Keywords - appear one by one */}
            <div className="flex gap-6 justify-center">
              {['Единый контур', 'Гибкость', 'Контроль'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1.1 }} // Scale up slightly
                  transition={{ delay: 0.5 + index * 0.3, duration: 0.6, type: "spring" }}
                  className="px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-lg shadow-blue-900/20"
                >
                  <span className="text-blue-100 text-lg font-light">{word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. STATIC SYSTEM FORMATION (No Rotation) */}
        {step >= 3 && (
          <div className="relative w-[600px] h-[400px] flex items-center justify-center mt-8">
            
            {/* Central Hub Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="absolute z-20 w-32 h-32 rounded-3xl bg-black border border-blue-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)]"
            >
              <Zap className="w-14 h-14 text-blue-500 fill-blue-500/20" />
            </motion.div>

            {/* Zones - Appearing around center */}
            {zones.map((zone, index) => {
              const Icon = zone.icon;
              // Positioning: Left-Bottom, Top, Right-Bottom triangle
              const angles = [210, -90, 30]; // Degrees
              const angleRad = angles[index] * (Math.PI / 180);
              const radius = 240;
              
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={zone.label}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, type: "spring" }}
                  className="absolute"
                >
                  {/* Connection Line to Center */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.5, duration: 1 }}
                     className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent origin-left -z-10"
                     style={{ 
                       width: radius, 
                       transform: `translate(-50%, -50%) rotate(${angles[index] + 180}deg) translate(${radius/2}px, 0)` 
                     }}
                  />

                  {/* Card */}
                  <div className={`relative w-28 h-28 rounded-2xl bg-[#111] border ${zone.border} ${zone.shadow} flex flex-col items-center justify-center gap-3 -translate-x-1/2 -translate-y-1/2`}>
                    <div className={`p-3 rounded-full bg-gradient-to-br ${zone.color} bg-opacity-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">{zone.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 text-white text-sm font-mono tracking-widest uppercase"
      >
        Система стабилизирована
      </motion.div>

    </div>
  );
}
