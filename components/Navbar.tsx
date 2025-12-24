import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-white/50 backdrop-blur-sm py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group z-50 relative">
            <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-lg transform group-hover:rotate-6 transition-transform shadow-md">
               <span className="text-white font-bold text-xl">DR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 leading-tight">
                David Ribeiro
              </span>
              <span className="text-[10px] uppercase tracking-wider text-brand-600 font-bold">Web Developer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Orçamento
              <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-slate-700 hover:text-brand-600 transition-colors z-50 relative"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col"
            style={{ height: '100dvh' }} // Dynamic Viewport Height for mobile browsers
          >
            {/* Espaço para o header fixo não cobrir o conteúdo */}
            <div className="h-20" /> 
            
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="text-3xl font-bold text-slate-800 hover:text-brand-600 active:text-brand-700 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs mt-4"
              >
                 <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold rounded-full text-lg shadow-xl active:scale-95 transition-transform"
                >
                  Solicitar Orçamento <ArrowRight size={20}/>
                </a>
              </motion.div>
            </nav>
            
            <div className="p-6 text-center text-slate-400 text-sm">
                &copy; David Ribeiro
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};