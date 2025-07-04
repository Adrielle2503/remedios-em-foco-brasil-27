
// Simulação de dados baseados na API de transparência do Recife e São Paulo
export interface Medicamento {
  id: string;
  nome: string;
  principioAtivo: string;
  forma: string;
  concentracao: string;
  cidade: 'recife' | 'sao_paulo';
  unidades: UnidadeMedicamento[];
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
  // RECIFE
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
  {
    id: '4',
    nome: 'Omeprazol',
    principioAtivo: 'Omeprazol',
    forma: 'Cápsula',
    concentracao: '20mg',
    cidade: 'recife',
    unidades: [
      {
        id: '4',
        nome: 'UBS Várzea',
        endereco: 'Rua da Várzea, 321',
        bairro: 'Várzea',
        telefone: '(81) 3355-2468',
        estoque: 45,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T12:00:00Z'
      }
    ]
  },
  {
    id: '5',
    nome: 'Captopril',
    principioAtivo: 'Captopril',
    forma: 'Comprimido',
    concentracao: '25mg',
    cidade: 'recife',
    unidades: [
      {
        id: '5',
        nome: 'UBS Dois Unidos',
        endereco: 'Av. Dois Unidos, 654',
        bairro: 'Dois Unidos',
        telefone: '(81) 3355-3579',
        estoque: 12,
        status: 'baixo_estoque',
        ultimaAtualizacao: '2024-01-15T13:30:00Z'
      }
    ]
  },
  
  // SÃO PAULO - Baseado em caixa de emergência típica
  {
    id: '6',
    nome: 'Paracetamol',
    principioAtivo: 'Paracetamol',
    forma: 'Comprimido',
    concentracao: '500mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '6',
        nome: 'UBS Vila Madalena',
        endereco: 'Rua Harmonia, 345',
        bairro: 'Vila Madalena',
        telefone: '(11) 3042-1234',
        estoque: 200,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T14:00:00Z'
      },
      {
        id: '7',
        nome: 'UBS Butantã',
        endereco: 'Av. Vital Brasil, 1000',
        bairro: 'Butantã',
        telefone: '(11) 3042-5678',
        estoque: 30,
        status: 'baixo_estoque',
        ultimaAtualizacao: '2024-01-15T13:45:00Z'
      }
    ]
  },
  {
    id: '7',
    nome: 'Ibuprofeno',
    principioAtivo: 'Ibuprofeno',
    forma: 'Comprimido',
    concentracao: '400mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '8',
        nome: 'UPA Cidade Tiradentes',
        endereco: 'Av. dos Metalúrgicos, 2255',
        bairro: 'Cidade Tiradentes',
        telefone: '(11) 3042-9012',
        estoque: 85,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T15:20:00Z'
      }
    ]
  },
  {
    id: '8',
    nome: 'Dipirona',
    principioAtivo: 'Dipirona Sódica',
    forma: 'Gotas',
    concentracao: '500mg/ml',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '9',
        nome: 'UBS Itaquera',
        endereco: 'Rua Itaquera, 567',
        bairro: 'Itaquera',
        telefone: '(11) 3042-3456',
        estoque: 60,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T16:10:00Z'
      }
    ]
  },
  {
    id: '9',
    nome: 'Ácido Acetilsalicílico',
    principioAtivo: 'Ácido Acetilsalicílico',
    forma: 'Comprimido',
    concentracao: '100mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '10',
        nome: 'UBS Mooca',
        endereco: 'Rua da Mooca, 890',
        bairro: 'Mooca',
        telefone: '(11) 3042-7890',
        estoque: 120,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T11:30:00Z'
      }
    ]
  },
  {
    id: '10',
    nome: 'Amoxicilina',
    principioAtivo: 'Amoxicilina',
    forma: 'Cápsula',
    concentracao: '500mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '11',
        nome: 'UBS Jabaquara',
        endereco: 'Av. Jabaquara, 1234',
        bairro: 'Jabaquara',
        telefone: '(11) 3042-1122',
        estoque: 0,
        status: 'indisponivel',
        ultimaAtualizacao: '2024-01-15T09:00:00Z'
      }
    ]
  },
  {
    id: '11',
    nome: 'Losartana',
    principioAtivo: 'Losartana Potássica',
    forma: 'Comprimido',
    concentracao: '50mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '12',
        nome: 'UBS Vila Formosa',
        endereco: 'Rua Vila Formosa, 456',
        bairro: 'Vila Formosa',
        telefone: '(11) 3042-4567',
        estoque: 75,
        status: 'disponivel',
        ultimaAtualizacao: '2024-01-15T12:15:00Z'
      }
    ]
  },
  {
    id: '12',
    nome: 'Metformina',
    principioAtivo: 'Metformina',
    forma: 'Comprimido',
    concentracao: '850mg',
    cidade: 'sao_paulo',
    unidades: [
      {
        id: '13',
        nome: 'UBS Campo Limpo',
        endereco: 'Av. Campo Limpo, 789',
        bairro: 'Campo Limpo',
        telefone: '(11) 3042-8901',
        estoque: 18,
        status: 'baixo_estoque',
        ultimaAtualizacao: '2024-01-15T14:45:00Z'
      }
    ]
  }
];

export const buscarMedicamentos = async (termo: string, cidade?: 'recife' | 'sao_paulo'): Promise<Medicamento[]> => {
  console.log('Função buscarMedicamentos chamada com termo:', termo, 'e cidade:', cidade);
  
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (!termo.trim()) {
    console.log('Termo vazio, retornando array vazio');
    return [];
  }

  const termoLower = termo.toLowerCase();
  console.log('Buscando por:', termoLower, 'na cidade:', cidade || 'todas');
  
  let resultados = medicamentosData.filter(medicamento =>
    medicamento.nome.toLowerCase().includes(termoLower) ||
    medicamento.principioAtivo.toLowerCase().includes(termoLower)
  );

  // Filtrar por cidade se especificada
  if (cidade) {
    resultados = resultados.filter(medicamento => medicamento.cidade === cidade);
  }
  
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
