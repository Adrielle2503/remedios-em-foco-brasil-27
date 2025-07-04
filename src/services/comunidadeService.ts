
export interface PostComunidade {
  id: string;
  usuario: {
    nome: string;
    avatar?: string;
    cidade: 'recife' | 'saopaulo';
  };
  unidadeSaude: {
    id: string;
    nome: string;
    tipo: 'UBS' | 'UPA' | 'Hospital' | 'Farmácia';
    bairro: string;
  };
  conteudo: string;
  tags: string[];
  timestamp: Date;
  likes: number;
  comentarios: number;
  verificado?: boolean;
}

export interface NovoPost {
  unidadeSaudeId: string;
  conteudo: string;
  tags: string[];
  cidade: 'recife' | 'saopaulo';
}

export interface FiltrosBusca {
  cidade?: 'recife' | 'saopaulo';
  tipoUnidade?: string;
  bairro?: string;
  tags?: string[];
  termo?: string;
}

export interface UnidadeSaudeResumo {
  id: string;
  nome: string;
  tipo: 'UBS' | 'UPA' | 'Hospital' | 'Farmácia';
  bairro: string;
}

// Dados simulados de unidades de saúde para seleção
const unidadesSaudeData: UnidadeSaudeResumo[] = [
  // Recife
  { id: '1', nome: 'UBS Boa Viagem', tipo: 'UBS', bairro: 'Boa Viagem' },
  { id: '2', nome: 'UPA Casa Amarela', tipo: 'UPA', bairro: 'Casa Amarela' },
  { id: '3', nome: 'Hospital da Restauração', tipo: 'Hospital', bairro: 'Derby' },
  { id: '4', nome: 'Farmácia Popular Boa Vista', tipo: 'Farmácia', bairro: 'Boa Vista' },
  { id: '5', nome: 'UBS Várzea', tipo: 'UBS', bairro: 'Várzea' },
  { id: '6', nome: 'UBS Imbiribeira', tipo: 'UBS', bairro: 'Imbiribeira' },
  { id: '7', nome: 'UPA Torrões', tipo: 'UPA', bairro: 'Torrões' },
  { id: '8', nome: 'Hospital Getúlio Vargas', tipo: 'Hospital', bairro: 'Cordeiro' },
  { id: '9', nome: 'UBS Pina', tipo: 'UBS', bairro: 'Pina' },
  { id: '10', nome: 'Farmácia Popular Derby', tipo: 'Farmácia', bairro: 'Derby' },
  // São Paulo (algumas unidades exemplo)
  { id: '11', nome: 'UBS Vila Madalena', tipo: 'UBS', bairro: 'Vila Madalena' },
  { id: '12', nome: 'UPA 24h Vergueiro', tipo: 'UPA', bairro: 'Liberdade' },
  { id: '13', nome: 'Hospital das Clínicas', tipo: 'Hospital', bairro: 'Cerqueira César' },
  { id: '14', nome: 'Farmácia Popular Sé', tipo: 'Farmácia', bairro: 'Sé' },
  { id: '15', nome: 'UBS Jardins', tipo: 'UBS', bairro: 'Jardins' }
];

// Dados simulados de posts da comunidade (atualizados)
const postsData: PostComunidade[] = [
  {
    id: '1',
    usuario: {
      nome: 'Maria Santos',
      avatar: '👩‍⚕️',
      cidade: 'recife'
    },
    unidadeSaude: {
      id: '1',
      nome: 'UBS Boa Viagem',
      tipo: 'UBS',
      bairro: 'Boa Viagem'
    },
    conteudo: 'Acabei de ser atendida aqui. Atendimento rápido e medicamentos disponíveis. Parabéns à equipe!',
    tags: ['medicamento', 'atendimento', 'rapido'],
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min atrás
    likes: 12,
    comentarios: 3,
    verificado: true
  },
  {
    id: '2',
    usuario: {
      nome: 'João Silva',
      cidade: 'recife'
    },
    unidadeSaude: {
      id: '2',
      nome: 'UPA Casa Amarela',
      tipo: 'UPA',
      bairro: 'Casa Amarela'
    },
    conteudo: 'Fila grande hoje, cerca de 2h de espera. Pessoal organizando bem, mas recomendo vir cedo.',
    tags: ['espera', 'fila', 'organizacao'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2h atrás
    likes: 8,
    comentarios: 5
  },
  {
    id: '3',
    usuario: {
      nome: 'Ana Costa',
      avatar: '🏥',
      cidade: 'recife'
    },
    unidadeSaude: {
      id: '3',
      nome: 'Hospital da Restauração',
      tipo: 'Hospital',
      bairro: 'Derby'
    },
    conteudo: 'Vacina da gripe disponível até às 16h hoje. Trouxe minha família toda. Equipe muito atenciosa!',
    tags: ['vacinas', 'gripe', 'familia'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4h atrás
    likes: 25,
    comentarios: 8,
    verificado: true
  },
  {
    id: '4',
    usuario: {
      nome: 'Carlos Mendes',
      cidade: 'recife'
    },
    unidadeSaude: {
      id: '4',
      nome: 'Farmácia Popular Boa Vista',
      tipo: 'Farmácia',
      bairro: 'Boa Vista'
    },
    conteudo: 'Insulina em falta novamente. Funcionário disse que chega na próxima semana. Quem precisar, pode tentar a UBS do bairro.',
    tags: ['medicamento', 'falta', 'insulina'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6h atrás
    likes: 15,
    comentarios: 12
  },
  {
    id: '5',
    usuario: {
      nome: 'Lucia Oliveira',
      avatar: '👵',
      cidade: 'recife'
    },
    unidadeSaude: {
      id: '5',
      nome: 'UBS Várzea',
      tipo: 'UBS',
      bairro: 'Várzea'
    },
    conteudo: 'Dr. Roberto está de volta! Agenda aberta para próxima semana. Excelente cardiologista.',
    tags: ['medico', 'cardiologia', 'agenda'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8h atrás
    likes: 18,
    comentarios: 6,
    verificado: true
  }
];

export const buscarPosts = async (filtros?: FiltrosBusca): Promise<PostComunidade[]> => {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let resultados = [...postsData];
  
  if (filtros?.cidade) {
    resultados = resultados.filter(post => post.usuario.cidade === filtros.cidade);
  }
  
  if (filtros?.tipoUnidade && filtros.tipoUnidade !== 'todos') {
    resultados = resultados.filter(post => post.unidadeSaude.tipo === filtros.tipoUnidade);
  }
  
  if (filtros?.bairro && filtros.bairro !== 'todos') {
    resultados = resultados.filter(post => post.unidadeSaude.bairro === filtros.bairro);
  }
  
  if (filtros?.tags && filtros.tags.length > 0) {
    resultados = resultados.filter(post => 
      filtros.tags!.some(tag => post.tags.includes(tag))
    );
  }
  
  if (filtros?.termo) {
    const termo = filtros.termo.toLowerCase();
    resultados = resultados.filter(post => 
      post.conteudo.toLowerCase().includes(termo) ||
      post.unidadeSaude.nome.toLowerCase().includes(termo) ||
      post.tags.some(tag => tag.toLowerCase().includes(termo))
    );
  }
  
  return resultados.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

export const criarPost = async (novoPost: NovoPost): Promise<PostComunidade> => {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const unidadeSelecionada = unidadesSaudeData.find(u => u.id === novoPost.unidadeSaudeId);
  
  const post: PostComunidade = {
    id: Date.now().toString(),
    usuario: {
      nome: 'Você', // Em produção, viria do contexto de autenticação
      cidade: novoPost.cidade
    },
    unidadeSaude: {
      id: unidadeSelecionada?.id || '1',
      nome: unidadeSelecionada?.nome || 'Unidade Selecionada',
      tipo: unidadeSelecionada?.tipo || 'UBS',
      bairro: unidadeSelecionada?.bairro || 'Centro'
    },
    conteudo: novoPost.conteudo,
    tags: novoPost.tags,
    timestamp: new Date(),
    likes: 0,
    comentarios: 0
  };
  
  postsData.unshift(post);
  return post;
};

export const buscarUnidadesSaude = async (cidade: 'recife' | 'saopaulo', termo?: string): Promise<UnidadeSaudeResumo[]> => {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 200));
  
  let resultados = unidadesSaudeData;
  
  // Filtrar por cidade (simulado - em produção seria baseado em dados reais)
  if (cidade === 'recife') {
    resultados = resultados.filter(u => parseInt(u.id) <= 10);
  } else {
    resultados = resultados.filter(u => parseInt(u.id) > 10);
  }
  
  if (termo) {
    const termoBusca = termo.toLowerCase();
    resultados = resultados.filter(unidade =>
      unidade.nome.toLowerCase().includes(termoBusca) ||
      unidade.bairro.toLowerCase().includes(termoBusca)
    );
  }
  
  return resultados;
};

export const getBairros = (cidade: 'recife' | 'saopaulo'): string[] => {
  const unidadesDaCidade = cidade === 'recife' 
    ? unidadesSaudeData.filter(u => parseInt(u.id) <= 10)
    : unidadesSaudeData.filter(u => parseInt(u.id) > 10);
  
  const bairros = [...new Set(unidadesDaCidade.map(u => u.bairro))];
  return bairros.sort();
};

export const getTagsPopulares = (): string[] => {
  return ['medicamento', 'medico', 'espera', 'vacinas', 'atendimento', 'fila', 'lotacao', 'urgencia'];
};

export const getTiposUnidade = (): string[] => {
  return ['UBS', 'UPA', 'Hospital', 'Farmácia'];
};
