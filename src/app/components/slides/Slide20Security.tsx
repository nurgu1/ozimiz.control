import { motion } from 'motion/react';
import { Shield, User, Eye, EyeOff, FileCheck } from 'lucide-react';

export function Slide20Security() {
  const roles = [
    { name: 'Руководитель', icon: Shield, access: 'full' },
    { name: 'Финансы', icon: FileCheck, access: 'finance' },
    { name: 'Менеджер', icon: User, access: 'sales' },
    { name: 'Исполнитель', icon: User, access: 'tasks' }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
          Защита данных
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight mb-4">
          Безопасность и контроль доступа
        </h1>
        <div className="text-xl text-white/60 font-light">
          Роли • Права • Ответственность
        </div>
      </motion.div>

      {/* Roles Grid */}
      <div className="grid grid-cols-4 gap-6 mb-12 max-w-6xl w-full">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-center">
                  <div className="text-white font-light mb-2">{role.name}</div>
                  <div className="text-xs text-white/40">
                    {role.access === 'full' ? 'Полный доступ' :
                     role.access === 'finance' ? 'Финансы' :
                     role.access === 'sales' ? 'Продажи' : 'Задачи'}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Access Control Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl text-white font-light">Управление доступом</h2>
        </div>

        {/* Access Table */}
        <div className="space-y-4">
          {[
            { module: 'Финансовые отчеты', ceo: true, finance: true, manager: false, worker: false },
            { module: 'Продажи и сделки', ceo: true, finance: false, manager: true, worker: false },
            { module: 'Задачи', ceo: true, finance: false, manager: true, worker: true },
            { module: 'Склад', ceo: true, finance: true, manager: true, worker: true }
          ].map((item, index) => (
            <motion.div
              key={item.module}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex-1 text-white/80 font-light">{item.module}</div>
              
              {[item.ceo, item.finance, item.manager, item.worker].map((hasAccess, i) => (
                <div key={i} className="w-12 flex justify-center">
                  {hasAccess ? (
                    <Eye className="w-5 h-5 text-green-400" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-white/20" />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Activity Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileCheck className="w-5 h-5 text-purple-400" />
            <span className="text-white font-light">Журнал действий</span>
          </div>
          <div className="space-y-2 text-sm text-white/50">
            {[
              'Иван П. просмотрел финансовый отчет',
              'Мария С. создала новую сделку',
              'Алексей К. обновил статус задачи'
            ].map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 + i * 0.2, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                <span>{log}</span>
                <span className="ml-auto text-white/30">2 мин назад</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
