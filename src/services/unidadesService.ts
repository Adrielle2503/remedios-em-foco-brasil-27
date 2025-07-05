
export interface UnidadeSaude {
  id: string;
  nome: string;
  tipo: 'UBS' | 'UPA' | 'Policlínica' | 'Centro de Saúde' | 'Hospital';
  endereco: string;
  bairro: string;
  regiao: string;
  telefone?: string;
  horario: string;
  servicos: string[];
  especialidades: string[];
  diasAtendimento: string[];
  coordenadas?: {
    lat: number;
    lng: number;
  };
  // Dados específicos para hospitais
  leitos?: {
    total: number;
    disponiveis: number;
    uti: number;
    utiDisponiveis: number;
  };
  tratamentosEspeciais?: string[];
  temVacinas?: boolean;
  tipoVacinas?: string[];
}

// Dados expandidos das unidades de saúde do Recife
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
    especialidades: ['Clínica Médica', 'Pediatria', 'Ginecologia e Obstetrícia'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.0176, lng: -34.8755 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Hepatite B', 'Tétano']
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
    especialidades: ['Clínica Médica', 'Pediatria', 'Enfermagem'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.0389, lng: -34.9067 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'BCG', 'Hepatite A e B']
  },
  {
    id: '3',
    nome: 'UPA Torrões',
    tipo: 'UPA',
    endereco: 'Rua dos Torrões, 456',
    bairro: 'Torrões',
    regiao: 'Norte',
    telefone: '(81) 3355-9876',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0478, lng: -34.8772 },
    leitos: {
      total: 30,
      disponiveis: 8,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
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
    especialidades: ['Cardiologia', 'Clínica Médica', 'Fisioterapia', 'Odontologia'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.1131, lng: -34.8901 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Pneumocócica', 'Meningite']
  },
  {
    id: '5',
    nome: 'Hospital da Restauração',
    tipo: 'Hospital',
    endereco: 'Av. Agamenon Magalhães, s/n',
    bairro: 'Derby',
    regiao: 'Centro',
    telefone: '(81) 3184-1234',
    horario: '24h',
    servicos: ['Pronto Socorro', 'UTI', 'Cirurgia', 'Internação', 'Laboratório', 'Radiologia'],
    especialidades: ['Neurologia', 'Neurocirurgia', 'Ortopedia', 'Cardiologia', 'Medicina Intensiva'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0589, lng: -34.8834 },
    leitos: {
      total: 250,
      disponiveis: 45,
      uti: 40,
      utiDisponiveis: 8
    },
    tratamentosEspeciais: ['Neurologia Avançada', 'Cirurgia Cardíaca', 'Transplantes'],
    temVacinas: true,
    tipoVacinas: ['Antirrábica', 'Antitetânica', 'Soro Antiofídico', 'Soro Antiescorpiônico']
  },
  {
    id: '6',
    nome: 'UBS Imbiribeira',
    tipo: 'UBS',
    endereco: 'Rua da Imbiribeira, 789',
    bairro: 'Imbiribeira',
    regiao: 'Sul',
    telefone: '(81) 3355-3456',
    horario: '7h às 17h',
    servicos: ['Clínica Geral', 'Pediatria', 'Ginecologia', 'Enfermagem'],
    especialidades: ['Clínica Médica', 'Pediatria', 'Ginecologia e Obstetrícia'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.1089, lng: -34.8756 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Hepatite B', 'HPV']
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
    especialidades: ['Clínica Médica', 'Pediatria', 'Psicologia', 'Psiquiatria'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.0434, lng: -34.9456 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Tétano', 'Febre Amarela']
  },
  {
    id: '8',
    nome: 'Hospital Getúlio Vargas',
    tipo: 'Hospital',
    endereco: 'Rua Senador José Henrique, 141',
    bairro: 'Ilha do Leite',
    regiao: 'Centro',
    telefone: '(81) 3421-5000',
    horario: '24h',
    servicos: ['Pronto Socorro', 'UTI', 'Maternidade', 'Pediatria', 'Cirurgia'],
    especialidades: ['Ginecologia', 'Obstetrícia', 'Pediatria', 'Neonatologia', 'Cirurgia Geral'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0723, lng: -34.8945 },
    leitos: {
      total: 180,
      disponiveis: 32,
      uti: 25,
      utiDisponiveis: 5
    },
    tratamentosEspeciais: ['Maternidade de Alto Risco', 'UTI Neonatal', 'Cirurgia Pediátrica'],
    temVacinas: true,
    tipoVacinas: ['BCG', 'Hepatite B', 'Tétano', 'Antirrábica']
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
    especialidades: ['Clínica Médica', 'Enfermagem'],
    diasAtendimento: ['Segunda a Sexta'],
    coordenadas: { lat: -8.0589, lng: -34.8834 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Tétano', 'Hepatite A']
  },
  {
    id: '10',
    nome: 'Policlínica Lessa de Andrade',
    tipo: 'Policlínica',
    endereco: 'Rua da Ilha do Leite, 456',
    bairro: 'Ilha do Leite',
    regiao: 'Centro',
    telefone: '(81) 3355-7890',
    horario: '7h às 19h',
    servicos: ['Clínica Geral', 'Especialidades', 'Exames', 'Procedimentos'],
    especialidades: ['Cardiologia', 'Endocrinologia', 'Dermatologia', 'Oftalmologia', 'Otorrinolaringologia'],
    diasAtendimento: ['Segunda a Sábado'],
    coordenadas: { lat: -8.0634, lng: -34.8789 },
    temVacinas: true,
    tipoVacinas: ['COVID-19', 'Influenza', 'Pneumocócica', 'Herpes Zóster']
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
