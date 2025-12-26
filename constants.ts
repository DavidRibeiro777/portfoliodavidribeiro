import { MonitorSmartphone, Layout, Zap, Coffee, ShoppingBag, Camera, Scissors, Stethoscope, Wrench } from 'lucide-react';
import { ServiceItem, PortfolioItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Landing Page Premium',
    description: 'Páginas otimizadas para conversão com design responsivo que se adapta perfeitamente a qualquer dispositivo.',
    icon: MonitorSmartphone,
    features: ['100% responsivo', 'Carregamento ultra-rápido', 'Integração com CRM/Email']
  },
  {
    id: 2,
    title: 'Design Estratégico',
    description: 'Criação visual que combina estética e funcionalidade para maximizar a retenção e vendas.',
    icon: Layout,
    features: ['UI/UX otimizado', 'Identidade visual consistente', 'Prototipagem interativa']
  },
  {
    id: 3,
    title: 'Processo Ágil',
    description: 'Metodologia eficiente que entrega resultados rápidos sem comprometer a qualidade do código.',
    icon: Zap,
    features: ['Entrega rápida', 'Código limpo (SEO)', 'Suporte dedicado']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'Menu Cafeteria',
    category: 'Menu Digital',
    description: 'Cardápio digital elegante para cafeteria artesanal.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    tags: ['Responsivo', 'UI Design'],
    link: 'https://davidribeiro777.github.io/cafeteria/',
    color: 'bg-amber-100 text-amber-800'
  },
  {
    id: 2,
    title: 'Catálogo Moda',
    category: 'E-commerce',
    description: 'Catálogo interativo para coleção Outono/Inverno.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    tags: ['Filtros', 'Moda'],
    link: 'https://davidribeiro777.github.io/catalogonew/',
    color: 'bg-pink-100 text-pink-800'
  },
 {
  id: 3,
  title: 'Portfolio Fotografia',
  category: 'Portfólio',
  description: 'Showcase minimalista para fotógrafo profissional.',
  image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1000&auto=format&fit=crop', // Link da nova imagem
  tags: ['Galeria', 'Minimalismo'],
  link: 'https://davidribeiro777.github.io/fotografo/',
  color: 'bg-purple-100 text-purple-800'
},
  {
    id: 4,
    title: 'Studio Manicure',
    category: 'Beleza',
    description: 'Agendamento e galeria para estúdio de unhas.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    tags: ['Estética', 'Serviços'],
    link: 'https://davidribeiro777.github.io/manicure/',
    color: 'bg-rose-100 text-rose-800'
  },
  {
    id: 5,
    title: 'Doutora Clínica',
    category: 'Saúde',
    description: 'Site institucional para médica clínica geral.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    tags: ['Institucional', 'Responsivo'],
    link: 'https://davidribeiro777.github.io/doutora/',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 6,
    title: 'Auto Mecânica',
    category: 'Automotivo',
    description: 'Landing page para oficina especializada.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop',
    tags: ['Pequeno Negocio', 'Landing Page'],
    link: 'https://davidribeiro777.github.io/oficina/',
    color: 'bg-slate-200 text-slate-800'
  }
];
