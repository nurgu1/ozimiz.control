import { motion } from 'motion/react';
import { DollarSign, Activity, Users, TrendingUp, CheckCircle2, Award } from 'lucide-react';

export function Slide05ThreePillars() {
  const pillars = [
    {
      title: 'Финансы',
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500',
      items: ['Доходы', 'Расходы', 'Прибыль']
    },
    {
      title: 'Процессы',
      icon: Activity,
      color: 'from-blue-400 to-cyan-500',
      items: ['План', 'Исполнение', 'Контроль']
    },
    {
      title: 'Люди',
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      items: ['Роли', 'Ответственность', 'KPI']
    }
  ];

  const subIcons = {
    'Доходы': TrendingUp,
    'Расходы': TrendingUp,
    'Прибыль': DollarSign,
    'План': CheckCircle2,
    'Исполнение': Activity,
    'Контроль': CheckCircle2,
    'Роли': Users,
    'Ответственность': Award,
    'KPI': TrendingUp
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16 relative overflow-hidden">
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Три столпа
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Контроль бизнеса
        </h1>
        <div className="flex items-center justify-center gap-3 text-2xl text-white/70 font-light">
          <span>Финансы</span>
          <span className="text-white/30">•</span>
          <span>Процессы</span>
          <span className="text-white/30">•</span>
          <span>Люди</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl">
        {/* Central Core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 60px rgba(59, 130, 246, 0.3)',
                '0 0 100px rgba(59, 130, 246, 0.5)',
                '0 0 60px rgba(59, 130, 246, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-blue-400/40 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-white text-sm font-light mb-1">Ozimiz</div>
              <div className="text-blue-400 text-lg font-light">.Control</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Three Pillars */}
        <div className="flex items-center justify-center gap-32">
          {pillars.map((pillar, pillarIndex) => {
            const Icon = pillar.icon;
            const angle = (pillarIndex * 120 - 90) * (Math.PI / 180);
            const radius = 280;

            return (
              <div key={pillar.title} className="relative">
                {/* Connection Line */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + pillarIndex * 0.2, duration: 0.6 }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: `${radius}px`,
                    height: '2px',
                    transformOrigin: 'left center',
                    transform: `rotate(${angle}rad)`,
                    background: `linear-gradient(to right, rgba(59, 130, 246, 0.3), transparent)`
                  }}
                />

                {/* Pillar Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8 + pillarIndex * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className={`w-56 rounded-3xl bg-gradient-to-br ${pillar.color} p-0.5`}>
                    <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl p-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl text-white font-light mb-6">
                        {pillar.title}
                      </h3>

                      {/* Items */}
                      <div className="space-y-3">
                        {pillar.items.map((item, itemIndex) => {
                          const SubIcon = subIcons[item as keyof typeof subIcons];
                          return (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 1.2 + pillarIndex * 0.2 + itemIndex * 0.1,
                                duration: 0.4 
                              }}
                              className="flex items-center gap-2 text-white/70 text-sm"
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{item}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Data Flow Animation */}
        {[...Array(9)].map((_, i) => {
          const pillarIndex = Math.floor(i / 3);
          const angle = (pillarIndex * 120 - 90) * (Math.PI / 180);
          const distance = 70 + (i % 3) * 30;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: 2 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
              style={{
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
