import { motion } from 'motion/react';
import { Mountain, FileText, Monitor, Server } from 'lucide-react';

export function Slide01Timeline() {
  const eras = [
    {
      icon: Mountain,
      label: 'Память',
      sub: 'Устная традиция',
      year: '~3000 BC',
      image:
        'https://images.pexels.com/photos/35712457/pexels-photo-35712457.jpeg?_gl=1*blhmax*_ga*MTgwMTQ3NTI5Ny4xNzcwNTc1Mjc3*_ga_8JE65Q40S6*czE3NzA1ODM0MzgkbzIkZzEkdDE3NzA1ODM0NjMkajM1JGwwJGgw'
    },
    {
      icon: FileText,
      label: 'Бумага',
      sub: 'Документы',
      year: '~1400 AD',
      image:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=90&w=1800'
    },
    {
      icon: Monitor,
      label: 'Таблицы',
      sub: 'Excel эра',
      year: '~1985',
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=90&w=1800'
    },
    {
      icon: Server,
      label: 'Системы',
      sub: 'Умный софт',
      year: '~2024',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=90&w=1800'
    }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">

      {/* cinematic background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      <div className="relative z-10 w-full max-w-7xl px-12">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4">
            Evolution
          </div>
          <h1 className="text-5xl font-medium text-white tracking-tight">
            Управление бизнесом
          </h1>
        </motion.div>

        {/* timeline */}
        <div className="relative">
          <div className="absolute top-[96px] left-0 right-0 h-px bg-white/10" />

          <div className="grid grid-cols-4 gap-8">
            {eras.map((era, index) => {
              const Icon = era.icon;

              return (
                <motion.div
                  key={era.label}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.25,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  {/* timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.25,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                  </motion.div>

                  {/* card */}
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative h-[280px] rounded-3xl overflow-hidden border border-white/10"
                  >
                    {/* photo layer */}
                    <motion.img
                      src={era.image}
                      alt={era.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.25, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ duration: 3.5, ease: 'easeOut' }}
                    />

                    {/* dynamic light mask */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.3, duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"
                    />

                    {/* light sweep */}
                    <motion.div
                      initial={{ x: '-120%' }}
                      animate={{ x: '120%' }}
                      transition={{
                        delay: 1.2 + index * 0.3,
                        duration: 2.2,
                        ease: 'easeInOut'
                      }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"
                    />

                    {/* content */}
                    <div className="relative z-10 h-full p-6 flex flex-col">
                      <div className="text-white/60 text-xs tracking-wider mb-4">
                        {era.year}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.1 + index * 0.3,
                          duration: 0.8
                        }}
                        className="mb-4"
                      >
                        <Icon className="w-9 h-9 text-white" strokeWidth={1.2} />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.25 + index * 0.3,
                          duration: 0.8
                        }}
                        className="mt-auto"
                      >
                        <h3 className="text-white text-xl font-medium mb-1">
                          {era.label}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {era.sub}
                        </p>
                      </motion.div>

                      {/* index */}
                      <div className="absolute bottom-4 right-5 text-white/[0.08] text-5xl font-semibold select-none">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm font-light tracking-wide">
            Управление — это не фиксация.  
            <br />
            <span className="text-white">
              Это контроль во времени
            </span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
