
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Send, Search } from 'lucide-react';
import { 
  getTagsPopulares, 
  criarPost, 
  NovoPost, 
  buscarUnidadesSaude,
  UnidadeSaudeResumo 
} from '@/services/comunidadeService';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface CriarPostProps {
  onPostCriado: () => void;
}

const CriarPost = ({ onPostCriado }: CriarPostProps) => {
  const { user } = useAuth();
  const [conteudo, setConteudo] = useState('');
  const [tagsSelecionadas, setTagsSelecionadas] = useState<string[]>([]);
  const [novaTag, setNovaTag] = useState('');
  const [cidade, setCidade] = useState<'recife' | 'saopaulo'>('recife');
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('');
  const [unidades, setUnidades] = useState<UnidadeSaudeResumo[]>([]);
  const [buscaUnidade, setBuscaUnidade] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUnidades, setIsLoadingUnidades] = useState(false);

  const tagsPopulares = getTagsPopulares();

  // Carregar unidades quando a cidade mudar
  useEffect(() => {
    carregarUnidades();
  }, [cidade]);

  // Buscar unidades quando o termo de busca mudar
  useEffect(() => {
    const timer = setTimeout(() => {
      if (buscaUnidade !== '') {
        carregarUnidades(buscaUnidade);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [buscaUnidade, cidade]);

  const carregarUnidades = async (termo?: string) => {
    setIsLoadingUnidades(true);
    try {
      const unidadesEncontradas = await buscarUnidadesSaude(cidade, termo);
      setUnidades(unidadesEncontradas);
    } catch (error) {
      console.error('Erro ao carregar unidades:', error);
    } finally {
      setIsLoadingUnidades(false);
    }
  };

  const adicionarTag = (tag: string) => {
    if (tag && !tagsSelecionadas.includes(tag) && tagsSelecionadas.length < 5) {
      setTagsSelecionadas([...tagsSelecionadas, tag]);
      setNovaTag('');
    }
  };

  const removerTag = (tag: string) => {
    setTagsSelecionadas(tagsSelecionadas.filter(t => t !== tag));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!conteudo.trim()) {
      toast.error('Por favor, escreva algo sobre sua experiência');
      return;
    }

    if (!unidadeSelecionada) {
      toast.error('Por favor, selecione uma unidade de saúde');
      return;
    }

    if (tagsSelecionadas.length === 0) {
      toast.error('Adicione pelo menos uma tag');
      return;
    }

    setIsLoading(true);
    
    try {
      const novoPost: NovoPost = {
        unidadeSaudeId: unidadeSelecionada,
        conteudo: conteudo.trim(),
        tags: tagsSelecionadas,
        cidade
      };

      await criarPost(novoPost);
      
      // Limpar formulário
      setConteudo('');
      setTagsSelecionadas([]);
      setUnidadeSelecionada('');
      setBuscaUnidade('');
      
      toast.success('Post publicado com sucesso!');
      onPostCriado();
    } catch (error) {
      toast.error('Erro ao publicar post');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="p-6 text-center">
          <p className="text-gray-600">Faça login para compartilhar sua experiência</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg text-secondary flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Compartilhe sua experiência
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Cidade
            </label>
            <Select value={cidade} onValueChange={(value: 'recife' | 'saopaulo') => {
              setCidade(value);
              setUnidadeSelecionada(''); // Reset unidade quando trocar cidade
            }}>
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
              Unidade de Saúde *
            </label>
            <div className="space-y-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar unidade de saúde..."
                  value={buscaUnidade}
                  onChange={(e) => setBuscaUnidade(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                />
              </div>
              <Select value={unidadeSelecionada} onValueChange={setUnidadeSelecionada}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma unidade de saúde" />
                </SelectTrigger>
                <SelectContent>
                  {isLoadingUnidades ? (
                    <SelectItem value="loading" disabled>Carregando...</SelectItem>
                  ) : unidades.length === 0 ? (
                    <SelectItem value="empty" disabled>Nenhuma unidade encontrada</SelectItem>
                  ) : (
                    unidades.map(unidade => (
                      <SelectItem key={unidade.id} value={unidade.id}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{unidade.nome}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {unidade.tipo}
                          </span>
                          <span className="text-xs text-gray-500">
                            {unidade.bairro}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Sua experiência *
            </label>
            <Textarea
              placeholder="Conte como foi sua experiência na unidade de saúde. Informações sobre medicamentos, tempo de espera, atendimento, etc."
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              className="min-h-[100px]"
              maxLength={500}
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {conteudo.length}/500
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Tags (máximo 5) *
            </label>
            
            {/* Tags selecionadas */}
            {tagsSelecionadas.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tagsSelecionadas.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-red-500" 
                      onClick={() => removerTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}

            {/* Tags populares */}
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-2">Tags populares:</p>
                <div className="flex flex-wrap gap-2">
                  {tagsPopulares.map(tag => (
                    <Badge 
                      key={tag}
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-white"
                      onClick={() => adicionarTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Criar nova tag */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Criar nova tag..."
                  value={novaTag}
                  onChange={(e) => setNovaTag(e.target.value)}
                  className="flex-1 px-3 py-1 border rounded-md text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      adicionarTag(novaTag);
                    }
                  }}
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={() => adicionarTag(novaTag)}
                  disabled={!novaTag || tagsSelecionadas.length >= 5}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || !conteudo.trim() || tagsSelecionadas.length === 0 || !unidadeSelecionada}
            className="w-full"
          >
            {isLoading ? (
              'Publicando...'
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Publicar
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CriarPost;
