import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* Coluna 1: Branding */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                David Ribeiro<span className="text-yellow-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-medium">
              Desenvolvedor Front End focado em construir soluções escaláveis e experiências digitais de alto impacto.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">Navegação</h4>
              <nav className="flex flex-col gap-2">
                {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-yellow-500 transition-colors w-fit"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Coluna 3: Redes e Voltar ao Topo */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-4">
              <a href="https://github.com/DavidRibeiro777" target="_blank" className="p-2 bg-slate-900 rounded-lg hover:text-white hover:bg-slate-800 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/seuusuario" target="_blank" className="p-2 bg-slate-900 rounded-lg hover:text-white hover:bg-slate-800 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-yellow-500 transition-colors mt-4"
            >
              Voltar ao topo <ArrowUpCircle size={18} />
            </button>
          </div>
        </div>

        {/* Barra Inferior (Copyright) */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <span>&copy; {currentYear}</span>
            <span className="text-slate-700">•</span>
            <span>Feito com</span>
            <Heart size={12} className="text-yellow-500 fill-yellow-500" />
            <span>por David Ribeiro</span>
          </div>
          
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1.5 italic">
              <div className="w-1 h-1 rounded-full bg-slate-700" /> React
            </span>
            <span className="flex items-center gap-1.5 italic">
              <div className="w-1 h-1 rounded-full bg-slate-700" /> Tailwind
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};