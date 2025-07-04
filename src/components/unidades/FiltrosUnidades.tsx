
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

interface FiltrosUnidadesProps {
  filtros: {
    regiao: string;
    tipo: string;
    servico: string;
    termo: string;
  };
  onFiltroChange: (filtro: string, valor: string) => void;
  onBuscar: () => void;
  isLoading: boolean;
  regioes: string[];
  servicos: string[];
}

const FiltrosUnidades = ({ 
  filtros, 
  onFiltroChange, 
  onBuscar, 
  isLoading, 
  regioes, 
  servicos 
}: FiltrosUnidadesProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onBuscar();
    }
  };

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-secondary">Filtrar Unidades</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Região
            </label>
            <Select value={filtros.regiao} onValueChange={(valor) => onFiltroChange('regiao', valor)}>
              <SelectTrigger>
                <SelectValue placeholder="Todas as regiões" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as regiões</SelectItem>
                {regioes.map(regiao => (
                  <SelectItem key={regiao} value={regiao.toLowerCase()}>
                    {regiao}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Tipo
            </label>
            <Select value={filtros.tipo} onValueChange={(valor) => onFiltroChange('tipo', valor)}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="UBS">UBS</SelectItem>
                <SelectItem value="UPA">UPA</SelectItem>
                <SelectItem value="Policlínica">Policlínica</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Serviço
            </label>
            <Select value={filtros.servico} onValueChange={(valor) => onFiltroChange('servico', valor)}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os serviços" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os serviços</SelectItem>
                {servicos.map(servico => (
                  <SelectItem key={servico} value={servico.toLowerCase()}>
                    {servico}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Buscar
            </label>
            <div className="relative">
              <Input
                placeholder="Nome, bairro ou endereço..."
                value={filtros.termo}
                onChange={(e) => onFiltroChange('termo', e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <Button 
          onClick={onBuscar} 
          disabled={isLoading}
          className="w-full md:w-auto"
        >
          {isLoading ? 'Buscando...' : 'Buscar Unidades'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FiltrosUnidades;
