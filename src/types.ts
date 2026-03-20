export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  lecture: string;
  workshop: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  type: 'palestra' | 'workshop';
  speaker?: string;
}

export interface DaySchedule {
  date: string;
  label: string;
  highlights: string[];
  items: ScheduleItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface PromiseItem {
  id: string;
  title: string;
  description: string;
  icon: 'Zap' | 'Star' | 'Users' | 'CheckCircle2';
}

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Paula Leão',
    role: 'Especialista em Pilates Kids e Teens',
    bio: 'Referência nacional no método clássico, Paula traz uma abordagem purista e transformadora para o movimento.',
    lecture: 'A Essência do Contrology',
    workshop: 'Pilates na Escola',
    image: '/Foto-PaulaLeao.png'
  },
  {
    id: '2',
    name: 'Janaína Cintas',
    role: 'Fisioterapeuta Especialista',
    bio: 'Com vasta experiência em reabilitação, Janaína conecta a ciência da fisioterapia com a prática do Pilates.',
    lecture: 'Coluna Vertebral: Mitos e Verdades',
    workshop: 'Avaliação e Tratamento Avançado',
    image: '/FotoJanaina.png'
  },
  {
    id: '3',
    name: 'Ge Gurak',
    role: 'Master Trainer em Saúde da Mulher',
    bio: 'Especialista em saúde feminina, Ge Gurak aborda as fases da vida da mulher e como o Pilates atua em cada uma delas.',
    lecture: 'Pilates e Saúde da Mulher',
    workshop: 'Mulheres 40+: Climatério e Menopausa',
    image: '/Foto-Gegurak.png'
  }
];

export const SCHEDULE: DaySchedule[] = [
  {
    date: '15 de Maio',
    label: 'Sexta',
    highlights: [
      'Credenciamento',
      'Palestras Magnas',
      'Networking'
    ],
    items: [
      { time: '15:00', title: 'Credenciamento'},
      { time: '15:30', title: 'Abertura no Anfiteatro'},
      { time: '16:00', title: 'Palestra com Paula Leão', speaker: 'Paula Leão', type: 'palestra' },
      { time: '17:00', title: 'Palestra com Janaína Cintas', speaker: 'Janaína Cintas', type: 'palestra' },
      { time: '18:00', title: 'Palestra com Ge Gurak', speaker: 'Ge Gurak', type: 'palestra' },
      { time: '19:00', title: 'Encerramento'}
    ]
  },
  {
    date: '16 de Maio',
    label: 'Sábado',
    highlights: [
      'Workshops Práticos',
      'Imersão Técnica',
      'Estudos de Caso'
    ],
    items: [
      { time: '09:00', title: 'Workshop: Pilates Kids e Teens', speaker: 'Paula Leão', type: 'workshop' },
      { time: '12:00', title: 'Almoço'},
      { time: '13:00', title: 'Workshop: Pilates Clínico - Enfrentando as Patologias', speaker: 'Janaína Cintas', type: 'workshop' },
      { time: '16:00', title: 'Coffee Break'},
      { time: '16:30', title: 'Workshop: Mulheres 40+', speaker: 'Ge Gurak', type: 'workshop' },
      { time: '19:30', title: 'Encerramento'}
    ]
  },
  {
    date: '17 de Maio',
    label: 'Domingo',
    highlights: [
      'Prática Coletiva',
      'Debate Aberto',
      'Encerramento'
    ],
    items: [
      { time: '08:00', title: 'Método Garuda', speaker: 'Ge Gurak', type: 'workshop' },
      { time: '09:00', title: 'Hipopressivo', speaker: 'Janaína Cintas', type: 'workshop' },
      { time: '10:00', title: 'Divertindo como Criança', speaker: 'Paula Leão', type: 'workshop' },
      { time: '11:00', title: 'Mesa Redonda no Anfiteatro'}
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana Martins',
    role: 'Dona de Estúdio',
    text: 'O evento mudou minha percepção sobre o Pilates. Saí de lá com ferramentas práticas que apliquei no dia seguinte com meus alunos.',
    image: 'https://picsum.photos/seed/person1/200/200'
  },
  {
    id: '2',
    name: 'Ricardo Santos',
    role: 'Fisioterapeuta',
    text: 'A qualidade técnica das palestrantes é impressionante. O networking que fiz no evento me rendeu parcerias incríveis.',
    image: 'https://picsum.photos/seed/person2/200/200'
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Educadora Física',
    text: 'Uma experiência de excelência. A organização é impecável e o conteúdo é de altíssimo nível. Recomendo a todos os profissionais.',
    image: 'https://picsum.photos/seed/person3/200/200'
  },
  {
    id: '4',
    name: 'Marcos Oliveira',
    role: 'Instrutor de Pilates',
    text: 'O melhor investimento que fiz na minha carreira este ano. A troca de experiências foi fundamental para meu crescimento.',
    image: 'https://picsum.photos/seed/person4/200/200'
  },
  {
    id: '5',
    name: 'Patrícia Souza',
    role: 'Dona de Estúdio',
    text: 'Superou todas as minhas expectativas. A organização e o nível técnico são incomparáveis no Brasil.',
    image: 'https://picsum.photos/seed/person5/200/200'
  },
  {
    id: '6',
    name: 'Gabriel Costa',
    role: 'Fisioterapeuta',
    text: 'Evento essencial para quem quer se manter atualizado com as melhores práticas mundiais do Pilates.',
    image: 'https://picsum.photos/seed/person6/200/200'
  }
];

export const PROMISES: PromiseItem[] = [
  {
    id: '1',
    title: 'Transformação Técnica',
    description: 'Domine as técnicas mais avançadas do mercado e eleve o padrão do seu atendimento.',
    icon: 'Zap'
  },
  {
    id: '2',
    title: 'Reconhecimento',
    description: 'Torne-se uma autoridade no seu nicho e seja reconhecido como um profissional de elite.',
    icon: 'Star'
  },
  {
    id: '3',
    title: 'Comunidade Forte',
    description: 'Faça parte de uma rede exclusiva de profissionais que buscam a excelência constante.',
    icon: 'Users'
  }
];
