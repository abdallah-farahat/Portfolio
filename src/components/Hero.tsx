import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-[#0B0F19] text-white overflow-hidden">
      
      {/* 1. النصوص والترحيب */}
      <div className="flex-1 space-y-6 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Abdallah Ali</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-xl">
            Data Engineer & Developer crafting high-performance data architectures and intelligent web experiences.
          </p>
        </motion.div>

        {/* الأزرار التفاعلية */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 font-medium transition-all shadow-lg shadow-purple-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 font-medium transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* 2. الأفاتار الشخصي (الـ Headshot) مع تأثيرات بصرية وحركية */}
      <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0">
        
        {/* خلفية نيون مضيئة خلف الأفاتار لتتغلب على الخلفية الداكنة */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // تأثير طفو خفيف ومستمر (Floating Animation)
          style={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
          <img
            src="/abdallah-avatar.png" 
            alt="Abdallah Ali Avatar"
            className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(168,85,247,0.25)]"
          />
        </motion.div>

      </div>
    </section>
  );
}