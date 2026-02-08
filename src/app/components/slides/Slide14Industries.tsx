import { motion } from 'motion/react';
import { Building2, Factory, Store, Landmark, ArrowRight } from 'lucide-react';

interface Slide14IndustriesProps {
  onNavigate?: (slideIndex: number) => void;
}

export function Slide14Industries({ onNavigate }: Slide14IndustriesProps) {
  const industries = [
    { 
      label: 'Строительство', 
      icon: Building2, 
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bg: 'bg-gradient-to-br from-orange-900/40 to-red-900/40',
      description: 'Управление проектами, сметами и подрядчиками',
      slideIndex: "Slide15Construction"
    },
    { 
      label: 'Производство', 
      icon: Factory, 
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bg: 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40',
      description: 'Контроль производственных процессов и ресурсов',
      slideIndex: "Slide16Manufacturing"
    },
    { 
      label: 'Торговля и сервис', 
      icon: Store, 
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bg: 'bg-gradient-to-br from-green-900/40 to-emerald-900/40',
      description: 'Учет товаров, продаж и обслуживания клиентов',
      slideIndex: 17
    },
    { 
      label: 'Квазигоссектор', 
      icon: Landmark, 
      gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
      bg: 'bg-gradient-to-br from-purple-900/40 to-pink-900/40',
      description: 'Соответствие требованиям государственных организаций',
      slideIndex: 18
    }
  ];

  const handleIndustryClick = (slideIndex: number) => {
    if (onNavigate) {
      onNavigate(slideIndex);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black p-12 relative overflow-hidden">
      
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-4 py-2 mb-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <span className="text-white/60 text-sm tracking-[0.2em] uppercase font-medium">
            Отраслевые решения
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-semibold text-white tracking-tight mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Создан для вашей отрасли
        </motion.h1>
        
        <motion.p
          className="text-lg text-white/60 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Ozimiz.Control адаптируется под специфику любого бизнеса
        </motion.p>
      </motion.div>

      {/* Industry Cards - Smaller Compact Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full relative z-10">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          
          return (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.15, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleIndustryClick(industry.slideIndex)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                
                {/* Background gradient effect */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${industry.bg}`}
                />

                <div className="relative p-6 flex flex-col min-h-[180px]">
                  
                  {/* Icon with gradient */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-3"
                  >
                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${industry.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {industry.label}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs font-light leading-relaxed mb-3 flex-grow">
                    {industry.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-xs font-medium">Узнать больше</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-10 flex items-center gap-4 text-white/40 text-xs relative z-10"
      >
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="font-light tracking-wide">Специализированные модули для каждой отрасли</span>
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}