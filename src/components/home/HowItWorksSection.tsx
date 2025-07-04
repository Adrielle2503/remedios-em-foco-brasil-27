
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, MapPin, Info, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Busque o que precisa',
      description: 'Digite o nome do medicamento ou selecione a unidade de saúde que deseja consultar.',
      action: 'Começar busca',
      link: '/medicamentos'
    },
    {
      icon: MapPin,
      number: '02', 
      title: 'Encontre no mapa',
      description: 'Visualize a localização exata das unidades e trace a melhor rota até lá.',
      action: 'Ver mapa',
      link: '/mapa'
    },
    {
      icon: Info,
      number: '03',
      title: 'Acesse informações',
      description: 'Tenha acesso a horários, contatos e disponibilidade atualizada em tempo real.',
      action: 'Explorar',
      link: '/unidades'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Como funciona
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Em apenas 3 passos você encontra as informações que precisa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (only for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-blue-300 transform translate-x-4 z-10">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 h-5 w-5 text-primary" />
                </div>
              )}

              <div 
                className={`bg-white border border-neutral-200 rounded-xl p-8 text-center space-y-6 card-hover relative z-20 scroll-animate-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mx-auto p-4 bg-neutral-50 rounded-full w-fit">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Action Button */}
                <Link to={step.link}>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {step.action}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
