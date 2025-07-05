
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Clock, Send, X } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Comentario {
  id: string;
  usuario: {
    nome: string;
    avatar?: string;
    cidade: 'recife' | 'saopaulo';
  };
  conteudo: string;
  timestamp: Date;
  verificado?: boolean;
}

interface ComentariosPostProps {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  totalComentarios: number;
}

const ComentariosPost = ({ postId, isOpen, onClose, totalComentarios }: ComentariosPostProps) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dados simulados de comentários
  const comentariosSimulados: Record<string, Comentario[]> = {
    '1': [
      {
        id: 'c1',
        usuario: { nome: 'Pedro Lima', cidade: 'recife' },
        conteudo: 'Concordo! Fui lá semana passada e o atendimento foi excelente.',
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        verificado: true
      },
      {
        id: 'c2',
        usuario: { nome: 'Ana Silva', avatar: '👩', cidade: 'recife' },
        conteudo: 'Que bom saber! Estava precisando ir lá.',
        timestamp: new Date(Date.now() - 1000 * 60 * 45)
      }
    ],
    '2': [
      {
        id: 'c3',
        usuario: { nome: 'Carlos Santos', cidade: 'recife' },
        conteudo: 'Infelizmente é assim mesmo. Recomendo ir bem cedo.',
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
      }
    ]
  };

  useEffect(() => {
    if (isOpen) {
      carregarComentarios();
    }
  }, [isOpen, postId]);

  const carregarComentarios = async () => {
    setIsLoading(true);
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 300));
    setComentarios(comentariosSimulados[postId] || []);
    setIsLoading(false);
  };

  const enviarComentario = async () => {
    if (!novoComentario.trim()) return;

    setIsSubmitting(true);
    
    const comentario: Comentario = {
      id: Date.now().toString(),
      usuario: {
        nome: 'Você',
        cidade: 'recife'
      },
      conteudo: novoComentario,
      timestamp: new Date()
    };

    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setComentarios(prev => [comentario, ...prev]);
    setNovoComentario('');
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Comentários ({comentarios.length})
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-hidden flex flex-col">
          {/* Área de novo comentário */}
          <div className="mb-4 space-y-2">
            <Textarea
              placeholder="Escreva seu comentário..."
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              className="min-h-[80px]"
            />
            <div className="flex justify-end">
              <Button 
                onClick={enviarComentario}
                disabled={!novoComentario.trim() || isSubmitting}
                className="flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Enviando...' : 'Comentar'}
              </Button>
            </div>
          </div>

          {/* Lista de comentários */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {isLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-24 h-4 bg-slate-200 rounded"></div>
                        <div className="w-full h-12 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : comentarios.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <p>Nenhum comentário ainda.</p>
                <p className="text-sm">Seja o primeiro a comentar!</p>
              </div>
            ) : (
              comentarios.map(comentario => (
                <div key={comentario.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">
                      {comentario.usuario.avatar || '👤'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-secondary">
                          {comentario.usuario.nome}
                        </span>
                        {comentario.verificado && (
                          <Badge variant="secondary" className="text-xs">
                            ✓
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="h-3 w-3" />
                          {formatDistanceToNow(comentario.timestamp, { 
                            addSuffix: true,
                            locale: ptBR 
                          })}
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {comentario.conteudo}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComentariosPost;
