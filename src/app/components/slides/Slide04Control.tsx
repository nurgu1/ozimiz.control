import { motion } from 'motion/react';

export function Slide04Focus() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* Background Focus Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)]"
      />

      {/* Central Core Element */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-12 flex items-center justify-center"
        >
          {/* Pulsing Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full border border-blue-500/30"
            />
          ))}
          
          {/* Core Orb */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-black border border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.4)] backdrop-blur-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6"
          >
            Бизнес должен быть <br />
            <span className="font-normal text-blue-400">под контролем</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/40 text-lg md:text-xl font-light tracking-wide"
          >
            Иначе им управляют обстоятельства
          </motion.p>
        </div>
      </div>
    </div>
  );
}
