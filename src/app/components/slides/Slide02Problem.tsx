import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  FileQuestion, AlertCircle, TrendingDown, ArrowRight, CheckCircle2 
} from 'lucide-react';

export function Slide02Problem() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 3500);
    return () => clearTimeout(timer);
  }, []);

  const transformations = [
    { 
      pain: 'Разрозненные данные', 
      solution: 'Единый контур',
      icon: FileQuestion,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      pain: 'Запоздалые решения', 
      solution: 'Реальное время',
      icon: AlertCircle,
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      pain: 'Потери и перерасходы', 
      solution: 'Контроль процессов',
      icon: TrendingDown,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Dynamic glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: phase >= 1 ? [0.06, 0.12, 0.06] : [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] ${phase >= 1 ? 'bg-blue-600/20' : 'bg-red-600/20'} blur-[150px] rounded-full transition-colors duration-1000`}
      />

      <div className="relative z-10 w-full max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Badge with smooth color transition */}
          <motion.div 
            animate={{
              borderColor: phase >= 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              backgroundColor: phase >= 1 ? 'rgba(59, 130, 246, 0.03)' : 'rgba(239, 68, 68, 0.03)'
            }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 border rounded-full backdrop-blur-sm"
          >
            <motion.span 
              animate={{ 
                color: phase >= 1 ? 'rgba(96, 165, 250, 0.9)' : 'rgba(248, 113, 113, 0.9)' 
              }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-wider uppercase font-medium"
            >
              {phase >= 1 ? 'Решение' : 'Проблема'}
            </motion.span>
          </motion.div>
          
          {/* Title transition */}
          <div className="relative h-16 flex items-center justify-center">
            {/* Problem title */}
            <motion.h1 
              className="text-5xl font-semibold tracking-tight text-white absolute w-full text-center"
              animate={{ 
                opacity: phase >= 1 ? 0 : 1,
                y: phase >= 1 ? -20 : 0,
                filter: phase >= 1 ? 'blur(10px)' : 'blur(0px)'
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Фиксация есть — <span className="text-red-400">контроля нет</span>
            </motion.h1>

            {/* Solution title */}
            <motion.h1
              className="text-5xl font-semibold tracking-tight absolute w-full text-center"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0,
                y: phase >= 1 ? 0 : 20,
                filter: phase >= 1 ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: phase >= 1 ? 0.3 : 0 }}
            >
              Ozimiz<span className="text-blue-400">.Control</span> — решение
            </motion.h1>
          </div>
        </motion.div>

        {/* Transformations */}
        <div className="space-y-5">
          {transformations.map((item, index) => {
            const Icon = item.icon;
            const showTransform = phase >= 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-center gap-4"
              >
                {/* Pain Card */}
                <motion.div
                  animate={{ 
                    opacity: showTransform ? 0.5 : 1,
                    scale: showTransform ? 0.98 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 relative"
                >
                  <div className="rounded-2xl bg-black/40 backdrop-blur-sm border border-white/[0.08] p-6 relative overflow-hidden">
                    {/* Red tint for problem */}
                    <div className="absolute inset-0 bg-red-500/[0.03]" />
                    
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-red-400/80" />
                      </div>
                      <div className="flex-1 relative">
                        <motion.div
                          className="text-lg text-white/90 font-light"
                          animate={{ opacity: showTransform ? 0.5 : 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.pain}
                        </motion.div>
                        
                        {/* Strike-through with smooth animation */}
                        {showTransform && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ 
                              delay: 0.4 + index * 0.15, 
                              duration: 0.5, 
                              ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-400/60 origin-left"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow with rotation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ 
                    scale: showTransform ? 1 : 0, 
                    rotate: showTransform ? 0 : -180,
                    opacity: showTransform ? 1 : 0
                  }}
                  transition={{ 
                    delay: 0.6 + index * 0.15, 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <ArrowRight className="w-8 h-8 text-blue-400/70" />
                </motion.div>

                {/* Solution Card with gradient */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ 
                    opacity: showTransform ? 1 : 0, 
                    scale: showTransform ? 1 : 0.95,
                    x: showTransform ? 0 : 20
                  }}
                  transition={{ 
                    delay: 0.8 + index * 0.15, 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex-1 relative group"
                >
                  <div className="rounded-2xl bg-black/40 backdrop-blur-sm border border-white/[0.08] hover:border-white/20 transition-colors p-6 relative overflow-hidden">
                    {/* Gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.05 }}
                      whileHover={{ opacity: 0.08 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                    
                    <div className="relative flex items-center gap-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} opacity-90 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className={`text-xl font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-blue-500/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span className="text-white/80 font-light">Единая система управления бизнесом</span>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}