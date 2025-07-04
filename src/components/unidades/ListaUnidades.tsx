
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Stethoscope,
  Navigation,
  AlertCircle 
} from 'lucide-react';
import { UnidadeSaude } from '@/services/unidadesService';

interface ListaUnidadesProps {
  unidades: UnidadeSaude[];
  isLoading: boolean;
}

const ListaUnidades = ({ unidades, isLoading }: ListaUnidadesProps) => {
  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'UBS':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'UPA':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Policlínica':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRegiaoColor = (regiao: string) => {
    switch (regiao) {
      case 'Norte':
        return 'bg-purple-100 text-purple-800';
      case 'Sul':
        return 'bg-orange-100 text-orange-800';
      case 'Centro':
        return 'bg-yellow-100 text-yellow-800';
      case 'Oeste':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const abrirMapa = (endereco: string, nome: string) => {
    const query = encodeURIComponent(`${endereco}, ${nome}, Recife, PE`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (unidades.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Nenhuma unidade encontrada
          </h3>
          <p className="text-gray-500">
            Tente ajustar os filtros ou buscar por outros termos.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {unidades.map((unidade) => (
        <Card key={unidade.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg text-secondary mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {unidade.nome}
                </CardTitle>
                <div className="flex gap-2 mb-2">
                  <Badge className={getTipoColor(unidade.tipo)}>
                    {unidade.tipo}
                  </Badge>
                  <Badge variant="outline" className={getRegiaoColor(unidade.regiao)}>
                    {unidade.regiao}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">{unidade.endereco}</div>
                  <div className="text-gray-600">{unidade.bairro}</div>
                </div>
              </div>

              {unidade.telefone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{unidade.telefone}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{unidade.horario}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Serviços:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {unidade.servicos.slice(0, 3).map((servico, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {servico}
                    </Badge>
                  ))}
                  {unidade.servicos.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{unidade.servicos.length - 3} mais
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => abrirMapa(unidade.endereco, unidade.nome)}
                className="w-full"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Ver no Mapa
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListaUnidades;
