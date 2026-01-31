import { motion } from 'motion/react';
import { Mountain, FileText, Monitor, Server } from 'lucide-react';

export function Slide01Timeline() {
  const eras = [
    {
      icon: Mountain,
      label: 'Память',
      image: 'https://images.unsplash.com/photo-1649516620945-328a075f14aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2F2ZSUyMHdhbGwlMjBwcmltaXRpdmV8ZW58MXx8fHwxNzY5NzEwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 0.5
    },
    {
      icon: FileText,
      label: 'Бумага',
      image: 'https://images.unsplash.com/photo-1760307837850-13db8b0d94cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwYXBlciUyMGRvY3VtZW50cyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY5NzEwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 1
    },
    {
      icon: Monitor,
      label: 'Таблицы',
      image: 'https://images.unsplash.com/photo-1722702012229-10548fd57f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbXB1dGVyJTIwc3ByZWFkc2hlZXQlMjBvZmZpY2V8ZW58MXx8fHwxNzY5NzEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 1.5
    },
    {
      icon: Server,
      label: 'Системы прошлого',
      image: 'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV4JTIwc29mdHdhcmUlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzY5NzEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 2
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          История
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight">
          Эволюция управления бизнесом
        </h1>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Timeline Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
        />

        {/* Eras */}
        <div className="grid grid-cols-4 gap-8">
          {eras.map((era, index) => {
            const Icon = era.icon;
            return (
              <motion.div
                key={era.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: era.delay, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Era Card */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: era.delay + 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 group cursor-pointer"
                >
                  <img
                    src={era.image}
                    alt={era.label}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0)',
                        '0 0 40px rgba(255,255,255,0.3)',
                        '0 0 20px rgba(255,255,255,0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: era.delay }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: era.delay + 0.4, duration: 0.6 }}
                  className="text-white/90 text-lg font-light"
                >
                  {era.label}
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: era.delay + 0.3, duration: 0.3 }}
                  className="w-3 h-3 rounded-full bg-white/60 mt-4"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Arrow Forward */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute -right-16 top-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
            <div className="text-white/40 text-2xl">→</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-20 text-white/40 text-sm font-light"
      >
        Все эпохи пытались фиксировать, но не контролировали
      </motion.div>
    </div>
  );
}
