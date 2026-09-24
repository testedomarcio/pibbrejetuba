export const site = {
  name: 'Primeira Igreja Batista em Brejetuba',
  short: 'PIB Brejetuba',
  url: 'https://batistabrejetuba.com.br',
  slogan: 'Uma igreja apaixonada por Jesus, profunda em conhecimento e relevante para a cidade.',
  address: 'Av. Firmino Teixeira Griffo, 504 — Centro, Brejetuba — ES',
  maps: 'https://www.google.com/maps/search/?api=1&query=Primeira+Igreja+Batista+em+Brejetuba',
  phone: '+5527998738910',
  phoneDisplay: '(27) 99873-8910',
  whatsapp: 'https://wa.me/5527998738910',
  instagram: 'https://www.instagram.com/batista.brejetuba/',
  email: 'contato@batistabrejetuba.com.br',
  schedule: [
    {day:'Domingo', time:'08h', name:'Escola Bíblica Dominical'},
    {day:'Domingo', time:'19h', name:'Culto de celebração'},
    {day:'Quarta-feira', time:'19h30', name:'Culto de ensino'}
  ]
};
export const navGroups = [
  {
    label: 'Nossa Igreja',
    items: [
      { href: '/quem-somos/', label: 'Quem somos' },
      { href: '/nossa-historia/', label: 'Nossa história' },
      { href: '/no-que-cremos/', label: 'No que cremos' },
      { href: '/lideranca/', label: 'Liderança' },
    ]
  },
  {
    label: 'Ministérios',
    items: [
      { href: '/discipulado/', label: 'Discipulado' },
      { href: '/batismo/', label: 'Batismo' },
      { href: '/escola-biblica/', label: 'Escola Bíblica' },
      { href: '/oracao/', label: 'Oração' },
      { href: '/missoes/', label: 'Missões' },
    ]
  },
  {
    label: 'Recursos',
    items: [
      { href: '/videos/', label: 'Vídeos' },
      { href: '/galeria/', label: 'Galeria' },
      { href: '/documentos/', label: 'Documentos' },
    ]
  }
];

export const mainNavLinks = [
  { href: '/eventos/', label: 'Agenda' },
  { href: '/estudos-biblicos/', label: 'Conhecimento' },
  { href: '/contato/', label: 'Contato' }
];

export const links = [
  { href: '/primeira-visita/', label: 'Primeira visita' },
  { href: '/quero-fazer-parte-da-familia/', label: 'Quero fazer parte da família' },
  ...navGroups.flatMap(g => g.items),
  ...mainNavLinks,
  { href: '/contribua/', label: 'Contribua' }
];
