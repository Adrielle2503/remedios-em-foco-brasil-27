
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';
import InteractiveMap from '@/components/map/InteractiveMap';

const Mapa = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Mapa Interativo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Visualize unidades de saúde próximas a você
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
            <div className="flex items-start gap-3">
              <Navigation className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-800 mb-1">Como usar o mapa</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Clique nos marcadores para ver informações detalhadas</li>
                  <li>• Use os botões para alternar entre Recife e São Paulo</li>
                  <li>• Cores diferentes representam tipos de unidades distintos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Unidades de Saúde
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InteractiveMap />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Mapa;
