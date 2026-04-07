import type { DaySchedule, PromiseItem, Speaker, Testimonial } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Paula Leão',
    role: 'Fisioterapeuta e Especialista em Pilates Pediátrico',
    tags: [
      'Desenvolvimento de Metodologias',
      'Reabilitação Pediátrica',
      'Formação Profissional',
    ],
    bio: 'Paula Leão é fisioterapeuta há 20 anos, com certificação internacional pela Pilates Method Alliance (PMA®). Atua na área de reabilitação e educação do movimento, com foco em prevenção na infância.\n\nÉ criadora da metodologia Pilates na Escola, proposta estruturada para a aplicação do método Pilates em crianças e adolescentes no ambiente escolar, com base no desenvolvimento motor, organização postural e promoção de saúde.\n\nDesde 2016, ministra cursos e formações no Brasil e no exterior, capacitando profissionais da saúde e do movimento para a aplicação segura e sistematizada do método em populações pediátricas. É referência na implementação do Pilates no contexto escolar e na formação de especialistas na área.',
    lecture: 'Desenvolvimento de Metodologias, Reabilitação Pediátrica e Formação Profissional',
    workshop: 'Pilates na Escola',
    image: 'images/speakers/foto-paula-leao.png',
  },
  {
    id: '2',
    name: 'Janaína Cintas',
    role: 'Fisioterapeuta Especialista',
    tags: [
      'Pilates Clínico Baseado em Evidências',
      'Biomecânica e Cadeias Musculares',
      'Formação de Profissionais do Movimento',
    ],
    bio: 'Fisioterapeuta há 30 anos, escritora e bicampeã, Janaína Cintas é referência na integração entre ciência e aplicação clínica do método Pilates. Criadora de mais de 15 cursos e formações para fisioterapeutas, instrutores de Pilates e profissionais de Educação Física, atua na capacitação técnica e estratégica de profissionais do movimento.\n\nAutora de quatro livros publicados e premiados, ministra cursos e palestras no Brasil e na Europa, difundindo conteúdos fundamentados em evidências científicas e voltados à prática clínica segura.\n\nSeu trabalho abrange Cadeias Musculares aplicadas ao Pilates, Biomecânica do Power House, Avaliação Postural e tratamento da dor, com foco na excelência profissional e no fortalecimento da autoridade no mercado.',
    lecture: 'Coluna Vertebral: Mitos e Verdades',
    workshop: 'Avaliação e Tratamento Avançado',
    image: 'images/speakers/foto-janaina.png',
  },
  {
    id: '3',
    name: 'Ge Gurak',
    role: 'Master Trainer em Saúde da Mulher',
    tags: [
      'Expansão e Estruturação de Estúdios',
      'Formação e Mentoria Profissional',
      'Estratégia e Profissionalização do Pilates',
    ],
    bio: 'Profissional de Educação Física com 28 anos de atuação no mercado de Pilates, reconhecida por sua contribuição ao desenvolvimento e à profissionalização do setor no Brasil e na América Latina.\n\nIdealizadora da TcPilates Studios e Cursos, foi pioneira na implantação do modelo de Pilates em grupo com máquinas padronizadas no Brasil, liderando projetos de formação, consultoria e expansão de estúdios.\n\nÉ Master Trainer do Método Garuda, responsável pela formação de professores na América Latina. Palestrante em congressos nacionais e internacionais, contribuiu com o IBGE na Classificação Brasileira de Ocupações (CBO) para o Pilates.',
    lecture: 'Pilates e Saúde da Mulher',
    workshop: 'Mulheres 40+: Climatério e Menopausa',
    image: 'images/speakers/foto-ge-gurak.png',
  },
];

export const SCHEDULE: DaySchedule[] = [
  {
    date: '15/05',
    label: 'Sexta-feira',
    highlights: ['Credenciamento', 'Palestras Magnas', 'Networking'],
    items: [
      { time: '15:00', title: 'Credenciamento', type: 'atividade' },
      { time: '15:30', title: 'Abertura no Anfiteatro', type: 'atividade' },
      { time: '16:00', title: 'Palestra com a Paula Leão - Pilates na escola', speaker: 'Paula Leão', type: 'palestra' },
      { time: '17:00', title: 'Palestra com a Janaína Cintas - Eficácia do pilates na dor lombar', speaker: 'Janaína Cintas', type: 'palestra' },
      { time: '18:00', title: 'Palestra com Ge Gurak - Pilates aplicado às mulheres na peri e menopausa', speaker: 'Ge Gurak', type: 'palestra' },
      { time: '19:00', title: 'Encerramento', type: 'atividade' },
    ],
  },
  {
    date: '16/05',
    label: 'Sábado',
    highlights: ['Workshops Práticos', 'Imersão Técnica', 'Estudos de Caso'],
    items: [
      { time: '09:00', title: 'Workshop Pilates Kids e Teens', speaker: 'Paula Leão', type: 'workshop' },
      { time: '12:00', title: 'Almoço', type: 'atividade' },
      {
        time: '13:00',
        title: 'Workshop Pilates Clínico - Enfrentando as Patologias',
        speaker: 'Janaína Cintas',
        type: 'workshop',
      },
      { time: '16:00', title: 'Coffee Break', type: 'atividade' },
      { time: '16:30', title: 'Workshop Mulheres 40+', speaker: 'Ge Gurak', type: 'workshop' },
      { time: '19:30', title: 'Encerramento', type: 'atividade' },
    ],
  },
  {
    date: '17/05',
    label: 'Domingo',
    highlights: ['Prática Coletiva', 'Debate Aberto', 'Encerramento'],
    items: [
      { time: '08:00', title: 'Método Garuda', speaker: 'Ge Gurak', type: 'workshop' },
      { time: '09:00', title: 'Hipopressivo', speaker: 'Janaína Cintas', type: 'workshop' },
      { time: '10:00', title: 'Divertindo como Criança', speaker: 'Paula Leão', type: 'workshop' },
      { time: '11:00', title: 'Mesa Redonda no Anfiteatro', type: 'atividade' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana Martins',
    role: 'Dona de Estúdio',
    text: 'O evento mudou minha percepção sobre o Pilates. Saí de lá com ferramentas práticas que apliquei no dia seguinte com meus alunos.',
    image: 'https://picsum.photos/seed/person1/200/200',
  },
  {
    id: '2',
    name: 'Ricardo Santos',
    role: 'Fisioterapeuta',
    text: 'A qualidade técnica das palestrantes é impressionante. O networking que fiz no evento me rendeu parcerias incríveis.',
    image: 'https://picsum.photos/seed/person2/200/200',
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Educadora Física',
    text: 'Uma experiência de excelência. A organização é impecável e o conteúdo é de altíssimo nível. Recomendo a todos os profissionais.',
    image: 'https://picsum.photos/seed/person3/200/200',
  },
  {
    id: '4',
    name: 'Marcos Oliveira',
    role: 'Instrutor de Pilates',
    text: 'O melhor investimento que fiz na minha carreira este ano. A troca de experiências foi fundamental para meu crescimento.',
    image: 'https://picsum.photos/seed/person4/200/200',
  },
  {
    id: '5',
    name: 'Patrícia Souza',
    role: 'Dona de Estúdio',
    text: 'Superou todas as minhas expectativas. A organização e o nível técnico são incomparáveis no Brasil.',
    image: 'https://picsum.photos/seed/person5/200/200',
  },
  {
    id: '6',
    name: 'Gabriel Costa',
    role: 'Fisioterapeuta',
    text: 'Evento essencial para quem quer se manter atualizado com as melhores práticas mundiais do Pilates.',
    image: 'https://picsum.photos/seed/person6/200/200',
  },
];

export const PROMISES: PromiseItem[] = [
  {
    id: '1',
    title: 'Domínio Técnico',
    description: 'Aprenda a biomecânica real por trás de cada exercício e como adaptá-la para cada aluno.',
    icon: 'CheckCircle2',
  },
  {
    id: '2',
    title: 'Networking de Elite',
    description: 'Conecte-se com os maiores nomes do Pilates e crie oportunidades reais de carreira.',
    icon: 'MessageCircle',
  },
  {
    id: '3',
    title: 'Diferenciação',
    description: 'Saia do evento com um selo de excelência que o posiciona no topo do mercado.',
    icon: 'Info',
  },
];
