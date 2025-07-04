
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, MapPin, Building2, Pill, FileText, Search } from 'lucide-react';

const LinksOficiaisSection = () => {
  const linkSections = [
    {
      title: 'Localização Geral',
      icon: MapPin,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      links: [
        {
          name: 'Busca Saúde - Mapa Interativo',
          url: 'https://buscasaude.prefeitura.sp.gov.br',
          description: 'Encontre todas as unidades de saúde no mapa oficial',
          type: 'external'
        }
      ]
    },
    {
      title: 'Hospitais e Prontos-Socorros',
      icon: Building2,
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
      links: [
        {
          name: 'Lista Completa - Hospitais e PS',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/arquivos/secretarias/saude/organizacao/0005/ProntosSocorros_Hospitais.pdf',
          description: 'PDF oficial com todos os hospitais e prontos-socorros',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'UBS e AMAs',
      icon: Building2,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      links: [
        {
          name: 'Lista UBS por Endereço',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/2024_02_09_Relacao_UBS_Cidade_Sao_Paulo.pdf',
          description: 'Relação atualizada das Unidades Básicas de Saúde',
          type: 'pdf'
        },
        {
          name: 'Lista de AMAs',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/lista_amas_1255635131.pdf',
          description: 'Assistência Médica Ambulatorial - endereços',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'Farmácias e Medicamentos',
      icon: Pill,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      links: [
        {
          name: 'Remédio na Hora',
          url: 'https://smsprefeiturasp.com.br/remedionahora/',
          description: 'Consulte disponibilidade de medicamentos em tempo real',
          type: 'external'
        },
        {
          name: 'REMUME - Lista Oficial',
          url: 'https://prefeitura.sp.gov.br/web/saude/w/atencao_basica/218750',
          description: 'Relação Municipal de Medicamentos Essenciais',
          type: 'external'
        }
      ]
    },
    {
      title: 'Dados Oficiais',
      icon: FileText,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      links: [
        {
          name: 'CNES - Cadastro Nacional',
          url: 'https://cnes2.datasus.gov.br/Listar_Mantidas.asp',
          description: 'Base nacional de estabelecimentos de saúde',
          type: 'external'
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <Download className="h-4 w-4" />;
      case 'external':
        return <ExternalLink className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'Baixar PDF';
      case 'external':
        return 'Acessar Site';
      default:
        return 'Acessar';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium">
            <Building2 className="h-4 w-4" />
            Links Oficiais São Paulo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Acesso Direto aos Serviços Oficiais
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Links oficiais da Prefeitura de São Paulo para localizar unidades, 
            consultar medicamentos e acessar informações de saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className={`${section.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                    <section.icon className={`h-6 w-6 ${section.iconColor}`} />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        {link.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {link.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full text-sm py-6 shadow-md hover:shadow-lg transition-all duration-300"
                      size="sm"
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {getIcon(link.type)}
                        {getButtonText(link.type)}
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Precisa de Ajuda para Navegar?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Todos os links levam aos sites oficiais da Prefeitura de São Paulo. 
            Para facilitar sua busca, também oferecemos ferramentas integradas no nosso site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-md">
              <a href="/medicamentos">
                <Pill className="h-5 w-5 mr-2" />
                Buscar Medicamentos
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md">
              <a href="/mapa">
                <MapPin className="h-5 w-5 mr-2" />
                Ver Mapa Interativo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksOficiaisSection;
