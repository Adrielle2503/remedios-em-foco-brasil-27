import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  MapPin, 
  FileText, 
  Clock, 
  Shield, 
  Users,
  Heart
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: 'Busca de Medicamentos',
      description: 'Encontre rapidamente a disponibilidade de medicamentos nas unidades de saúde da sua região.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Mapa Interativo',
      description: 'Visualize unidades de saúde próximas a você com informações detalhadas e rotas.',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FileText,
      title: 'Informações Completas',
      description: 'Dados sobre UBS, UPAs, farmácias populares, horários e contatos atualizados.',
      color: 'text-slate-700',
      bgColor: 'bg-slate-50'
    },
    {
      icon: Clock,
      title: 'Dados em Tempo Real',
      description: 'Informações sempre atualizadas através das APIs de transparência oficiais.',
      color: 'text-blue-800',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Fonte Confiável',
      description: 'Dados oficiais dos portais de transparência de Recife e São Paulo.',
      color: 'text-slate-800',
      bgColor: 'bg-slate-100'
    },
    {
      icon: Users,
      title: 'Para Todos',
      description: 'Interface acessível e intuitiva, pensada para facilitar o acesso da população.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center space-y-6 mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium">
            <Heart className="h-4 w-4" />
            Recursos Principais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Como o <span className="text-gradient">mapSaúde</span> ajuda você
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Facilitamos o acesso a informações essenciais de saúde pública 
            de forma simples, rápida e transparente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 shadow-lg bg-white relative overflow-hidden group scroll-animate`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`mx-auto mb-6 p-4 ${feature.bgColor} rounded-2xl w-fit transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-secondary group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
