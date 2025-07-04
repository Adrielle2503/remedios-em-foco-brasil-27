
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, MapPin, Activity } from 'lucide-react';
import { useScrollAnimationGlobal } from '@/hooks/useScrollAnimation';
import { buscarUnidades, getRegioes, getServicos, UnidadeSaude } from '@/services/unidadesService';
import FiltrosUnidades from '@/components/unidades/FiltrosUnidades';
import ListaUnidades from '@/components/unidades/ListaUnidades';

const Unidades = () => {
  useScrollAnimationGlobal();
  
  const [unidades, setUnidades] = useState<UnidadeSaude[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [filtros, setFiltros] = useState({
    regiao: 'todas',
    tipo: 'todos',
    servico: 'todos',
    termo: ''
  });

  const regioes = getRegioes();
  const servicos = getServicos();

  const handleFiltroChange = (filtro: string, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [filtro]: valor
    }));
  };

  const handleBuscar = async () => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const filtrosParaBusca = {
        regiao: filtros.regiao === 'todas' ? undefined : filtros.regiao,
        tipo: filtros.tipo === 'todos' ? undefined : filtros.tipo,
        servico: filtros.servico === 'todos' ? undefined : filtros.servico,
        termo: filtros.termo || undefined
      };
      
      const resultados = await buscarUnidades(filtrosParaBusca);
      setUnidades(resultados);
    } catch (error) {
      console.error('Erro ao buscar unidades:', error);
      setUnidades([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar todas as unidades ao carregar a página
  useEffect(() => {
    handleBuscar();
  }, []);

  const totalUnidades = unidades.length;
  const unidadesPorRegiao = unidades.reduce((acc, unidade) => {
    acc[unidade.regiao] = (acc[unidade.regiao] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-blue-black text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="text-center space-y-6 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-200 rounded-full px-6 py-3 text-sm font-medium border border-white/20">
              <Building2 className="h-4 w-4" />
              Unidades de Saúde
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Encontre <span className="text-blue-300">unidades de saúde</span> 
              <br />na sua região
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Localize UBS, UPAs e outras unidades de saúde em Recife com 
              informações completas sobre serviços e localização
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {hasSearched && (
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center border-2 border-primary/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {totalUnidades}
                  </div>
                  <div className="text-sm text-gray-600">
                    Unidades Encontradas
                  </div>
                </CardContent>
              </Card>

              {Object.entries(unidadesPorRegiao).slice(0, 3).map(([regiao, count]) => (
                <Card key={regiao} className="text-center border-2 border-primary/10 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <MapPin className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {count}
                    </div>
                    <div className="text-sm text-gray-600">
                      Região {regiao}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FiltrosUnidades
            filtros={filtros}
            onFiltroChange={handleFiltroChange}
            onBuscar={handleBuscar}
            isLoading={isLoading}
            regioes={regioes}
            servicos={servicos}
          />
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Unidades de Saúde
              </h2>
              <p className="text-gray-600">
                {isLoading 
                  ? 'Buscando unidades...' 
                  : `${totalUnidades} unidade${totalUnidades !== 1 ? 's' : ''} encontrada${totalUnidades !== 1 ? 's' : ''}`
                }
              </p>
            </div>
            
            <ListaUnidades 
              unidades={unidades}
              isLoading={isLoading}
            />
          </div>
        </section>
      )}

      {/* Info Section */}
      {!hasSearched && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Card className="border-2 border-blue-100 shadow-lg scroll-animate-bounce">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-blue-100 rounded-full w-fit mb-4">
                  <Activity className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl text-secondary">
                  Rede de Saúde do Recife
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Encontre informações completas sobre todas as unidades de saúde 
                  da rede municipal do Recife.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-green-600" />
                      Tipos de Unidades
                    </h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Unidades Básicas de Saúde (UBS)
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Unidades de Pronto Atendimento (UPA)
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Policlínicas e Centros de Saúde
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Serviços Disponíveis
                    </h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Clínica Geral e Pediatria
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Ginecologia e Saúde da Mulher
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Odontologia e Enfermagem
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Vacinação e Programas Especiais
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Unidades;
