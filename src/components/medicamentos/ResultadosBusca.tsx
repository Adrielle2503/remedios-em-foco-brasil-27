
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Package } from 'lucide-react';
import { Medicamento, formatarUltimaAtualizacao } from '@/services/medicamentosService';

interface ResultadosBuscaProps {
  medicamentos: Medicamento[];
  isLoading: boolean;
  searchTerm: string;
}

const ResultadosBusca: React.FC<ResultadosBuscaProps> = ({ 
  medicamentos, 
  isLoading, 
  searchTerm 
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Buscando medicamentos...</p>
      </div>
    );
  }

  if (!searchTerm.trim()) {
    return (
      <div className="text-center py-8">
        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600">Digite o nome do medicamento para buscar</p>
      </div>
    );
  }

  if (medicamentos.length === 0) {
    return (
      <div className="text-center py-8">
        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600">
          Nenhum medicamento encontrado para "{searchTerm}"
        </p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponivel':
        return 'bg-green-500';
      case 'baixo_estoque':
        return 'bg-yellow-500';
      case 'indisponivel':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'disponivel':
        return 'Disponível';
      case 'baixo_estoque':
        return 'Baixo Estoque';
      case 'indisponivel':
        return 'Indisponível';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-lg text-secondary">
          {medicamentos.length} medicamento{medicamentos.length > 1 ? 's' : ''} encontrado{medicamentos.length > 1 ? 's' : ''} para "{searchTerm}"
        </p>
      </div>

      {medicamentos.map((medicamento) => (
        <Card key={medicamento.id} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-secondary">{medicamento.nome}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {medicamento.principioAtivo} - {medicamento.forma} {medicamento.concentracao}
                </p>
              </div>
              <Badge variant="outline" className="ml-4">
                {medicamento.unidades.length} unidade{medicamento.unidades.length > 1 ? 's' : ''}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {medicamento.unidades.map((unidade) => (
                <div key={unidade.id} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{unidade.nome}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{unidade.endereco}, {unidade.bairro}</span>
                      </div>
                      {unidade.telefone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <Phone className="h-4 w-4" />
                          <span>{unidade.telefone}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <Badge className={`${getStatusColor(unidade.status)} text-white`}>
                        {getStatusText(unidade.status)}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-2">
                        Estoque: <span className="font-semibold">{unidade.estoque}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>Atualizado {formatarUltimaAtualizacao(unidade.ultimaAtualizacao)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResultadosBusca;
