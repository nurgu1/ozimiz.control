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
              className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-black border border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl animate-pulse" />
              <Zap className="w-16 h-16 text-blue-500 fill-blue-500/20" />
            </motion.div>

            {/* Orbiting Zones */}
            {zones.map((zone, index) => {
              const Icon = zone.icon;
              // Rotating starting angle so top isn't directly blocked if screen is short
              // -90 is top. We use -90 (Top), 30 (Right Bottom), 150 (Left Bottom)
              const angleDeg = -90 + (index * 120); 
              const angleRad = angleDeg * (Math.PI / 180);
              const radius = 220; // Compact radius to fit laptops
              
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={zone.label}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                  {/* The Wrapper that positions the card but counter-rotates to keep it upright */}
                  <motion.div
                     initial={{ x: 0, y: 0, opacity: 0 }}
                     animate={{ x, y, opacity: 1 }}
                     transition={{ delay: 0.2 + index * 0.2, duration: 0.8, type: "spring" }}
                     className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    
                    {/* Connection Line */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      style={{ 
                        width: radius, 
                        transformOrigin: "right center",
                        rotate: `${angleDeg + 180}deg`,
                        position: 'absolute',
                        right: '0',
                        top: '50%'
                      }}
                      className="h-[1px] bg-gradient-to-l from-blue-500/30 to-transparent pointer-events-none -z-10"
                    />

                    {/* Card */}
                    <motion.div
                       whileHover={{ scale: 1.1 }}
                       className={`relative w-28 h-28 rounded-2xl bg-[#111] backdrop-blur-xl border ${zone.border} ${zone.shadow} flex flex-col items-center justify-center gap-3 cursor-pointer group`}
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-br ${zone.color} bg-opacity-10`}>
                        <Icon className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                      <span className="text-white text-xs font-medium tracking-wide">{zone.label}</span>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${zone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    </motion.div>

                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit Rings (Decorative) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              className="absolute inset-0 rounded-full border border-white/5 border-dashed w-[440px] h-[440px] m-auto pointer-events-none animate-[spin_60s_linear_infinite]"
            />
          </div>
        )}
      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-white/30 text-sm font-light tracking-widest uppercase"
      >
        Из хаоса — в контроль
      </motion.div>

    </div>
  );
}
