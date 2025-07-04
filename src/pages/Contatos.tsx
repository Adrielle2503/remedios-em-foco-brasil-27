
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimationGlobal } from '@/hooks/useScrollAnimation';

const Contatos = () => {
  useScrollAnimationGlobal();

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 scroll-animate">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-slate-600">
            Tire suas dúvidas ou envie sugestões sobre o mapSaúde
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="scroll-animate-left">
            <CardHeader>
              <CardTitle className="text-secondary">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input placeholder="Seu nome" className="border-slate-300 focus:border-primary" />
              </div>
              <div>
                <Input type="email" placeholder="Seu e-mail" className="border-slate-300 focus:border-primary" />
              </div>
              <div>
                <Input placeholder="Assunto" className="border-slate-300 focus:border-primary" />
              </div>
              <div>
                <Textarea placeholder="Sua mensagem" rows={5} className="border-slate-300 focus:border-primary" />
              </div>
              <Button className="w-full bg-primary hover:bg-blue-700 transition-colors duration-300">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="scroll-animate-right">
              <CardHeader>
                <CardTitle className="text-secondary">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">contato@mapsaude.gov.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">(81) 3355-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">Recife/PE - São Paulo/SP</span>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate-scale">
              <CardHeader>
                <CardTitle className="text-secondary">Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Segunda a Sexta: 8h às 18h<br />
                  Sistema online: 24h por dia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contatos;
