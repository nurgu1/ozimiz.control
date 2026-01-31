import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Slide26CTA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(59, 130, 246, 0.2)',
                '0 0 100px rgba(59, 130, 246, 0.4)',
                '0 0 60px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-8xl font-thin text-white">
              Ozimiz<span className="text-blue-400">.Control</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Question */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-6xl font-light text-white mb-12 leading-tight"
        >
          Готовы управлять
          <br />
          бизнесом осознанно?
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col gap-6 items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-light hover:from-blue-600 hover:to-purple-600 transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-4"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Обсудим ваш бизнес и процессы</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-white/60 font-light text-lg"
          >
            Начнём с анализа и пилотного проекта
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          {[
            { label: 'Email', value: 'hello@ozimiz.control' },
            { label: 'Телефон', value: '+7 (495) 123-45-67' },
            { label: 'Сайт', value: 'ozimiz.control' }
          ].map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 + i * 0.15, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-sm text-white/50 mb-2">{contact.label}</div>
              <div className="text-white font-light">{contact.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-16 text-white/40 text-sm font-light"
        >
          Made by Ozimiz.Outsource
        </motion.div>
      </div>

      {/* Decorative Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`
          }}
        />
      ))}
    </div>
  );
}
