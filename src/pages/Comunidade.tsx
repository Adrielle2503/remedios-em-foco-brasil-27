
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, MessageSquare, TrendingUp, Filter, Search } from 'lucide-react';
import { useScrollAnimationGlobal } from '@/hooks/useScrollAnimation';
import { 
  buscarPosts, 
  PostComunidade, 
  getTagsPopulares, 
  getTiposUnidade,
  getBairros,
  FiltrosBusca
} from '@/services/comunidadeService';
import CriarPost from '@/components/comunidade/CriarPost';
import FeedComunidade from '@/components/comunidade/FeedComunidade';

const Comunidade = () => {
  useScrollAnimationGlobal();
  
  const [posts, setPosts] = useState<PostComunidade[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtros, setFiltros] = useState<FiltrosBusca>({
    cidade: 'recife',
    tipoUnidade: 'todos',
    bairro: 'todos',
    tagsSelecionadas: [],
    termo: ''
  });

  const tagsPopulares = getTagsPopulares();
  const tiposUnidade = getTiposUnidade();
  const bairros = getBairros(filtros.cidade || 'recife');

  const carregarPosts = async () => {
    setIsLoading(true);
    try {
      const filtrosParaBusca: FiltrosBusca = {
        cidade: filtros.cidade,
        tipoUnidade: filtros.tipoUnidade === 'todos' ? undefined : filtros.tipoUnidade,
        bairro: filtros.bairro === 'todos' ? undefined : filtros.bairro,
        tags: filtros.tagsSelecionadas && filtros.tagsSelecionadas.length > 0 ? filtros.tagsSelecionadas : undefined,
        termo: filtros.termo || undefined
      };
      
      const resultados = await buscarPosts(filtrosParaBusca);
      setPosts(resultados);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    carregarPosts();
  }, [filtros]);

  const handleTagClick = (tag: string) => {
    setFiltros(prev => ({
      ...prev,
      tagsSelecionadas: prev.tagsSelecionadas?.includes(tag)
        ? prev.tagsSelecionadas.filter(t => t !== tag)
        : [...(prev.tagsSelecionadas || []), tag]
    }));
  };

  const handleCidadeChange = (novaCidade: 'recife' | 'saopaulo') => {
    setFiltros(prev => ({
      ...prev,
      cidade: novaCidade,
      bairro: 'todos' // Reset bairro quando trocar cidade
    }));
  };

  const totalPosts = posts.length;
  const postsRecentes = posts.filter(post => {
    const agora = new Date();
    const diferenca = agora.getTime() - post.timestamp.getTime();
    return diferenca < 24 * 60 * 60 * 1000; // últimas 24h
  }).length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-blue-black text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="text-center space-y-6 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-200 rounded-full px-6 py-3 text-sm font-medium border border-white/20">
              <Users className="h-4 w-4" />
              Comunidade
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-green-300">Compartilhe</span> sua experiência
              <br />na <span className="text-blue-300">saúde pública</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Conecte-se com outros cidadãos e compartilhe informações em tempo real 
              sobre unidades de saúde, medicamentos, filas e muito mais
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-2 border-primary/10 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {totalPosts}
                </div>
                <div className="text-sm text-gray-600">
                  Posts da Comunidade
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-100 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {postsRecentes}
                </div>
                <div className="text-sm text-gray-600">
                  Posts Recentes (24h)
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {filtros.cidade === 'recife' ? 'Recife' : 'São Paulo'}
                </div>
                <div className="text-sm text-gray-600">
                  Cidade Selecionada
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Filter className="h-5 w-5 text-primary" />
                Filtros de Busca
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Busca por texto */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Buscar posts
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Busque por conteúdo, unidade de saúde ou tags..."
                    value={filtros.termo || ''}
                    onChange={(e) => setFiltros(prev => ({ ...prev, termo: e.target.value }))}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Cidade
                  </label>
                  <Select 
                    value={filtros.cidade} 
                    onValueChange={handleCidadeChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recife">Recife</SelectItem>
                      <SelectItem value="saopaulo">São Paulo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Tipo de Unidade
                  </label>
                  <Select 
                    value={filtros.tipoUnidade || 'todos'} 
                    onValueChange={(value) => 
                      setFiltros(prev => ({ ...prev, tipoUnidade: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os tipos</SelectItem>
                      {tiposUnidade.map(tipo => (
                        <SelectItem key={tipo} value={tipo}>
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Bairro
                  </label>
                  <Select 
                    value={filtros.bairro || 'todos'} 
                    onValueChange={(value) => 
                      setFiltros(prev => ({ ...prev, bairro: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os bairros</SelectItem>
                      {bairros.map(bairro => (
                        <SelectItem key={bairro} value={bairro}>
                          {bairro}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagsPopulares.map(tag => (
                    <Badge
                      key={tag}
                      variant={filtros.tagsSelecionadas?.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-white"
                      onClick={() => handleTagClick(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="space-y-6">
            {/* Criar Post */}
            <CriarPost onPostCriado={carregarPosts} />
            
            {/* Feed */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Feed da Comunidade
              </h2>
              <FeedComunidade posts={posts} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Comunidade;
