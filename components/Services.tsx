import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, GitBranch } from 'lucide-react';

const FRONTEND_SKILLS = [
  {
    id: 1,
    icon: Code,
    title: 'React & TypeScript',
    description: 'Desenvolvimento moderno com as melhores práticas do ecossistema React.',
    highlights: [
      'Componentes reutilizáveis',
      'Type Safety com TypeScript',
      'Hooks e Context API',
      'Gerenciamento de estado'
    ]
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Interfaces que funcionam perfeitamente em todos os dispositivos.',
    highlights: [
      'Mobile-first approach',
      'Tailwind CSS & Flexbox/Grid',
      'Cross-browser compatibility',
      'Performance mobile'
    ]
  },
  {
    id: 3,
    icon: GitBranch,
    title: 'Version Control',
    description: 'Fluxo de trabalho organizado e colaboração eficiente.',
    highlights: [
      'Git flow organizado',
      'Code reviews',
      'CI/CD pipelines',
      'Boas práticas de commit'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
              Habilidades Principais
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            O que faço{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              melhor
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Foco em desenvolvimento Front-End com React, TypeScript e boas práticas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FRONTEND_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-amber-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 border border-amber-200">
                <skill.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {skill.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              <ul className="space-y-3">
                {skill.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};