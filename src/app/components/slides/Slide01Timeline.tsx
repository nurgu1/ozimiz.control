import { motion } from 'motion/react';
import { Mountain, FileText, Monitor, Server, ArrowRight } from 'lucide-react';

export function Slide01Timeline() {
  const eras = [
    {
      icon: Mountain,
      label: 'Память',
      sub: 'Устная традиция',
      image: 'https://images.unsplash.com/photo-1649516620945-328a075f14aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2F2ZSUyMHdhbGwlMjBwcmltaXRpdmV8ZW58MXx8fHwxNzY5NzEwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 0.2
    },
    {
      icon: FileText,
      label: 'Бумага',
      sub: 'Документы и архивы',
      image: 'https://images.unsplash.com/photo-1760307837850-13db8b0d94cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwYXBlciUyMGRvY3VtZW50cyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY5NzEwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 0.4
    },
    {
      icon: Monitor,
      label: 'Таблицы',
      sub: 'Excel революция',
      image: 'https://images.unsplash.com/photo-1722702012229-10548fd57f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbXB1dGVyJTIwc3ByZWFkc2hlZXQlMjBvZmZpY2V8ZW58MXx8fHwxNzY5NzEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 0.6
    },
    {
      icon: Server,
      label: 'Системы',
      sub: 'Сложный софт',
      image: 'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV4JTIwc29mdHdhcmUlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzY5NzEwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: 0.8
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-8 overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-24 z-10 relative"
      >
        <motion.div 
          className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium">Эволюция</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
          Управление бизнесом
        </h1>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-7xl px-4">
        
        {/* Connecting Line (Behind) */}
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 relative">
          {eras.map((era, index) => {
            const Icon = era.icon;
            return (
              <motion.div
                key={era.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: era.delay, duration: 0.8, ease: "backOut" }}
                className="group flex flex-col items-center text-center"
              >
                {/* Image Card Container */}
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-8 border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-white/5">
                  
                  {/* Image with Zoom Effect */}
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <img
                      src={era.image}
                      alt={era.label}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90" />

                  {/* Floating Icon Badge */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Number/Index (Optional decorative element) */}
                  <div className="absolute top-4 right-4 text-white/10 text-4xl font-bold font-serif select-none">
                    0{index + 1}
                  </div>
                </div>

                {/* Timeline Connector Dot */}
                <div className="w-3 h-3 bg-white rounded-full mb-6 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  <div className="absolute inset-0 animate-ping bg-white/30 rounded-full" />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-white tracking-wide">{era.label}</h3>
                  <p className="text-sm text-white/40 uppercase tracking-wider font-medium">{era.sub}</p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-24 max-w-xl text-center"
      >
        <p className="text-lg text-white/50 font-light italic leading-relaxed">
          "Каждая эпоха пыталась <span className="text-white/90 not-italic border-b border-white/20 pb-0.5">фиксировать</span> реальность,<br />но лишь единицы могли её контролировать."
        </p>
      </motion.div>

    </div>
  );
}
