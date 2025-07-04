
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Clock, MapPin, Building2 } from 'lucide-react';
import { PostComunidade } from '@/services/comunidadeService';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface FeedComunidadeProps {
  posts: PostComunidade[];
  isLoading: boolean;
}

const FeedComunidade = ({ posts, isLoading }: FeedComunidadeProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-1">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <Card className="border-2 border-gray-200">
        <CardContent className="p-8 text-center">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Nenhum post encontrado
          </h3>
          <p className="text-gray-500">
            Seja o primeiro a compartilhar uma experiência!
          </p>
        </CardContent>
      </Card>
    );
  }

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'UBS': return '🏥';
      case 'UPA': return '🚑';
      case 'Hospital': return '🏥';
      case 'Farmácia': return '💊';
      default: return '🏥';
    }
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'medicamento': 'bg-blue-100 text-blue-800',
      'medico': 'bg-green-100 text-green-800',
      'espera': 'bg-yellow-100 text-yellow-800',
      'vacinas': 'bg-purple-100 text-purple-800',
      'atendimento': 'bg-indigo-100 text-indigo-800',
      'fila': 'bg-orange-100 text-orange-800',
      'lotacao': 'bg-red-100 text-red-800',
      'urgencia': 'bg-red-100 text-red-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Card key={post.id} className="border-2 border-gray-100 hover:border-primary/30 transition-colors">
          <CardContent className="p-6">
            {/* Header do post */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  {post.usuario.avatar || '👤'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-secondary">
                      {post.usuario.nome}
                    </h4>
                    {post.verificado && (
                      <Badge variant="secondary" className="text-xs">
                        ✓ Verificado
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {post.usuario.cidade === 'recife' ? 'Recife' : 'São Paulo'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatDistanceToNow(post.timestamp, { 
                        addSuffix: true,
                        locale: ptBR 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações da unidade */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getTipoIcon(post.unidadeSaude.tipo)}</span>
                <div>
                  <h5 className="font-semibold text-secondary">
                    {post.unidadeSaude.nome}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {post.unidadeSaude.tipo} • {post.unidadeSaude.bairro}
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo do post */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.conteudo}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className={`text-xs ${getTagColor(tag)}`}
                >
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Ações */}
            <div className="flex items-center gap-4 pt-2 border-t">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                <Heart className="h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                <MessageCircle className="h-4 w-4" />
                {post.comentarios}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeedComunidade;
