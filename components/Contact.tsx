import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  FileText, ExternalLink, Copy, Check,
  MessageCircle, Download, Briefcase, ArrowUpRight, Globe
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Caminho exato do seu arquivo na pasta public
  const resumePath = "/Currículo David Pr.pdf"; 

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título Centralizado */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-yellow-500 italic uppercase">
              Contato
            </h2>
            <div className="h-2 w-24 bg-slate-900 mx-auto mt-2 rounded-full" />
          </motion.div>
          <p className="text-slate-500 text-lg max-w-md font-medium">
            Interessado em colaboração ou contratação? Escolha o melhor canal abaixo.
          </p>
        </div>

        {/* Layout Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card Principal: Currículo e LinkedIn */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 p-10 bg-slate-950 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
            <div className="z-10">
              <div className="flex items-center gap-2 text-yellow-500 mb-6 font-black uppercase tracking-widest text-xs">
                <Briefcase size={16} />
                Recrutamento e Parcerias
              </div>
              
              {/* ÁREA DOS BOTÕES DE CURRÍCULO */}
              <div className="flex flex-wrap gap-4">
                {/* Visualizar Currículo */}
                <a 
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-4 bg-yellow-500 text-slate-950 rounded-2xl font-black hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20"
                >
                  <FileText size={20} /> VISUALIZAR CV
                </a>

                {/* Baixar Currículo */}
                <a 
                  href={resumePath}
                  download="Curriculo_David_Ribeiro.pdf"
                  className="flex items-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all border border-slate-700"
                >
                  <Download size={20} /> BAIXAR PDF
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/david-ribeiro-628996353/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 z-10 opacity-90 border-t border-white/10 pt-8">
              <div>
                <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-1">Localização</p>
                <p className="text-sm font-bold italic text-slate-200">São José do Rio Pardo, SP</p>
              </div>
              <div>
                <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-1">Preferência</p>
                <p className="text-sm font-bold italic text-slate-200">Híbrido / Remoto</p>
              </div>
              <div>
                <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-1">Disponibilidade</p>
                <p className="text-sm font-bold italic text-green-400 uppercase">Imediata</p>
              </div>
            </div>
          </motion.div>

          {/* Card WhatsApp */}
          <motion.a
            href="https://wa.me/5519994772654"
            target="_blank"
            whileHover={{ y: -5 }}
            className="md:col-span-4 p-10 bg-yellow-500 rounded-[2.5rem] text-slate-950 flex flex-col justify-between group shadow-xl shadow-yellow-100"
          >
            <div className="flex justify-between items-start">
              <div className="p-4 bg-slate-950 text-yellow-500 rounded-2xl shadow-xl">
                <MessageCircle size={32} />
              </div>
              <ArrowUpRight size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </div>
            <div>
              <h3 className="text-4xl font-black leading-none uppercase">WhatsApp <br /> Direto</h3>
              <p className="mt-4 font-bold opacity-70 text-sm italic">Tempo médio de resposta: 1h</p>
            </div>
          </motion.a>

          {/* Cards Secundários (Email / GitHub) */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-yellow-500 transition-all group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white rounded-2xl text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-all shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">E-mail Profissional</p>
                  <p className="text-lg font-bold text-slate-800 break-all sm:break-normal">davidgimenes28092006@gmail.com</p>
                </div>
              </div>
              <button 
                onClick={() => handleCopy('davidgimenes28092006@gmail.com', 'email')}
                className="p-3 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-yellow-600 shadow-sm"
              >
                {copiedItem === 'email' ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-yellow-500 transition-all group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white rounded-2xl text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-all shadow-sm">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Repositórios</p>
                  <p className="text-lg font-bold text-slate-800">github.com/DavidRibeiro777</p>
                </div>
              </div>
              <a href="https://github.com/DavidRibeiro777" target="_blank" className="p-3 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-yellow-600 shadow-sm">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Status Inferior */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 px-6 py-2 bg-slate-900 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
            <div className="h-2 w-2 rounded-full bg-green-500 absolute" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Open for work • {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
