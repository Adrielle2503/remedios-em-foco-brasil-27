
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-navy-600 text-white">
      <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
        <div className="space-y-4 scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pronto para encontrar o que precisa?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Comece agora a buscar medicamentos e unidades de saúde 
            na sua cidade de forma fácil e transparente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate-scale">
          <Link to="/medicamentos">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-slate-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              Começar Busca
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/blog">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ler Blog Educativo
            </Button>
          </Link>
        </div>

        <div className="pt-8 text-blue-200 text-sm scroll-animate">
          <p>
            ✓ Dados oficiais e atualizados • ✓ Acesso gratuito • ✓ Interface acessível
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
