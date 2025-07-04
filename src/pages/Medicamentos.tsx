
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Pill, MapPin, Clock, Building2, AlertCircle } from 'lucide-react';
import { useScrollAnimationGlobal } from '@/hooks/useScrollAnimation';
import { buscarMedicamentos, Medicamento } from '@/services/medicamentosService';
import ResultadosBusca from '@/components/medicamentos/ResultadosBusca';

const Medicamentos = () => {
  useScrollAnimationGlobal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('recife');
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    console.log('Iniciando busca para:', searchTerm, 'na cidade:', selectedCity);
    
    if (!searchTerm.trim()) {
      console.log('Termo de busca vazio');
      return;
    }
    
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      console.log('Chamando buscarMedicamentos...');
      const resultados = await buscarMedicamentos(searchTerm, selectedCity);
      console.log('Resultados encontrados:', resultados);
      setMedicamentos(resultados);
    } catch (error) {
      console.error('Erro ao buscar medicamentos:', error);
      setMedicamentos([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getCityName = (city: string) => {
    return city === 'recife' ? 'Recife' : 'São Paulo';
  };

  console.log('Estado atual:', { searchTerm, selectedCity, medicamentos, isLoading, hasSearched });

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
              <Pill className="h-4 w-4" />
              Busca de Medicamentos
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Encontre <span className="text-blue-300">medicamentos</span> 
              <br />na sua região
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Consulte a disponibilidade em tempo real nas unidades de saúde 
              baseado nos dados de transparência oficial
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md scroll-animate-scale">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-secondary flex items-center justify-center gap-3">
                <Search className="h-6 w-6 text-primary" />
                Buscar Medicamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input 
                    placeholder="Digite o nome do medicamento (ex: Paracetamol)..." 
                    className="text-lg py-6 pl-12 border-2 border-primary/20 focus:border-primary transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Pill className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary/60" />
                </div>
                
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full md:w-48 text-lg py-6 border-2 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Selecione a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recife">Recife</SelectItem>
                    <SelectItem value="saopaulo">São Paulo</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleSearch}
                  disabled={isLoading}
                >
                  <Search className="h-5 w-5 mr-2" />
                  {isLoading ? 'Buscando...' : 'Buscar'}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-secondary">Dados Oficiais</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-secondary">Tempo Real</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-secondary">{getCityName(selectedCity)}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <ResultadosBusca 
              medicamentos={medicamentos}
              isLoading={isLoading}
              searchTerm={searchTerm}
              selectedCity={getCityName(selectedCity)}
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
                  <AlertCircle className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl text-secondary">
                  Dados de Transparência Oficial
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Os dados são baseados nos portais de transparência oficiais das 
                  Prefeituras do Recife e São Paulo para consulta de medicamentos.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-secondary mb-3">
                    Informações disponíveis:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Disponibilidade por unidade
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Quantidade em estoque
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Localização das UBS/AMAs
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Última atualização
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <a href="/mapa">
                      <MapPin className="h-5 w-5 mr-2" />
                      Ver Unidades no Mapa
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Medicamentos;
