import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users, Zap } from 'lucide-react';

export function Slide03Reveal() {
  const [step, setStep] = useState(0);

  // Сценарий анимации
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Жестко задаем позиции (x, y) относительно центра (0,0)
  // Y отрицательный = вверх, Y положительный = вниз
  const zones = [
    { 
      id: 'process',
      icon: Activity, 
      label: 'Процессы', 
      color: 'from-blue-400 to-cyan-600', 
      border: 'border-blue-500/30', 
      shadow: 'shadow-blue-500/20',
      x: 0, 
      y: -220 // ВВЕРХУ
    },
    { 
      id: 'finance',
      icon: DollarSign, 
      label: 'Финансы', 
      color: 'from-emerald-400 to-green-600', 
      border: 'border-emerald-500/30', 
      shadow: 'shadow-emerald-500/20',
      x: -200, 
      y: 150 // СЛЕВА СНИЗУ
    },
    { 
      id: 'people',
      icon: Users, 
      label: 'Люди', 
      color: 'from-purple-400 to-pink-600', 
      border: 'border-purple-500/30', 
      shadow: 'shadow-purple-500/20',
      x: 200, 
      y: 150 // СПРАВА СНИЗУ
    }
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

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* 1. "Новый уровень" (Intro) */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white/60 text-sm tracking-[0.4em] uppercase font-medium">Новый уровень</span>
            </div>
          </motion.div>
        )}

        {/* 2. LOGO REVEAL */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-center mb-16 relative w-full"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Ozimiz<span className="text-blue-500 font-normal">.Control</span>
            </h1>

            <div className="flex gap-4 md:gap-8 justify-center">
              {['Единый контур', 'Гибкость', 'Контроль'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="px-5 py-2 rounded-xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-md"
                >
                  <span className="text-blue-100 text-base md:text-lg font-light">{word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. STATIC SYSTEM FORMATION */}
        {step >= 3 && (
          <div className="relative w-[600px] h-[400px] flex items-center justify-center mt-4">
            
            {/* Central Hub Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="absolute z-20 w-28 h-28 rounded-3xl bg-black border border-blue-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.2)]"
            >
              <Zap className="w-12 h-12 text-blue-500 fill-blue-500/20" />
            </motion.div>

            {/* Zones */}
            {zones.map((zone, index) => {
              const Icon = zone.icon;
              return (
                <motion.div
                  key={zone.label}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x: zone.x, y: zone.y, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, type: "spring" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // Центрируем элемент перед смещением
                >
                  {/* Connection Line to Center (Draws backwards from item to center) */}
                  <motion.svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
                    width="600"
                    height="600"
                    style={{ overflow: 'visible' }}
                  >
                    <motion.line
                      x1="0"
                      y1="0" // From center of card
                      x2={-zone.x} // To center of hub (inverted relative to card)
                      y2={-zone.y}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </motion.svg>

                  {/* Card */}
                  <div className={`w-28 h-28 rounded-2xl bg-[#111] border ${zone.border} ${zone.shadow} flex flex-col items-center justify-center gap-3`}>
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
    </div>
  );
}
