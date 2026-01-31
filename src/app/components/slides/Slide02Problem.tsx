import { motion } from 'motion/react';
import { FileQuestion, AlertCircle, TrendingDown, X } from 'lucide-react';

export function Slide02Problem() {
  const issues = [
    { 
      label: 'Разрозненно', 
      desc: 'Нет единой базы',
      icon: FileQuestion,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    { 
      label: 'Запоздало', 
      desc: 'Реакция постфактум',
      icon: AlertCircle,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20'
    },
    { 
      label: 'Потери', 
      desc: 'Убытки из-за хаоса',
      icon: TrendingDown,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20'
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between bg-[#0a0a0a] text-white p-6 relative overflow-hidden">
      
      {/* Background Ambient Glow (Red/Orange for "Problem" theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Chaotic Background Elements (Subtler) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute w-24 h-24 border border-white/5 rounded-xl"
          />
        ))}
      </div>

      {/* 1. Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-8 z-10"
      >
        <div className="inline-block px-3 py-1 mb-4 border border-red-500/20 rounded-full bg-red-500/5 backdrop-blur-sm">
          <span className="text-red-400/80 text-xs tracking-[0.3em] uppercase font-medium">Проблема</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
          Фиксация есть — <span className="text-red-500 font-normal">контроля нет</span>
        </h1>
      </motion.div>

      {/* 2. Central Visualization (Responsive) */}
      <div className="flex-1 w-full flex items-center justify-center relative my-4">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          
          {/* Orbiting Elements */}
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const radius = 140; // Reduced radius to fit screen
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ scale: 1, x, y }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Connection Line */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: radius - 40, opacity: 1 }} // Don't touch center
                  style={{ rotate: `${i * 60 + 90}deg`, transformOrigin: "top center" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 w-[1px] bg-gradient-to-b from-white/20 to-transparent -z-10"
                />

                {/* Floating Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="w-16 h-16 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg hover:border-red-500/40 transition-colors"
                >
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center "Question" Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"
             />
             <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="relative w-24 h-24 bg-gradient-to-br from-[#1a1a1a] to-black rounded-full border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]"
             >
               <span className="text-5xl font-light text-red-500">?</span>
             </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Issues (Grid layout to stay visible) */}
      <div className="w-full max-w-5xl z-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {issues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <motion.div
                key={issue.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                className={`flex items-center gap-4 p-4 rounded-2xl border ${issue.border} ${issue.bg} backdrop-blur-sm hover:bg-opacity-20 transition-all cursor-default group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center ${issue.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white">{issue.label}</h3>
                  <p className="text-sm text-white/40">{issue.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
