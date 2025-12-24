import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Code, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  // Variantes para reutilização e limpeza de código
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      
      {/* Blobs Decorativos - Otimizados com will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="hidden lg:block absolute top-20 right-[-5%] w-[500px] h-[500px] bg-amber-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="hidden lg:block absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Badge Disponibilidade */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-amber-200 px-6 py-3 rounded-full shadow-lg shadow-amber-200/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm md:text-base font-bold text-amber-700 flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              Disponível para novos projetos
            </span>
          </div>
        </motion.div>

        <div className="w-full grid md:grid-cols-3 gap-8 items-center">
          
          <div className="md:col-span-2 text-center md:text-left">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 text-amber-600 font-medium mb-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-sm uppercase tracking-wider">Desenvolvedor Front-End</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                David <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Ribeiro</span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <Code className="text-amber-500 hidden md:block" size={24} />
                <h2 className="text-xl md:text-2xl text-slate-700 font-semibold leading-snug">
                  Transformando ideias em experiências digitais
                </h2>
              </div>
            </motion.div>

            <motion.p 
              {...fadeInUp} transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 mb-8 max-w-2xl"
            >
              Especialista em React, TypeScript e Next.js. Crio interfaces modernas 
              e performáticas com foco na melhor experiência do usuário.
            </motion.p>

            {/* Tech Stack - Otimizada */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
              {["React", "TypeScript", "Tailwind", "JavaScript"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-4 py-2 bg-white border border-amber-100 rounded-xl text-sm font-semibold text-amber-800 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all hover:-translate-y-1 active:scale-95"
              >
                <span>Explorar Portfólio</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>

          {/* Coluna Imagem - Otimizada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              {/* Brilho estático ou com animação leve */}
              <div className="absolute inset-0 -m-6 bg-amber-400/20 blur-3xl rounded-full pointer-events-none group-hover:bg-amber-400/30 transition-colors" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
              >
                <img 
                  src="/david.png" 
                  alt="David Ribeiro"
                  className="w-full h-full object-cover"
                  loading="eager" 
                />
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-8">
                {[
                  { icon: Github, href: "https://github.com/DavidRibeiro777", color: "hover:bg-slate-900" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/david-ribeiro-628996353/", color: "hover:bg-blue-600" },
                  { icon: Instagram, href: "https://instagram.com/davidribeiroweb", color: "hover:bg-gradient-to-tr from-pink-500 to-purple-500" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white border border-amber-200 rounded-xl text-slate-700 hover:text-white ${social.color} transition-all duration-300 shadow-md hover:-translate-y-1`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
