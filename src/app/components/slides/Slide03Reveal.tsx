import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { DollarSign, Activity, Users } from 'lucide-react';

export function Slide03Reveal() {
  const [step, setStep] = useState(0);

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

  const columns = [
    {
      id: 'process',
      icon: Activity,
      label: 'Процессы',
      title: 'Управление задачами',
      color: 'from-blue-400 to-cyan-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      borderColor: 'border-blue-500/50',
      imageUrl: 'src/screenshots/processes.png',
    },
    {
      id: 'finance',
      icon: DollarSign,
      label: 'Деньги',
      title: 'Воронка продаж',
      color: 'from-emerald-400 to-green-600',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      borderColor: 'border-emerald-500/50',
      imageUrl: 'src/screenshots/money.png',
    },
    {
      id: 'people',
      icon: Users,
      label: 'Люди',
      title: 'Дашборд',
      color: 'from-purple-400 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      borderColor: 'border-purple-500/50',
      imageUrl: 'src/screenshots/people.png',
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] px-8">
        
        {/* Intro Badge */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white/60 text-sm tracking-[0.4em] uppercase font-medium">Новый уровень</span>
            </div>
          </motion.div>
        )}

        {/* Logo */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-center mb-8 relative w-full"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Ozimiz<span className="text-blue-500 font-normal">.Control</span>
            </h1>

            <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
              {['Единый контур', 'Гибкость', 'Контроль'].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="px-4 py-1.5 rounded-xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-md"
                >
                  <span className="text-blue-100 text-sm md:text-base font-light">{word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3 Column Layout */}
        {step >= 3 && (
          <div className="w-full flex gap-6 justify-center items-start mt-8">
            
            {columns.map((column, index) => {
              const Icon = column.icon;
              
              return (
                <motion.div
                  key={column.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex-1 max-w-[420px] relative group"
                >
                  {/* Animated Glow Background */}
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`absolute -inset-4 bg-gradient-to-r ${column.color} opacity-20 blur-2xl rounded-3xl`}
                    style={{ zIndex: -1 }}
                  />

                  {/* Main Container */}
                  <div className="relative">
                    
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                      className="flex items-center justify-center gap-2 mb-4"
                    >
                      <div className={`flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${column.color} shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold text-base uppercase tracking-wide">
                          {column.label}
                        </span>
                      </div>
                    </motion.div>

                    {/* Laptop Mockup */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className="relative"
                    >
                      {/* Laptop Container with Border Glow */}
                      <div className={`relative rounded-2xl border-2 ${column.borderColor} bg-gradient-to-b from-gray-900 to-black p-3 shadow-2xl overflow-hidden`}>
                        
                        {/* Animated Border Glow */}
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                          className={`absolute inset-0 bg-gradient-to-r ${column.color} opacity-20 blur-xl pointer-events-none`}
                        />

                        {/* Screen Bezel */}
                        <div className="relative bg-black rounded-xl p-2 overflow-hidden">
                          
                          {/* Screen Content */}
                          <div className="relative w-full aspect-[16/10] bg-white rounded-lg overflow-hidden">
                            <img 
                              src={column.imageUrl} 
                              alt={column.title}
                              className="w-full h-full object-cover object-top"
                            />
                            
                            {/* Hover Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className={`absolute inset-0 bg-gradient-to-t ${column.color} opacity-0 hover:opacity-10 transition-opacity duration-300`}
                            />
                          </div>

                          {/* Camera Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-800 rounded-b-lg z-10" />
                        </div>

                        {/* Keyboard Base */}
                        <div className="mt-2 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg" />
                      </div>

                      {/* Bottom Glow */}
                      <div 
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 blur-2xl rounded-full"
                        style={{ 
                          background: `radial-gradient(ellipse at center, ${column.glowColor}, transparent)` 
                        }}
                      />
                    </motion.div>

                    {/* Title Below */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 + index * 0.2, duration: 0.5 }}
                      className="text-center mt-8"
                    >
                      <p className="text-white/70 text-sm font-light tracking-wide">
                        {column.title}
                      </p>
                    </motion.div>

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