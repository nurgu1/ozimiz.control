import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users } from 'lucide-react';

export function Slide03Reveal() {
  const [showBrand, setShowBrand] = useState(false);
  const [showConnections, setShowConnections] = useState(false);

  useEffect(() => {
    const brandTimer = setTimeout(() => setShowBrand(true), 1000);
    const connectTimer = setTimeout(() => setShowConnections(true), 2000);
    
    return () => {
      clearTimeout(brandTimer);
      clearTimeout(connectTimer);
    };
  }, []);

  const zones = [
    { icon: DollarSign, label: 'Финансы', color: 'from-green-400 to-emerald-500' },
    { icon: Activity, label: 'Процессы', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, label: 'Люди', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Chaos Converging to Center */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.cos((i * Math.PI * 2) / 12) * 600,
              y: Math.sin((i * Math.PI * 2) / 12) * 400,
              opacity: 0.3,
              scale: 0.5
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0.2
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 border border-white/20 rounded-lg"
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Новый уровень
        </div>
      </motion.div>

      {/* Central Dashboard */}
      <div className="relative w-full max-w-5xl">
        {/* Brand Reveal */}
        {showBrand && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 40px rgba(59, 130, 246, 0)',
                  '0 0 80px rgba(59, 130, 246, 0.4)',
                  '0 0 40px rgba(59, 130, 246, 0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-8xl font-thin text-white tracking-tight mb-6">
                Ozimiz<span className="text-blue-400">.Control</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl text-white/80 font-light mb-8"
            >
              Новый уровень управления бизнесом
            </motion.div>

            {/* Key Words */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center gap-8"
            >
              {['Единый контур', 'Гибкость', 'Контроль'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                  className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-full"
                >
                  <span className="text-white/90 font-light text-lg">{word}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Dashboard Assembly & Connections */}
        {showConnections && (
          <div className="relative">
            {/* Central Control Panel */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-400/30 flex items-center justify-center shadow-2xl shadow-blue-500/20"
            >
              <div className="text-6xl text-blue-400">⚡</div>
            </motion.div>

            {/* Connected Zones */}
            <div className="absolute inset-0 flex items-center justify-center">
              {zones.map((zone, index) => {
                const Icon = zone.icon;
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const radius = 300;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div key={zone.label}>
                    {/* Connection Line */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: `${radius}px`,
                        height: '2px',
                        transformOrigin: 'left center',
                        transform: `rotate(${angle}rad)`,
                        background: `linear-gradient(to right, rgba(59, 130, 246, 0.3), transparent)`
                      }}
                    />

                    {/* Zone Card */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${zone.color} p-0.5`}>
                        <div className="w-full h-full bg-black/80 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center gap-2">
                          <Icon className="w-8 h-8 text-white" />
                          <span className="text-white text-sm font-light">{zone.label}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Animated Data Flow */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: 2 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  transform: `translate(-50%, -50%) translate(${Math.cos(i * Math.PI / 3) * 130}px, ${Math.sin(i * Math.PI / 3) * 130}px)`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-20 text-white/40 text-sm font-light"
      >
        Из хаоса — в контроль
      </motion.div>
    </div>
  );
}
