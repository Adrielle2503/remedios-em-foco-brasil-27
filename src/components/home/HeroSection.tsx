
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Heart, Activity } from 'lucide-react';
import { useScrollAnimationGlobal } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  useScrollAnimationGlobal();

  return (
    <section className="hero-gradient text-white section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black/40"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-blue-200 border border-white/20 glow-blue">
              <Activity className="h-5 w-5" />
              <span className="text-sm font-medium">Sistema de Transparência em Saúde</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Encontre medicamentos e 
              <span className="block text-gradient bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                unidades de saúde
              </span>
              na sua cidade
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed font-light">
              Acesso fácil, rápido e transparente a informações de saúde pública 
              em <span className="font-semibold text-white">Recife</span> e <span className="font-semibold text-white">São Paulo</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate-scale">
            <Link to="/medicamentos">
              <Button size="lg" className="bg-white text-secondary hover:bg-blue-50 text-lg px-10 py-7 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 glow-blue">
                <Search className="mr-3 h-6 w-6" />
                Buscar Medicamentos
              </Button>
            </Link>
            <Link to="/mapa">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-secondary text-lg px-10 py-7 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Ver no Mapa
              </Button>
            </Link>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 scroll-animate-bounce">
            <div className="text-center p-6 rounded-2xl glass-effect hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">2</div>
              <div className="text-blue-100 font-medium">Cidades Integradas</div>
              <div className="text-blue-300/70 text-sm mt-1">Recife • São Paulo</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-effect hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">500+</div>
              <div className="text-blue-100 font-medium">Unidades de Saúde</div>
              <div className="text-blue-300/70 text-sm mt-1">UBS • UPAs • Farmácias</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-effect hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Acesso Disponível</div>
              <div className="text-blue-300/70 text-sm mt-1">Sempre atualizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
