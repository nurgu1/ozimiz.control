import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';

export function Slide26CTA() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Subtle glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/30 rounded-full blur-[150px]"
      />

      <div className="relative z-10 w-full max-w-5xl px-12">

        {/* Main Content */}
        <div className="text-center mb-16">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="text-8xl font-semibold text-white tracking-tight">
              Ozimiz<span className="text-blue-400">.Control</span>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl font-semibold text-white mb-6 leading-tight">
              Готовы управлять<br/>бизнесом осознанно?
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Начнём с анализа процессов и пилотного проекта
            </p>
          </motion.div>
        </div>

        {/* CTA Button - Large and prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"
            />
            
            {/* Button */}
            <div className="relative px-12 py-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-4 shadow-2xl">
              <span className="text-white text-2xl font-medium">Начать разговор</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Contact Cards - 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { icon: Mail, label: 'Email', value: 'hello@ozimiz.control', color: 'from-blue-500 to-cyan-500' },
            { icon: Phone, label: 'Телефон', value: '+7 (495) 123-45-67', color: 'from-purple-500 to-pink-500' },
            { icon: Globe, label: 'Сайт', value: 'ozimiz.control', color: 'from-green-500 to-emerald-500' }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all p-6">
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Label */}
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    {contact.label}
                  </div>

                  {/* Value */}
                  <div className="text-white font-light text-sm">
                    {contact.value}
                  </div>

                  {/* Hover line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${contact.color} rounded-full mt-4 origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="mt-12 space-y-4"
        >
          {/* Tagline */}
          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm font-light">
                Управляемый • Прозрачный • Эффективный
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-white/30 text-xs font-light"
            >
              Made by Ozimiz.Outsource
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Minimal floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${25 + i * 10}%`,
            top: `${35 + (i % 2) * 25}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Subtle ring decoration */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-400/20"
      />
    </div>
  );
}