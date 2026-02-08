import { motion } from 'motion/react';
import { Building2, Layers, Truck, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Slide15Construction() {
  const stages = [
    { label: 'Объекты', icon: Building2, description: 'Учет строительных объектов' },
    { label: 'Этапы', icon: Layers, description: 'Планирование работ' },
    { label: 'Снабжение', icon: Truck, description: 'Логистика материалов' },
    { label: 'Финансы', icon: DollarSign, description: 'Бюджетирование' }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-2 gap-16 items-center relative z-20 px-16">
        
        {/* Left - Photo with worker in construction helmet */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Photo container */}
          <div className="relative rounded-3xl overflow-hidden">
            
            {/* Glow effect behind photo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-red-500/30 blur-3xl"
            />

            {/* Main photo - construction worker with helmet */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/20 bg-gradient-to-br from-gray-800 to-gray-900">
              {                <img 
                  src="src/screenshots/construction.jpg" 
                  alt="Construction Worker"
                  className="w-full h-[500px] object-cover"
                />
              }
           

              {/* Blue overlay card on photo (like in example) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-8 shadow-2xl"
              >
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Строительные<br/>компании
                </h3>
                <p className="text-white/90 text-sm font-light leading-relaxed">
                  Управление проектами, сметами<br/>и контроль строительных объектов
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-xl border border-orange-500/20 p-4 text-center">
              <div className="text-2xl font-semibold text-orange-400 mb-1">100+</div>
              <div className="text-xs text-white/50">Объектов в работе</div>
            </div>
            <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-xl border border-orange-500/20 p-4 text-center">
              <div className="text-2xl font-semibold text-orange-400 mb-1">24/7</div>
              <div className="text-xs text-white/50">Контроль процессов</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/10 backdrop-blur-xl border border-orange-500/20"
            >
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400/90 text-xs tracking-[0.25em] uppercase font-medium">
                Строительство
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-semibold text-white tracking-tight mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Управление<br/>объектами и финансами
            </motion.h1>
            
            <motion.p
              className="text-lg text-white/60 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Полный цикл строительного проекта<br/>в единой системе контроля
            </motion.p>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.9 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-orange-400/40 transition-all duration-300 p-5 flex items-center gap-4">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 text-lg">
                        {stage.label}
                      </h3>
                      <p className="text-white/50 text-sm font-light">
                        {stage.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-orange-400"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>

                    {/* Active indicator */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity
                      }}
                      className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex items-center gap-3 pt-4"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-white/60 text-sm font-light">
              Гибкая настройка под специфику строительного бизнеса
            </span>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}