import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, FileText, Code, Sparkles,} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Background Gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50" />
      
      {/* Blobs Decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-20 right-[-5%] w-[600px] h-[600px] bg-amber-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-yellow-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Badge Integrado no Layout (não fixo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 md:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm border border-amber-200 px-6 py-3 rounded-full shadow-lg shadow-amber-200/30 hover:shadow-amber-300/40 transition-all duration-300">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-green-500"
            />
            <span className="text-sm md:text-base font-bold text-amber-700 tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span>Disponível para novos projetos/trabalhos</span>
            </span>
          </div>
        </motion.div>

        {/* Conteúdo em Grid Responsivo */}
        <div className="w-full grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Coluna 1: Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 text-center md:text-left"
          >
            {/* Nome e Título */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 text-amber-600 font-medium mb-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-sm uppercase tracking-wider">Desenvolvedor Front-End</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                David{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                  Ribeiro
                </span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Code className="text-amber-500 hidden md:block" size={24} />
                <h2 className="text-xl md:text-2xl text-slate-700 font-semibold">
                  Transformando ideias em experiências digitais
                </h2>
              </div>
            </motion.div>

            {/* Descrição */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl"
            >
              Especialista em React, TypeScript e Next.js. Crio interfaces modernas, performáticas 
              e com foco na melhor experiência do usuário para projetos web.
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start"
            >
              {["React", "TypeScript", "Tailwind CSS", "JavaScript", ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2.5 bg-white border border-amber-100 rounded-xl text-sm font-semibold text-amber-800 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Botões CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a 
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group relative z-20"
              >
                <span>Explorar Portfólio</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 max-w-md"
            >
            </motion.div>
          </motion.div>

          {/* Coluna 2: Imagem à direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            {/* Container da Imagem com Efeitos */}
            <div className="relative">
              {/* Efeito de brilho atrás - COM pointer-events-none */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 -m-8 bg-gradient-to-r from-amber-400 to-yellow-500 blur-3xl rounded-full pointer-events-none"
              />
              
              {/* Imagem Principal com Animação de Flutuação */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0] // Animação de flutuação
                }}
                transition={{ 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-8 border-white shadow-2xl shadow-amber-300/30"
              >
                <img 
                  src="/david.png"
                  alt="David Ribeiro - Desenvolvedor Front-End"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradiente - COM pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-yellow-500/10 pointer-events-none" />
              </motion.div>

              {/* Social Links ao redor da imagem - CORRIGIDOS para serem clicáveis */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex justify-center gap-6 mt-8 relative z-30"
              >
                <motion.a 
                  href="https://github.com/david-ribeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white border-2 border-amber-200 rounded-xl text-slate-700 hover:text-white hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center relative z-30"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/david-ribeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white border-2 border-amber-200 rounded-xl text-slate-700 hover:text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center relative z-30"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
                
              <motion.a 
  href="https://instagram.com/david-ribeiro"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5, scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="p-4 bg-white border-2 border-amber-200 rounded-xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center relative z-30"
  aria-label="Instagram"
>
  <Instagram size={24} />
</motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};