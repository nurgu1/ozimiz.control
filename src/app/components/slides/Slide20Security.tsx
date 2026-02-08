import { motion } from 'motion/react';
import { Shield, Lock, Key, Eye, Fingerprint, CheckCircle2 } from 'lucide-react';

export function Slide20Security() {
  const securityLayers = [
    {
      level: 1,
      title: 'Многоуровневая защита',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      features: ['Шифрование данных', 'SSL сертификаты', 'Резервное копирование']
    },
    {
      level: 2,
      title: 'Контроль доступа',
      icon: Lock,
      color: 'from-purple-500 to-pink-500',
      features: ['Роли и права', 'Двухфакторная аутентификация', 'Журнал действий']
    },
    {
      level: 3,
      title: 'Персональная ответственность',
      icon: Key,
      color: 'from-green-500 to-emerald-500',
      features: ['Личный кабинет', 'История изменений', 'Электронная подпись']
    }
  ];

  const roles = [
    { name: 'Руководитель', access: 100, icon: Shield },
    { name: 'Финансист', access: 85, icon: Fingerprint },
    { name: 'Менеджер', access: 60, icon: Key },
    { name: 'Исполнитель', access: 40, icon: Eye }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Hexagonal pattern */}
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L45 20 L45 40 L30 50 L15 40 L15 20 Z' fill='none' stroke='rgba(59,130,246,0.05)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Glows */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl w-full relative z-10 px-16 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-500/20"
          >
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400/90 text-xs tracking-[0.25em] uppercase font-medium">
              Безопасность
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-semibold text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Защита на всех уровнях
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/60 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Роли • Права • Ответственность
          </motion.p>
        </motion.div>

        {/* Security Layers - 3 large cards */}
        <div className="grid grid-cols-3 gap-6">
          {securityLayers.map((layer, index) => {
            const Icon = layer.icon;
            
            return (
              <motion.div
                key={layer.level}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.15, 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer relative"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={`absolute -inset-3 bg-gradient-to-br ${layer.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl`}
                />

                {/* Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 group-hover:border-white/40 transition-all p-8 h-full">
                  
                  {/* Level badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-sm">{layer.level}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                    {layer.title}
                  </h3>

                  {/* Features */}
                  <div className="space-y-3">
                    {layer.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.15 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-white/70 text-sm font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated lock icon in background */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: index }}
                    className="absolute bottom-4 right-4"
                  >
                    <Lock className="w-32 h-32 text-white/5" strokeWidth={1} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Roles Access Levels - Horizontal bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/10 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Уровни доступа</h3>
              <p className="text-white/50 text-sm font-light">Гибкая настройка прав для каждой роли</p>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Key className="w-10 h-10 text-blue-400/30" />
            </motion.div>
          </div>

          <div className="space-y-5">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{role.name}</span>
                        <span className="text-white/60 text-sm font-light">{role.access}% доступа</span>
                      </div>
                    </div>
                  </div>

                  {/* Access level bar */}
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden ml-14">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${role.access}%` }}
                      transition={{ delay: 1.9 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                    
                    {/* Shine effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: 2.5 + index * 0.5, 
                        repeatDelay: 4 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{ width: '30%' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}