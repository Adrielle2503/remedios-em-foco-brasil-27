
export interface UnidadeSaude {
  id: string;
  nome: string;
  tipo: 'UBS' | 'UPA' | 'Policlínica' | 'Centro de Saúde';
  endereco: string;
  bairro: string;
  regiao: string;
  telefone?: string;
  horario: string;
  servicos: string[];
  coordenadas?: {
    lat: number;
    lng: number;
  };
}

// Dados baseados nas unidades de saúde do Recife
const unidadesData: UnidadeSaude[] = [
  // Região Norte
  {
    id: '1',
    nome: 'UBS Alto do Mandu',
    tipo: 'UBS',
    endereco: 'Rua Alto do Mandu, s/n',
    bairro: 'Alto do Mandu',
    regiao: 'Norte',
    telefone: '(81) 3355-8901',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Ginecologia', 'Enfermagem', 'Odontologia'],
    coordenadas: { lat: -8.0176, lng: -34.8755 }
  },
  {
    id: '2',
    nome: 'UBS Casa Amarela',
    tipo: 'UBS',
    endereco: 'Estrada do Arraial, 1234',
    bairro: 'Casa Amarela',
    regiao: 'Norte',
    telefone: '(81) 3355-5678',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Enfermagem', 'Vacinação'],
    coordenadas: { lat: -8.0389, lng: -34.9067 }
  },
  {
    id: '3',
    nome: 'UBS Nova Descoberta',
    tipo: 'UBS',
    endereco: 'Rua Nova Descoberta, 456',
    bairro: 'Nova Descoberta',
    regiao: 'Norte',
    telefone: '(81) 3355-2345',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Hipertensão', 'Diabetes', 'Enfermagem'],
    coordenadas: { lat: -8.0234, lng: -34.8923 }
  },
  // Região Sul
  {
    id: '4',
    nome: 'UBS Boa Viagem',
    tipo: 'UBS',
    endereco: 'Av. Boa Viagem, 3456',
    bairro: 'Boa Viagem',
    regiao: 'Sul',
    telefone: '(81) 3355-1234',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Cardiologia', 'Enfermagem', 'Odontologia', 'Fisioterapia'],
    coordenadas: { lat: -8.1131, lng: -34.8901 }
  },
  {
    id: '5',
    nome: 'UBS Imbiribeira',
    tipo: 'UBS',
    endereco: 'Rua da Imbiribeira, 789',
    bairro: 'Imbiribeira',
    regiao: 'Sul',
    telefone: '(81) 3355-3456',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Ginecologia', 'Enfermagem'],
    coordenadas: { lat: -8.1089, lng: -34.8756 }
  },
  {
    id: '6',
    nome: 'UBS Pina',
    tipo: 'UBS',
    endereco: 'Rua do Pina, 234',
    bairro: 'Pina',
    regiao: 'Sul',
    telefone: '(81) 3355-4567',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Saúde da Mulher', 'Enfermagem', 'Vacinação'],
    coordenadas: { lat: -8.0945, lng: -34.8823 }
  },
  // Região Oeste
  {
    id: '7',
    nome: 'UBS Várzea',
    tipo: 'UBS',
    endereco: 'Rua da Várzea, 567',
    bairro: 'Várzea',
    regiao: 'Oeste',
    telefone: '(81) 3355-2468',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Saúde Mental', 'Enfermagem'],
    coordenadas: { lat: -8.0434, lng: -34.9456 }
  },
  {
    id: '8',
    nome: 'UBS Jardim São Paulo',
    tipo: 'UBS',
    endereco: 'Av. Jardim São Paulo, 890',
    bairro: 'Jardim São Paulo',
    regiao: 'Oeste',
    telefone: '(81) 3355-5789',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Hipertensão', 'Diabetes', 'Odontologia'],
    coordenadas: { lat: -8.0523, lng: -34.9234 }
  },
  // Região Centro
  {
    id: '9',
    nome: 'UBS Derby',
    tipo: 'UBS',
    endereco: 'Rua do Derby, 123',
    bairro: 'Derby',
    regiao: 'Centro',
    telefone: '(81) 3355-6789',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Enfermagem', 'Vacinação', 'Curativo'],
    coordenadas: { lat: -8.0589, lng: -34.8834 }
  },
  {
    id: '10',
    nome: 'UBS Ilha do Leite',
    tipo: 'UBS',
    endereco: 'Rua da Ilha do Leite, 456',
    bairro: 'Ilha do Leite',
    regiao: 'Centro',
    telefone: '(81) 3355-7890',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Ginecologia', 'Enfermagem'],
    coordenadas: { lat: -8.0634, lng: -34.8789 }
  }
];

export const buscarUnidades = async (filtros?: {
  regiao?: string;
  tipo?: string;
  servico?: string;
  termo?: string;
}): Promise<UnidadeSaude[]> => {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let resultados = [...unidadesData];
  
  if (filtros?.regiao && filtros.regiao !== 'todas') {
    resultados = resultados.filter(unidade => 
      unidade.regiao.toLowerCase() === filtros.regiao?.toLowerCase()
    );
  }
  
  if (filtros?.tipo && filtros.tipo !== 'todos') {
    resultados = resultados.filter(unidade => 
      unidade.tipo === filtros.tipo
    );
  }
  
  if (filtros?.servico && filtros.servico !== 'todos') {
    resultados = resultados.filter(unidade => 
      unidade.servicos.some(servico => 
        servico.toLowerCase().includes(filtros.servico?.toLowerCase() || '')
      )
    );
  }
  
  if (filtros?.termo) {
    const termo = filtros.termo.toLowerCase();
    resultados = resultados.filter(unidade =>
      unidade.nome.toLowerCase().includes(termo) ||
      unidade.bairro.toLowerCase().includes(termo) ||
      unidade.endereco.toLowerCase().includes(termo)
    );
  }
  
  return resultados;
};

export const getRegioes = (): string[] => {
  return ['Norte', 'Sul', 'Centro', 'Oeste'];
};

export const getServicos = (): string[] => {
  const servicos = new Set<string>();
  unidadesData.forEach(unidade => {
    unidade.servicos.forEach(servico => servicos.add(servico));
  });
  return Array.from(servicos).sort();
};
