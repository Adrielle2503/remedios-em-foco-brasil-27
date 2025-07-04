
import React from 'react';
import { Building2, MapPin, Pill, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Building2,
      number: '500+',
      label: 'Unidades de Saúde',
      description: 'UBS, UPAs e farmácias populares',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      number: '2',
      label: 'Cidades Integradas', 
      description: 'Recife e São Paulo atendidas',
      color: 'text-blue-300'
    },
    {
      icon: Pill,
      number: '1000+',
      label: 'Medicamentos',
      description: 'Disponíveis para consulta',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      number: '12M+',
      label: 'População Atendida',
      description: 'Pessoas com acesso facilitado',
      color: 'text-blue-300'
    }
  ];

  return (
    <section className="section-padding gradient-blue-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center space-y-6 mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-200 rounded-full px-6 py-3 text-sm font-medium border border-white/20">
            <Users className="h-4 w-4" />
            Impacto Real
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Transparência em <span className="text-blue-300">números</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Conectando milhões de pessoas às informações de saúde que precisam, 
            com dados sempre atualizados e confiáveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center space-y-6 scroll-animate-bounce group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="mx-auto p-6 bg-white/10 backdrop-blur-md rounded-3xl w-fit border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 glow-blue">
                  <stat.icon className="h-10 w-10 text-blue-300" />
                </div>
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
              
              <div className="space-y-3">
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} transition-all duration-500 group-hover:scale-110`}>
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </div>
              </div>
              
              {/* Progress bar effect */}
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-1000 group-hover:w-full"
                  style={{ width: index === 0 ? '85%' : index === 1 ? '100%' : index === 2 ? '75%' : '90%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
