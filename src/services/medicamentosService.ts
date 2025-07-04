
// Simulação de dados baseados na API de transparência do Recife e São Paulo
export interface Medicamento {
  id: string;
  nome: string;
  principioAtivo: string;
  forma: string;
  concentracao: string;
  unidades: UnidadeMedicamento[];
  cidade: string;
}

export interface UnidadeMedicamento {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  telefone?: string;
  estoque: number;
  status: 'disponivel' | 'indisponivel' | 'baixo_estoque';
  ultimaAtualizacao: string;
}

// Dados simulados baseados na estrutura da API de transparência
const medicamentosData: Medicamento[] = [
  // Recife
  {
    id: '1',
    nome: 'Paracetamol',
    principioAtivo: 'Paracetamol',
    forma: 'Comprimido',
    concentracao: '500mg',
    cidade: 'recife',
    unidades: [
      {
        id: '1',
        nome: 'UBS Boa Viagem',
        endereco: 'Av. Boa Viagem, 123',
        bairro: 'Boa Viagem',
        telefone: '(81) 3355-1234',
        estoque: 150,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        nome: 'UBS Casa Amarela',
        endereco: 'Estrada do Arraial, 456',
        bairro: 'Casa Amarela',
        telefone: '(81) 3355-5678',
        estoque: 25,
        status: 'baixo_estoque',
        ultimaAtualizacao: '2024-01-15T09:15:00Z'
      }
    ]
  },
  {
    id: '2',
    nome: 'Ibuprofeno',
    principioAtivo: 'Ibuprofeno',
    forma: 'Comprimido',
    concentracao: '600mg',
    cidade: 'recife',
    unidades: [
      {
        id: '3',
        nome: 'UPA Torrões',
        endereco: 'Rua dos Torrões, 789',
        bairro: 'Torrões',
        telefone: '(81) 3355-9012',
        estoque: 0,
        status: 'indisponivel',
        ultimaAtualizacao: '2024-01-15T08:45:00Z'
      }
    ]
  },
  {
    id: '3',
    nome: 'Dipirona',
    principioAtivo: 'Dipirona Sódica',
    forma: 'Comprimido',
    concentracao: '500mg',
    cidade: 'recife',
    unidades: [
      {
        id: '1',
        nome: 'UBS Boa Viagem',
        endereco: 'Av. Boa Viagem, 123',
        bairro: 'Boa Viagem',
        telefone: '(81) 3355-1234',
        estoque: 80,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T11:20:00Z'
      }
    ]
  },
  // São Paulo
  {
    id: '4',
    nome: 'Paracetamol',
    principioAtivo: 'Paracetamol',
    forma: 'Comprimido',
    concentracao: '500mg',
    cidade: 'saopaulo',
    unidades: [
      {
        id: '4',
        nome: 'UBS Vila Madalena',
        endereco: 'Rua Harmonia, 123',
        bairro: 'Vila Madalena',
        telefone: '(11) 3397-1234',
        estoque: 200,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T10:30:00Z'
      },
      {
        id: '5',
        nome: 'AMA Centro',
        endereco: 'Rua XV de Novembro, 456',
        bairro: 'Centro',
        telefone: '(11) 3397-5678',
        estoque: 15,
        status: 'baixo_estoque',
        ultimaAtualizacao: '2024-01-15T09:15:00Z'
      }
    ]
  },
  {
    id: '5',
    nome: 'Omeprazol',
    principioAtivo: 'Omeprazol',
    forma: 'Cápsula',
    concentracao: '20mg',
    cidade: 'saopaulo',
    unidades: [
      {
        id: '6',
        nome: 'UBS Itaquera',
        endereco: 'Av. Itaquera, 789',
        bairro: 'Itaquera',
        telefone: '(11) 3397-2468',
        estoque: 85,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T12:00:00Z'
      }
    ]
  },
  {
    id: '6',
    nome: 'Losartana',
    principioAtivo: 'Losartana Potássica',
    forma: 'Comprimido',
    concentracao: '50mg',
    cidade: 'saopaulo',
    unidades: [
      {
        id: '7',
        nome: 'UBS Cidade Tiradentes',
        endereco: 'Rua Santa Etelvina, 321',
        bairro: 'Cidade Tiradentes',
        telefone: '(11) 3397-3579',
        estoque: 95,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T13:30:00Z'
      }
    ]
  }
];

export const buscarMedicamentos = async (termo: string, cidade: string = 'recife'): Promise<Medicamento[]> => {
  console.log('Função buscarMedicamentos chamada com termo:', termo, 'cidade:', cidade);
  
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (!termo.trim()) {
    console.log('Termo vazio, retornando array vazio');
    return [];
  }

  const termoLower = termo.toLowerCase();
  console.log('Buscando por:', termoLower, 'na cidade:', cidade);
  
  const resultados = medicamentosData.filter(medicamento =>
    medicamento.cidade === cidade &&
    (medicamento.nome.toLowerCase().includes(termoLower) ||
    medicamento.principioAtivo.toLowerCase().includes(termoLower))
  );
  
  console.log('Medicamentos encontrados:', resultados.length);
  return resultados;
};

export const formatarUltimaAtualizacao = (dataISO: string): string => {
  const data = new Date(dataISO);
  const agora = new Date();
  const diffMs = agora.getTime() - data.getTime();
  const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutos = Math.floor(diffMs / (1000 * 60));

  if (diffHoras > 0) {
    return `há ${diffHoras} hora${diffHoras > 1 ? 's' : ''}`;
  } else if (diffMinutos > 0) {
    return `há ${diffMinutos} minuto${diffMinutos > 1 ? 's' : ''}`;
  } else {
    return 'agora mesmo';
  }
};
