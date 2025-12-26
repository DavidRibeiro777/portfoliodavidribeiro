import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag, ArrowRight, Github, Sparkles } from 'lucide-react';
import { PORTFOLIO } from '../constants';

export const Portfolio: React.FC = () => {
  // Pegamos apenas os 3 primeiros itens da array
  const limitedPortfolio = PORTFOLIO.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"></div>
              <span className="text-brand-600 font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                <Sparkles size={14} /> Portfólio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Projetos <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Realizados</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl">
              Soluções criativas desenvolvidas com tecnologia moderna e design inovador
            </p>
          </div>
          <a 
            href="https://github.com/DavidRibeiro777" 
            target="_blank" 
            rel="noreferrer" 
            className="group hidden md:flex items-center gap-3 bg-white px-6 py-3 rounded-full font-semibold text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl border border-slate-100 hover:border-brand-100 transition-all duration-300"
          >
            <Github size={18} />
            Ver GitHub
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {limitedPortfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-100 shadow-lg hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className="relative aspect-video sm:h-60 lg:h-68 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 z-20">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-500 hover:text-white shadow-xl hover:shadow-brand-500/30"
                  >
                    Ver Projeto
                    <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 md:p-7 flex-1 flex flex-col relative">
                <div className="absolute -top-4 right-6">
                  <span className={`text-xs font-bold px-4 py-2 rounded-full shadow-lg ${project.color} backdrop-blur-sm bg-white/80 border border-white/20`}>
                    {project.category}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 group-hover:border-brand-100 transition-colors">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 group-hover:border-brand-100 transition-all hover:scale-105 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <Tag size={10} className="text-brand-500" /> 
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="md:hidden mt-6 text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-2 justify-center py-3 rounded-lg bg-brand-50 hover:bg-brand-100 transition-colors"
                >
                  Acessar projeto
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-600/20 blur-xl rounded-full animate-pulse"></div>
          </div>
          
          <div className="mt-8 md:hidden">
            <a 
              href="https://github.com/DavidRibeiro777" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 hover:text-brand-600 font-medium inline-flex items-center gap-2 transition-colors text-sm px-4 py-2 rounded-lg hover:bg-brand-50"
            >
              <Github size={16} />
              Ver mais no GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
