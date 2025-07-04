
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, MapPin, Building2, Pill, FileText, Search, Info, Phone } from 'lucide-react';

const LinksOficiais = () => {
  const emergencyInfo = [
    { name: 'SAMU', number: '192', description: 'Emergências médicas' },
    { name: 'Bombeiros', number: '193', description: 'Emergências gerais' },
    { name: 'Central de Regulação', number: '156', description: 'Informações da prefeitura' }
  ];

  const linkSections = [
    {
      title: 'Localização Geral de Unidades',
      icon: MapPin,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      description: 'Encontre todas as unidades de saúde no mapa oficial da cidade',
      links: [
        {
          name: 'Busca Saúde - Mapa Interativo Oficial',
          url: 'https://buscasaude.prefeitura.sp.gov.br',
          description: 'Sistema oficial para localizar UBS, hospitais, farmácias e outros serviços de saúde em São Paulo',
          type: 'external',
          featured: true
        }
      ]
    },
    {
      title: 'Hospitais e Prontos-Socorros',
      icon: Building2,
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
      description: 'Acesso às informações sobre hospitais e atendimento de emergência',
      links: [
        {
          name: 'Lista Completa - Hospitais e Prontos-Socorros',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/arquivos/secretarias/saude/organizacao/0005/ProntosSocorros_Hospitais.pdf',
          description: 'PDF oficial com endereços, telefones e especialidades de todos os hospitais e prontos-socorros municipais',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'UBS e AMAs (Atenção Básica)',
      icon: Building2,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      description: 'Unidades Básicas de Saúde e Assistência Médica Ambulatorial',
      links: [
        {
          name: 'Lista UBS por Endereço (Atualizada 2024)',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/2024_02_09_Relacao_UBS_Cidade_Sao_Paulo.pdf',
          description: 'Relação completa e atualizada das Unidades Básicas de Saúde com endereços e horários',
          type: 'pdf'
        },
        {
          name: 'Lista de AMAs',
          url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/lista_amas_1255635131.pdf',
          description: 'Assistência Médica Ambulatorial - unidades para atendimento não emergencial',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'Farmácias Públicas e Medicamentos SUS',
      icon: Pill,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      description: 'Consulte disponibilidade de medicamentos e acesse listas oficiais',
      links: [
        {
          name: 'Remédio na Hora - Consulta Online',
          url: 'https://smsprefeiturasp.com.br/remedionahora/',
          description: 'Sistema oficial para consultar disponibilidade de medicamentos em tempo real nas farmácias municipais',
          type: 'external',
          featured: true
        },
        {
          name: 'REMUME - Lista Oficial de Medicamentos',
          url: 'https://prefeitura.sp.gov.br/web/saude/w/atencao_basica/218750',
          description: 'Relação Municipal de Medicamentos Essenciais - lista completa dos medicamentos disponíveis no SUS municipal',
          type: 'external'
        }
      ]
    },
    {
      title: 'Dados Oficiais e Cadastros',
      icon: FileText,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      description: 'Acesso às bases de dados oficiais do sistema de saúde',
      links: [
        {
          name: 'CNES - Cadastro Nacional de Estabelecimentos',
          url: 'https://cnes2.datasus.gov.br/Listar_Mantidas.asp',
          description: 'Base de dados nacional com informações detalhadas de todos os estabelecimentos de saúde',
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
        return 'Baixar PDF Oficial';
      case 'external':
        return 'Acessar Site Oficial';
      default:
        return 'Acessar';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-blue-black text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-200 rounded-full px-6 py-3 text-sm font-medium border border-white/20">
              <ExternalLink className="h-4 w-4" />
              Links Oficiais São Paulo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Acesso Direto aos 
              <span className="block text-blue-300">Serviços Oficiais</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Todos os links oficiais da Prefeitura de São Paulo para acessar 
              informações de saúde, localizar unidades e consultar medicamentos
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="section-padding bg-red-50 border-b-4 border-red-200">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              Números de Emergência
            </h2>
            <p className="text-red-600">Em casos de emergência, ligue imediatamente:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyInfo.map((emergency, index) => (
              <Card key={index} className="border-red-200 bg-white">
                <CardContent className="text-center p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">{emergency.number}</div>
                  <div className="font-semibold text-red-700">{emergency.name}</div>
                  <div className="text-sm text-red-600">{emergency.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Links Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-12">
            {linkSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${section.color}`}>
                    <section.icon className={`h-8 w-8 ${section.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">{section.title}</h2>
                    <p className="text-slate-600">{section.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.links.map((link, linkIndex) => (
                    <Card key={linkIndex} className={`${link.featured ? 'ring-2 ring-primary/20 ' : ''}hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <CardTitle className="flex items-start justify-between gap-3">
                          <span className="text-lg leading-tight">{link.name}</span>
                          {link.featured && (
                            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                              Destaque
                            </span>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {link.description}
                        </p>
                        <Button
                          asChild
                          className="w-full text-sm py-6 shadow-md hover:shadow-lg transition-all duration-300"
                          size="lg"
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-700">
                <Info className="h-6 w-6" />
                Informações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-blue-700">
              <div className="space-y-2">
                <p><strong>📱 Para melhor experiência mobile:</strong> Os PDFs podem demorar para carregar em conexões lentas</p>
                <p><strong>🔄 Dados atualizados:</strong> Todos os links levam aos sites oficiais da Prefeitura de São Paulo</p>
                <p><strong>💬 Dúvidas:</strong> Entre em contato com a Central 156 para esclarecimentos</p>
                <p><strong>🕐 Horários:</strong> Consulte sempre os horários de funcionamento nos sites oficiais</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default LinksOficiais;
