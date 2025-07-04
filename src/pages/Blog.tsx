
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Heart, Shield, Users, BookOpen, Clock } from 'lucide-react';

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Blog Educativo
          </h1>
          <p className="text-xl text-gray-600">
            Informações importantes sobre saúde pública
          </p>
        </div>

        {/* Artigo Principal */}
        <article className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                Os Perigos da Automedicação: Por que Você Deve Evitar
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 min de leitura</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Guia Educativo</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  <strong>Atenção:</strong> A automedicação é responsável por mais de 20% das intoxicações no Brasil, segundo dados da ANVISA.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-secondary mb-3">
                  O que é Automedicação?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A automedicação é a prática de usar medicamentos por conta própria, sem orientação médica ou farmacêutica. 
                  Isso inclui tomar remédios indicados por amigos, usar sobras de tratamentos anteriores ou comprar medicamentos 
                  baseando-se apenas nos sintomas.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-secondary mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Principais Riscos e Perigos
                </h2>
                <div className="grid gap-4">
                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-orange-800 mb-2">1. Intoxicação e Overdose</h3>
                      <p className="text-orange-700 text-sm">
                        Dosagens incorretas podem causar intoxicação grave, especialmente em crianças e idosos.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-red-800 mb-2">2. Mascaramento de Doenças Graves</h3>
                      <p className="text-red-700 text-sm">
                        Medicamentos podem aliviar sintomas temporariamente, atrasando o diagnóstico de condições sérias.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-purple-800 mb-2">3. Interações Medicamentosas</h3>
                      <p className="text-purple-700 text-sm">
                        Combinações perigosas entre medicamentos podem causar efeitos adversos graves.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">4. Resistência a Antibióticos</h3>
                      <p className="text-blue-700 text-sm">
                        Uso inadequado de antibióticos pode tornar bactérias resistentes aos tratamentos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-secondary mb-3">
                  Situações Comuns de Automedicação
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Usar analgésicos para qualquer tipo de dor sem investigar a causa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Tomar antibióticos sobrados de tratamentos anteriores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Usar medicamentos indicados por amigos ou familiares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Aumentar doses por conta própria quando o efeito não é o esperado</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-secondary mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Como Evitar a Automedicação
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Consulte sempre um médico</strong> antes de iniciar qualquer tratamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Procure orientação farmacêutica</strong> ao comprar medicamentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Leia sempre a bula</strong> e siga as instruções corretamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Mantenha um histórico</strong> dos medicamentos que usa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Descarte medicamentos vencidos</strong> adequadamente</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-secondary mb-3">
                  Dados Importantes
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-800">27%</div>
                      <div className="text-sm text-yellow-700">das intoxicações são por medicamentos</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-800">35%</div>
                      <div className="text-sm text-blue-700">dos brasileiros praticam automedicação</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Grupos de Risco
                </h3>
                <p className="text-blue-700 text-sm">
                  Crianças, idosos, gestantes e pessoas com doenças crônicas são mais vulneráveis aos efeitos 
                  adversos da automedicação e devem ter cuidado redobrado.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Onde Buscar Ajuda
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Unidades Básicas de Saúde (UBS):</strong> Consultas gratuitas pelo SUS</li>
                  <li><strong>Farmácias:</strong> Orientação farmacêutica gratuita</li>
                  <li><strong>Disque Saúde:</strong> 136 (informações de saúde 24h)</li>
                  <li><strong>SAMU:</strong> 192 (emergências médicas)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Call to Action */}
        <Card className="mt-8 bg-primary text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Sua Saúde é Prioridade
            </h3>
            <p className="mb-4">
              Use nosso sistema para encontrar unidades de saúde próximas e medicamentos disponíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="/unidades" className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Encontrar Unidades
              </a>
              <a href="/medicamentos" className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Buscar Medicamentos
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Blog;
