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
  // UPAs oficiais do Estado de Pernambuco
  {
    id: '11',
    nome: 'UPA Abreu e Lima',
    tipo: 'UPA',
    endereco: 'Av. Doutor Cláudio José Gueiros Leite, s/n',
    bairro: 'Centro',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3521-3300',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Eletrocardiograma'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Cardiologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -7.9067, lng: -34.8956 },
    leitos: {
      total: 25,
      disponiveis: 6,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Medicação Intravenosa'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica']
  },
  {
    id: '12',
    nome: 'UPA Afogados',
    tipo: 'UPA',
    endereco: 'Rua Afogados, s/n',
    bairro: 'Afogados',
    regiao: 'Oeste',
    telefone: '(81) 3184-4500',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0345, lng: -34.9234 },
    leitos: {
      total: 28,
      disponiveis: 7,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '13',
    nome: 'UPA Araripina',
    tipo: 'UPA',
    endereco: 'Rua Coronel José Rufino, s/n',
    bairro: 'Centro',
    regiao: 'Sertão',
    telefone: '(87) 3873-1234',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -7.5762, lng: -40.4971 },
    leitos: {
      total: 20,
      disponiveis: 5,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '14',
    nome: 'UPA Cabo de Santo Agostinho',
    tipo: 'UPA',
    endereco: 'Rua Beira Rio, s/n',
    bairro: 'Centro',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3521-4400',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.2906, lng: -35.0345 },
    leitos: {
      total: 24,
      disponiveis: 4,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '15',
    nome: 'UPA Caruaru',
    tipo: 'UPA',
    endereco: 'Rua Professor Simões Barbosa, s/n',
    bairro: 'Rendeiras',
    regiao: 'Agreste',
    telefone: '(87) 3701-5000',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Tomografia'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Neurologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.2839, lng: -35.9761 },
    leitos: {
      total: 35,
      disponiveis: 8,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Politraumatismo'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica']
  },
  {
    id: '16',
    nome: 'UPA Garanhuns',
    tipo: 'UPA',
    endereco: 'Av. Rui Barbosa, s/n',
    bairro: 'Heliópolis',
    regiao: 'Agreste',
    telefone: '(87) 3761-2200',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.8920, lng: -36.4937 },
    leitos: {
      total: 22,
      disponiveis: 5,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '17',
    nome: 'UPA Goiana',
    tipo: 'UPA',
    endereco: 'Rua Cônego João Lima, s/n',
    bairro: 'Centro',
    regiao: 'Mata Norte',
    telefone: '(81) 3626-1100',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -7.5595, lng: -35.0022 },
    leitos: {
      total: 18,
      disponiveis: 3,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '18',
    nome: 'UPA Igarassu',
    tipo: 'UPA',
    endereco: 'Rua Coronel João Pessoa, s/n',
    bairro: 'Centro',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3543-2200',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -7.8342, lng: -34.9063 },
    leitos: {
      total: 20,
      disponiveis: 4,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '19',
    nome: 'UPA Jaboatão Centro',
    tipo: 'UPA',
    endereco: 'Rua Barão de Utinga, s/n',
    bairro: 'Centro',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3342-8800',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Ultrassom'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Ginecologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.1126, lng: -35.0148 },
    leitos: {
      total: 32,
      disponiveis: 7,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Curativos Complexos'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica']
  },
  {
    id: '20',
    nome: 'UPA Jaboatão Sul',
    tipo: 'UPA',
    endereco: 'Av. Ayrton Senna, s/n',
    bairro: 'Piedade',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3342-9900',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.1534, lng: -35.0201 },
    leitos: {
      total: 28,
      disponiveis: 6,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '21',
    nome: 'UPA Olinda',
    tipo: 'UPA',
    endereco: 'Rua do Sol, s/n',
    bairro: 'Peixinhos',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3429-5500',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Eletrocardiograma'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Cardiologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0089, lng: -34.8556 },
    leitos: {
      total: 30,
      disponiveis: 8,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Emergências Cardiológicas'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica']
  },
  {
    id: '22',
    nome: 'UPA Palmares',
    tipo: 'UPA',
    endereco: 'Rua Floriano Peixoto, s/n',
    bairro: 'Centro',
    regiao: 'Mata Sul',
    telefone: '(81) 3661-4400',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.6842, lng: -35.5889 },
    leitos: {
      total: 20,
      disponiveis: 4,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '23',
    nome: 'UPA Paulista',
    tipo: 'UPA',
    endereco: 'Av. Cláudio José Gueiros Leite, s/n',
    bairro: 'Jaguaribe',
    regiao: 'Região Metropolitana',
    telefone: '(81) 3437-7700',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -7.9389, lng: -34.8723 },
    leitos: {
      total: 26,
      disponiveis: 5,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização'],
    temVacinas: false
  },
  {
    id: '24',
    nome: 'UPA Petrolina',
    tipo: 'UPA',
    endereco: 'Rua Clementino Coelho, s/n',
    bairro: 'Areia Branca',
    regiao: 'São Francisco',
    telefone: '(87) 3866-5500',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Tomografia'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Neurologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -9.3891, lng: -40.5030 },
    leitos: {
      total: 40,
      disponiveis: 10,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Politraumatismo'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica', 'Soro Antiofídico']
  },
  {
    id: '25',
    nome: 'UPA Recife Caxangá',
    tipo: 'UPA',
    endereco: 'Av. Caxangá, s/n',
    bairro: 'Cordeiro',
    regiao: 'Oeste',
    telefone: '(81) 3184-3300',
    horario: '24h',
    servicos: ['Pronto Atendimento', 'Urgência', 'Emergência', 'Raio-X', 'Laboratório', 'Ultrassom'],
    especialidades: ['Medicina de Urgência', 'Clínica Médica', 'Pediatria', 'Ortopedia', 'Ginecologia'],
    diasAtendimento: ['Todos os dias'],
    coordenadas: { lat: -8.0456, lng: -34.9123 },
    leitos: {
      total: 35,
      disponiveis: 9,
      uti: 0,
      utiDisponiveis: 0
    },
    tratamentosEspeciais: ['Sutura', 'Imobilização', 'Nebulização', 'Emergências Obstétricas'],
    temVacinas: true,
    tipoVacinas: ['Antitetânica', 'Antirrábica']
  },
  // ... keep existing code (unidades anteriores - UBS, Hospitais, etc.)
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
  return ['Norte', 'Sul', 'Centro', 'Oeste', 'Região Metropolitana', 'Agreste', 'Sertão', 'Mata Norte', 'Mata Sul', 'São Francisco'];
};

export const getServicos = (): string[] => {
  const servicos = new Set<string>();
  unidadesData.forEach(unidade => {
    unidade.servicos.forEach(servico => servicos.add(servico));
  });
  return Array.from(servicos).sort();
};
