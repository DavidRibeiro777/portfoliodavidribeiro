import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, User, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge Centralizado - NOVA ADIÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-5 py-2.5 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-700 tracking-wide">
              Sobre Mim
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/david2.jpg" 
                alt="David Ribeiro" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Título Simples */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Minha Historia
              </h2>
              <p className="text-amber-600 font-medium mb-6">
                Conheça mais sobre mim
              </p>
            </div>

            {/* Minha História Real */}
            <div className="space-y-4">
              <p className="text-slate-700">
                Sempre fui curioso sobre tecnologia. Comecei com HTML e CSS básicos, 
                tentando entender como os sites eram feitos. Quando descobri o JavaScript 
                e depois o React, vi que poderia criar coisas muito mais interessantes.
              </p>
              
              <p className="text-slate-700">
                Hoje, foco em desenvolvimento Front-End porque gosto de ver o resultado 
                visual do meu trabalho. Ver um design virar código funcional é gratificante.
              </p>
              
              <p className="text-slate-700">
                Estou sempre aprendendo algo novo. O mundo do Front-End muda rápido, 
                e acompanhar essas mudanças é parte do que torna esse trabalho interessante.
              </p>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white rounded">
                    <Code2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">5 anos</div>
                    <div className="text-sm text-slate-600">na área</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white rounded">
                    <Rocket className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">10+</div>
                    <div className="text-sm text-slate-600">projetos</div>
                  </div>
                </div>
              </div>
            </div>

       
          </motion.div>
        </div>
      </div>
    </section>
  );
};