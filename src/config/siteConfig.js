/**
 * ═══════════════════════════════════════════════════════════════
 * RAIZ BELEZA & ESTÉTICA — Configuração Central
 * ═══════════════════════════════════════════════════════════════
 *
 * Todos os dados da landing page centralizados aqui.
 * Para alterar textos, links, imagens ou dados de contato,
 * edite somente este arquivo.
 */

export const siteConfig = {

  // ═══════════════════════════════════════════════
  // DADOS CONFIRMADOS
  // ═══════════════════════════════════════════════

  brand: {
    name: 'Florescer Beauty - Estética',
    shortName: 'Florescer',
    tagline: 'Realçando sua beleza',
    logo: '',
  },

  contact: {
    instagram: 'https://www.instagram.com/florescer_beauty.b/',
    instagramHandle: '@florescer_beauty.b',

    // ⚠️ CONFIRMAR antes da publicação definitiva — número identificado na bio
    whatsappNumber: '5562982676833',
    whatsappMessage: 'Olá! Conheci a Florescer Beauty pelo site e gostaria de agendar um horário.',
  },

  address: {
    full: 'R. MDV 4, 1 - Moinho dos Ventos, Goiânia - GO',
    street: 'R. MDV 4, 1',
    neighborhood: 'Moinho dos Ventos',
    city: 'Goiânia',
    state: 'GO',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Florescer+Beauty+Estetica+Goiania',
  },

  // ═══════════════════════════════════════════════
  // PENDENTE: Inserir URL oficial do sistema de agendamento.
  // Enquanto estiver vazio, os botões redirecionam ao WhatsApp.
  // ═══════════════════════════════════════════════
  bookingUrl: '',

  // ═══════════════════════════════════════════════
  // IMAGENS
  // ═══════════════════════════════════════════════

  images: {
    // ✅ REAIS — fotos do salão
    salonInterior: '/images/salon-interior.jpg',
    salonReception: '/images/salon-reception.jpg',

    // ⚠️ PLACEHOLDER — Substituir por fotos reais antes de publicar
    hero: '/images/placeholder/hero-placeholder.webp',
    serviceCabelos: '/images/placeholder/service-cabelos.webp',
    serviceMaosPes: '/images/placeholder/service-maos-pes.webp',
    serviceEstetica: '/images/placeholder/service-estetica.webp',
    serviceSobrancelhas: '/images/placeholder/service-sobrancelhas.webp',
    serviceCombos: '/images/placeholder/service-combos.webp',
  },

  // ═══════════════════════════════════════════════
  // HERO
  // ═══════════════════════════════════════════════

  hero: {
    eyebrow: 'FLORESCER • BELEZA & ESTÉTICA',
    title: 'Realçando sua beleza',
    subtitle: 'Um espaço completo para cuidar dos seus cabelos, unhas, estética corporal e bem-estar em um só lugar.',
    ctaPrimary: 'Agendar meu momento',
    ctaSecondary: 'Conhecer os serviços',
    location: 'Moinho dos Ventos, Goiânia',
    badge: 'Cuidado & Beleza',
    desktopImage: '/images/placeholder/hero-placeholder.webp',
    mobileImage: '/images/placeholder/hero-placeholder.webp',
    imageAlt: 'Cliente com cabelos bem cuidados em ambiente acolhedor',
  },

  // ═══════════════════════════════════════════════
  // ANTES E DEPOIS (BEFORE/AFTER)
  // ═══════════════════════════════════════════════

  beforeAfter: {
    enabled: true,
    title: 'Resultados que revelam cada detalhe.',
    description: 'Deslize para acompanhar a transformação e perceber o cuidado presente em cada etapa.',
    beforeImage: '/images/results/before.jpg',
    afterImage: '/images/results/after.jpg',
    beforeAlt: 'Cabelo antes do atendimento realizado pela Florescer Beauty',
    afterAlt: 'Resultado do cabelo após o atendimento realizado pela Florescer Beauty',
  },

  // ═══════════════════════════════════════════════
  // FAIXA DE CREDIBILIDADE
  // ═══════════════════════════════════════════════

  trustItems: [
    {
      title: 'Atendimento personalizado',
      description: 'Atenção em cada detalhe do seu momento',
    },
    {
      title: 'Ambiente acolhedor',
      description: 'Espaço pensado para o seu conforto',
    },
    {
      title: 'Profissionais especializados',
      description: 'Equipe dedicada à sua beleza',
    },
    {
      title: 'Mais de 7 anos',
      description: 'De experiência e dedicação',
    },
  ],

  // ═══════════════════════════════════════════════
  // SERVIÇOS (visão resumida, não catálogo)
  // ═══════════════════════════════════════════════

  services: [
    {
      id: 'planos-mensais',
      title: 'Planos Mensais',
      description: 'Nali Premium (R$ 240) • Nali Cor da Semana (R$ 180) • Nali Premium Gel (R$ 300)',
      image: '/images/placeholder/service-cabelos.webp',
      placeholderText: 'Planos Mensais',
    },
    {
      id: 'unhas-tradicionais',
      title: 'Unhas Tradicionais',
      description: 'Manicure (R$ 35) • Pedicure (R$ 40) • Combinado (R$ 60) • Combinado Completo (R$ 70)',
      image: '/images/placeholder/service-maos-pes.webp',
      placeholderText: 'Unhas',
    },
    {
      id: 'esmaltacao-gel',
      title: 'Esmaltação em Gel & Assistência',
      description: 'Manutenção e cuidado especializado para esmaltação em gel.',
      image: '/images/placeholder/service-estetica.webp',
      placeholderText: 'Esmaltação em',
    },
    {
      id: 'alongamento-unhas',
      title: 'Alongamento de Unhas',
      description: 'Alongamentos em gel, fibra de vidro e manutenções.',
      image: '/images/placeholder/service-sobrancelhas.webp',
      placeholderText: 'Alongamento de',
    },
  ],

  // ═══════════════════════════════════════════════
  // EXPERIÊNCIA
  // ═══════════════════════════════════════════════

  experience: {
    title: 'Seu momento começa antes do resultado.',
    text: 'Na Florescer Beauty, cada detalhe foi pensado para que você desacelere, se cuide e saia se sentindo ainda mais confiante.',
    ctaText: 'Conhecer o espaço',
  },

  // ═══════════════════════════════════════════════
  // SOBRE
  // ═══════════════════════════════════════════════

  about: {
    title: 'Cuidado que valoriza quem você é.',
    text: 'A Florescer Beauty nasceu para transformar o cuidado pessoal em uma experiência leve, acolhedora e especial. Reunimos diferentes serviços em um só espaço para que cada cliente encontre tempo para si e atenção em cada detalhe, no Moinho dos Ventos em Goiânia.',
  },

  // ═══════════════════════════════════════════════
  // CTA FINAL
  // ═══════════════════════════════════════════════

  finalCta: {
    title: 'Seu próximo momento de cuidado começa aqui.',
    text: 'Escolha o serviço ideal para você e reserve seu horário na Florescer Beauty.',
    ctaPrimary: 'Quero agendar',
    ctaSecondary: 'Falar pelo WhatsApp',
  },

  // ═══════════════════════════════════════════════
  // CONTEÚDO PENDENTE — seções ocultas enquanto vazio
  // ═══════════════════════════════════════════════

  /** Depoimentos reais. Seção oculta quando array vazio. */
  testimonials: [
    { name: 'BRUNA SILVA', text: 'Já fui diversas vezes e sempre fui muito bem atendida, do início ao fim. Os serviços são de primeira. Virou meu salão xodó.', rating: 5 },
    { name: 'ANA CLARA', text: 'Excelente atendimento e profissionais super qualificados. O ambiente é muito acolhedor.', rating: 5 },
  ],

  /** Resultados / transformações reais. Seção oculta quando array vazio. */
  results: [
    { title: 'Mega Hair', category: 'Mega Hair' },
    { title: 'Morena Iluminada', category: 'Mechas' },
    { title: 'Loiro Saudável', category: 'Mechas' },
    { title: 'Corte Moderno', category: 'Corte' },
  ],
  // { title: 'Descrição', image: '/images/results/foto.webp', category: 'Cabelos' }

  // ═══════════════════════════════════════════════
  // NAVEGAÇÃO
  // ═══════════════════════════════════════════════

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Espaço', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],

  // ═══════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════

  footer: {
    copyright: `© ${new Date().getFullYear()} Florescer Beauty. Todos os direitos reservados.`,
    privacyText: 'Política de Privacidade',
    privacyUrl: '#', // PENDENTE: inserir URL da política de privacidade
  },
};
