import { motion } from 'motion/react';
import { DollarSign, Activity, Users, TrendingUp, CheckCircle2, Award } from 'lucide-react';

export function Slide05ThreePillars() {
  const pillars = [
    {
      title: 'Финансы',
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500',
      shadow: 'shadow-emerald-500/20',
      items: ['Доходы', 'Расходы', 'Прибыль']
    },
    {
      title: 'Процессы',
      icon: Activity,
      color: 'from-blue-400 to-cyan-500',
      shadow: 'shadow-blue-500/20',
      items: ['План', 'Исполнение', 'Контроль']
    },
    {
      title: 'Люди',
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      shadow: 'shadow-purple-500/20',
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
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-8 relative overflow-hidden">
      
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
         {/* Ambient Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[100px] rounded-full" />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium">Три столпа</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight mb-4">
          Контроль бизнеса
        </h1>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        
        {/* 1. CENTRAL CORE (Появляется первым) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative z-30"
        >
          {/* Pulse Effect behind core */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
          />
          
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-blue-500/30 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            <span className="text-white text-sm font-light tracking-wider opacity-60">Ozimiz</span>
            <span className="text-blue-400 text-2xl font-medium tracking-tight">.Control</span>
          </div>
        </motion.div>

        {/* 2. PILLARS LOOP (Появляются по очереди) */}
        {pillars.map((pillar, pillarIndex) => {
          const Icon = pillar.icon;
          // Расчет углов: -90 (верх), 30 (право-низ), 150 (лево-низ)
          const angleDeg = -90 + (pillarIndex * 120);
          const angleRad = angleDeg * (Math.PI / 180);
          const radius = 280; // Расстояние от центра

          // Тайминги анимации
          // Центр занимает 0.8с.
          // Каждая ветка стартует с шагом 0.3с
          const startDelay = 0.8 + (pillarIndex * 0.4);

          return (
            <div key={pillar.title} className="absolute top-1/2 left-1/2 w-0 h-0">
              
              {/* Группа вращения (помещает элемент под нужным углом) */}
              <div 
                className="absolute top-0 left-0 w-0 h-0 flex items-center"
                style={{ transform: `rotate(${angleDeg}deg)` }}
              >
                
                {/* A. CONNECTION LINE (Линия растет от центра) */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: radius, opacity: 1 }}
                  transition={{ delay: startDelay, duration: 0.5, ease: "easeOut" }}
                  className="h-[2px] bg-gradient-to-r from-blue-500/40 to-transparent origin-left"
                />

                {/* Data Particle moving along the line */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: radius, opacity: [0, 1, 0] }}
                  transition={{ 
                    delay: startDelay + 0.5, 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 1 
                  }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white]"
                />

                {/* B. PILLAR CARD (Карточка появляется на конце линии) */}
                <motion.div
                  className="absolute"
                  style={{ left: radius, transform: `rotate(${-angleDeg}deg)` }} // Компенсируем вращение, чтобы текст был ровно
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0, x: -20 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ delay: startDelay + 0.3, duration: 0.5, type: "spring" }}
                    className="relative -translate-x-1/2 -translate-y-1/2" // Центрируем карточку на конце линии
                  >
                    <div className={`w-60 rounded-3xl bg-gradient-to-br ${pillar.color} p-[1px] ${pillar.shadow} shadow-lg`}>
                      <div className="w-full h-full bg-black/95 backdrop-blur-md rounded-3xl p-5 relative overflow-hidden">
                        
                        {/* Фоновый градиент внутри карточки */}
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pillar.color} opacity-20 blur-2xl rounded-full pointer-events-none`} />

                        {/* Заголовок и иконка */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${pillar.color} bg-opacity-10`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl text-white font-light tracking-wide">{pillar.title}</h3>
                        </div>

                        {/* Список пунктов (Появляются каскадом) */}
                        <div className="space-y-2.5">
                          {pillar.items.map((item, itemIndex) => {
                            // @ts-ignore
                            const SubIcon = subIcons[item] || TrendingUp;
                            return (
                              <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: startDelay + 0.6 + (itemIndex * 0.1), 
                                  duration: 0.3 
                                }}
                                className="flex items-center gap-3 text-white/60 text-sm group cursor-default hover:text-white transition-colors"
                              >
                                <SubIcon className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                                <span>{item}</span>
                              </motion.div>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
