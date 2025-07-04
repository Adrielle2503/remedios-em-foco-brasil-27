
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">mapSaúde</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Facilitando o acesso da população a informações sobre medicamentos 
              e unidades de saúde em Recife e São Paulo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/medicamentos" className="text-gray-300 hover:text-white transition-colors text-sm">
                Medicamentos
              </Link>
              <Link to="/unidades" className="text-gray-300 hover:text-white transition-colors text-sm">
                Unidades de Saúde
              </Link>
              <Link to="/mapa" className="text-gray-300 hover:text-white transition-colors text-sm">
                Mapa Interativo
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">contato@mapsaude.gov.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">(81) 3355-0000</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">Recife/PE - São Paulo/SP</span>
              </div>
            </div>
          </div>

          {/* Cities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cidades Atendidas</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <div className="font-medium text-white">Recife/PE</div>
                <div className="text-gray-300">Portal de Transparência integrado</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-white">São Paulo/SP</div>
                <div className="text-gray-300">Dados Abertos disponíveis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 mapSaúde. Sistema de transparência em saúde pública.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
