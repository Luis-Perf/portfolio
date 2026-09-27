export const languages = { pt: 'pt-BR', en: 'en' } as const;
export type Lang = keyof typeof languages;

const pt = {
  meta: {
    title: 'Luis Felipe Perfeito — Desenvolvedor de Software',
    description:
      'Integrações, automações e sites sob medida para pequenas e médias empresas que querem crescer sem depender de planilha, retrabalho e processo manual.',
    ogLocale: 'pt_BR',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    switchLanguage: 'Read this page in English',
    darkTheme: 'Tema escuro',
    opensInNewTab: '(abre em nova aba)',
  },
  sections: {
    services: { id: 'servicos', title: 'O que eu faço' },
    approach: { id: 'como-eu-trabalho', title: 'Como eu trabalho' },
    projects: { id: 'projetos', title: 'Projetos' },
    career: { id: 'trajetoria', title: 'Trajetória' },
    about: { id: 'sobre', title: 'Sobre' },
    contact: { id: 'contato', title: 'Contato' },
  },
  hero: {
    eyebrow: 'Luis Felipe Perfeito · Desenvolvedor de Software',
    titleStart: 'Faço os sistemas da sua empresa',
    titleHighlight: 'trabalharem juntos.',
    lead: 'Sou Luis Felipe Perfeito, desenvolvedor de software. Crio integrações, automações e sites sob medida para pequenas e médias empresas que querem crescer sem depender de planilha, retrabalho e processo manual.',
    primaryCta: 'Conversar no WhatsApp',
    secondaryCta: 'Ver projetos',
    diagram: {
      title: 'Sistemas conectados',
      description:
        'Diagrama: loja, sistema de gestão, banco e fornecedores ligados à sua empresa, trocando pedidos, estoque, pagamentos e entregas.',
      hub: 'Sua empresa',
      hubCaption: 'em sincronia',
      nodes: { store: 'Loja', erp: 'Gestão', bank: 'Banco', suppliers: 'Fornecedores' },
      flows: { store: 'pedidos', erp: 'estoque', bank: 'pagamentos', suppliers: 'entregas' },
      figure: 'Fig. 01 — Sistemas conectados',
    },
  },
  services: [
    {
      title: 'Integrações sob medida',
      text: 'Sua loja, seu sistema de gestão, seu banco e seus fornecedores trocando informação sozinhos, sem ninguém copiando dados de uma tela para outra.',
    },
    {
      title: 'Automações',
      text: 'Tarefas repetitivas viram processos automáticos, como relatórios, conferências, cobranças e avisos.',
    },
    {
      title: 'Sites e sistemas web',
      text: 'Do site institucional ao painel de gestão, rápido, seguro e fácil de manter.',
    },
  ],
  approach: [
    {
      title: 'Entendo o negócio antes do código.',
      text: 'Já passei dias em canteiro de obra para entender a rotina antes de escrever uma linha.',
    },
    {
      title: 'Testo antes de entregar.',
      text: 'Comecei a carreira em qualidade de software, e esse cuidado continua em tudo que faço.',
    },
    {
      title: 'Penso no seu crescimento.',
      text: 'O sistema precisa acompanhar o negócio no dia em que o volume dobrar.',
    },
    {
      title: 'Decido com dados.',
      text: 'Relatórios e indicadores fazem parte da entrega.',
    },
  ],
  projects: {
    caseLabel: 'Case',
    readMore: 'Ler o case completo',
    tools: 'Ferramentas',
    results: 'Resultados',
    backToProjects: 'Todos os projetos',
    nextCase: 'Próximo case',
    ctaTitle: 'Quer algo assim na sua empresa?',
  },
  career: {
    current: 'atual',
    items: [
      { year: '2021', role: 'Estágio em Qualidade de Software', company: 'Alper Consultoria em Seguros' },
      { year: '2023', role: 'Desenvolvedor Full Stack', company: 'Engenharia Braga' },
      { year: '2026', role: 'Desenvolvedor Back-end Pleno', company: 'MillionsPay' },
    ],
  },
  about: {
    text: 'Comecei em 2021 testando software numa empresa de seguros, e aprendi cedo que sistema bom é aquele que não falha quando alguém depende dele. Depois fui para uma construtora, onde passei tanto tempo na obra quanto no código. Hoje trabalho com pagamentos, onde cada transação importa. Em comum entre tudo isso: áreas diferentes precisando que a informação chegue certa, na hora certa. É isso que eu construo.',
    photoAlt: 'Luis Felipe Perfeito, de camisa azul, com as mãos apoiadas sob o queixo, olhando para o lado.',
    photoCaption: 'Fig. 02 — Luis Felipe Perfeito',
    educationTitle: 'Formação',
    education: [
      { course: 'Bacharelado em Ciência da Computação', school: 'Universidade São Judas Tadeu', period: '2019–2022' },
      { course: 'Pós-graduação em Inteligência Artificial', school: 'Instituto de Ensino e Pesquisa do Hospital Sírio-Libanês', period: 'concluída em 2026' },
      { course: 'Pós-graduação em Engenharia de Software', school: 'Instituto de Ensino e Pesquisa do Hospital Sírio-Libanês', period: 'em andamento' },
    ],
    complementaryTitle: 'Complementar',
    complementary: [
      'Bootcamp em Análise de Dados (Mate Academy)',
      'Trilha AWS Certified Machine Learning',
      'Análise de Dados Google/Coursera (em andamento)',
    ],
  },
  contact: {
    title: 'Vamos conversar?',
    text: 'Me conte o que está travando na sua operação. A primeira conversa é pelo WhatsApp, sem compromisso.',
    whatsapp: 'Conversar no WhatsApp',
    saveContact: 'Salvar contato',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  whatsapp: {
    fallback: 'Olá, Luis! Vi seu portfólio e tenho um projeto que gostaria de conversar.',
    template: '{greeting}, Luis! Vi seu portfólio e tenho um projeto que gostaria de conversar.',
    greetings: ['Bom dia', 'Boa tarde', 'Boa noite'],
  },
  footer: {
    role: 'Desenvolvedor de Software',
    elsewhere: 'Redes',
  },
  notFound: {
    title: 'Página não encontrada',
    text: 'Essa página não existe ou mudou de lugar.',
    back: 'Voltar para o início',
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    title: 'Luis Felipe Perfeito — Software Developer',
    description:
      'Custom integrations, automations and websites for small and mid-sized businesses that want to grow without relying on spreadsheets, rework and manual processes.',
    ogLocale: 'en_US',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    switchLanguage: 'Ler esta página em português',
    darkTheme: 'Dark theme',
    opensInNewTab: '(opens in a new tab)',
  },
  sections: {
    services: { id: 'services', title: 'What I do' },
    approach: { id: 'how-i-work', title: 'How I work' },
    projects: { id: 'projects', title: 'Projects' },
    career: { id: 'career', title: 'Career' },
    about: { id: 'about', title: 'About' },
    contact: { id: 'contact', title: 'Contact' },
  },
  hero: {
    eyebrow: 'Luis Felipe Perfeito · Software Developer',
    titleStart: 'I make your company’s systems',
    titleHighlight: 'work together.',
    lead: 'I’m Luis Felipe Perfeito, a software developer. I build custom integrations, automations and websites for small and mid-sized businesses that want to grow without relying on spreadsheets, rework and manual processes.',
    primaryCta: 'Chat on WhatsApp',
    secondaryCta: 'See projects',
    diagram: {
      title: 'Connected systems',
      description:
        'Diagram: store, management system, bank and suppliers connected to your company, exchanging orders, inventory, payments and deliveries.',
      hub: 'Your company',
      hubCaption: 'in sync',
      nodes: { store: 'Store', erp: 'Management', bank: 'Bank', suppliers: 'Suppliers' },
      flows: { store: 'orders', erp: 'inventory', bank: 'payments', suppliers: 'deliveries' },
      figure: 'Fig. 01 — Connected systems',
    },
  },
  services: [
    {
      title: 'Custom integrations',
      text: 'Your store, your management system, your bank and your suppliers exchanging information on their own, with nobody copying data from one screen to another.',
    },
    {
      title: 'Automations',
      text: 'Repetitive tasks become automatic processes, like reports, reconciliations, billing and notifications.',
    },
    {
      title: 'Websites and web systems',
      text: 'From a company website to a management dashboard: fast, secure and easy to maintain.',
    },
  ],
  approach: [
    {
      title: 'I understand the business before the code.',
      text: 'I’ve spent days on construction sites to understand the routine before writing a single line.',
    },
    {
      title: 'I test before I deliver.',
      text: 'I started my career in software quality, and that care carries into everything I do.',
    },
    {
      title: 'I think about your growth.',
      text: 'The system has to keep up with the business on the day your volume doubles.',
    },
    {
      title: 'I decide with data.',
      text: 'Reports and metrics are part of the delivery.',
    },
  ],
  projects: {
    caseLabel: 'Case',
    readMore: 'Read the full case',
    tools: 'Tools',
    results: 'Results',
    backToProjects: 'All projects',
    nextCase: 'Next case',
    ctaTitle: 'Want something like this in your company?',
  },
  career: {
    current: 'current',
    items: [
      { year: '2021', role: 'Software Quality Intern', company: 'Alper Consultoria em Seguros' },
      { year: '2023', role: 'Full Stack Developer', company: 'Engenharia Braga' },
      { year: '2026', role: 'Mid-level Back-end Developer', company: 'MillionsPay' },
    ],
  },
  about: {
    text: 'I started in 2021 testing software at an insurance company, and learned early that a good system is one that doesn’t fail when someone depends on it. Then I moved to a construction company, where I spent as much time on site as in the code. Today I work with payments, where every transaction matters. What all of this has in common: different areas needing information to arrive right, and on time. That’s what I build.',
    photoAlt: 'Luis Felipe Perfeito in a blue shirt, chin resting on clasped hands, looking to the side.',
    photoCaption: 'Fig. 02 — Luis Felipe Perfeito',
    educationTitle: 'Education',
    education: [
      { course: 'B.Sc. in Computer Science', school: 'Universidade São Judas Tadeu', period: '2019–2022' },
      { course: 'Postgraduate degree in Artificial Intelligence', school: 'Instituto de Ensino e Pesquisa do Hospital Sírio-Libanês', period: 'completed in 2026' },
      { course: 'Postgraduate degree in Software Engineering', school: 'Instituto de Ensino e Pesquisa do Hospital Sírio-Libanês', period: 'in progress' },
    ],
    complementaryTitle: 'Additional',
    complementary: [
      'Data Analytics Bootcamp (Mate Academy)',
      'AWS Certified Machine Learning track',
      'Google Data Analytics on Coursera (in progress)',
    ],
  },
  contact: {
    title: 'Let’s talk?',
    text: 'Tell me what’s holding your operation back. The first conversation happens on WhatsApp, with no strings attached.',
    whatsapp: 'Chat on WhatsApp',
    saveContact: 'Save contact',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  whatsapp: {
    fallback: 'Hi, Luis! I saw your portfolio and I have a project I’d like to talk about.',
    template: '{greeting}, Luis! I saw your portfolio and I have a project I’d like to talk about.',
    greetings: ['Good morning', 'Good afternoon', 'Good evening'],
  },
  footer: {
    role: 'Software Developer',
    elsewhere: 'Elsewhere',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page doesn’t exist or has moved.',
    back: 'Back to home',
  },
};

export const ui: Record<Lang, Dictionary> = { pt, en };

export const useTranslations = (lang: Lang): Dictionary => ui[lang];
