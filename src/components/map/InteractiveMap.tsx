
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Hospital, Pill } from 'lucide-react';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface HealthUnit {
  id: number;
  name: string;
  type: 'UBS' | 'UPA' | 'Farmácia Popular' | 'Hospital';
  lat: number;
  lng: number;
  address: string;
  phone?: string;
  hours?: string;
  bairro?: string;
}

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedCity, setSelectedCity] = useState<'recife' | 'saopaulo'>('recife');
  const [isLoading, setIsLoading] = useState(true);

  // Expanded health units data
  const healthUnits: Record<string, HealthUnit[]> = {
    recife: [
      // UBS - Recife
      {
        id: 1,
        name: 'UBS Boa Viagem',
        type: 'UBS',
        lat: -8.1131,
        lng: -34.8901,
        address: 'Av. Boa Viagem, 123 - Boa Viagem',
        phone: '(81) 3355-1234',
        hours: '7h às 17h',
        bairro: 'Boa Viagem'
      },
      {
        id: 2,
        name: 'UBS Casa Amarela',
        type: 'UBS',
        lat: -8.0389,
        lng: -34.9067,
        address: 'Estrada do Arraial, 456 - Casa Amarela',
        phone: '(81) 3355-2345',
        hours: '7h às 17h',
        bairro: 'Casa Amarela'
      },
      {
        id: 3,
        name: 'UBS Várzea',
        type: 'UBS',
        lat: -8.0434,
        lng: -34.9456,
        address: 'Rua da Várzea, 567 - Várzea',
        phone: '(81) 3355-3456',
        hours: '7h às 17h',
        bairro: 'Várzea'
      },
      {
        id: 4,
        name: 'UBS Imbiribeira',
        type: 'UBS',
        lat: -8.1089,
        lng: -34.8756,
        address: 'Rua da Imbiribeira, 789 - Imbiribeira',
        phone: '(81) 3355-4567',
        hours: '7h às 17h',
        bairro: 'Imbiribeira'
      },
      {
        id: 5,
        name: 'UBS Pina',
        type: 'UBS',
        lat: -8.0945,
        lng: -34.8823,
        address: 'Rua do Pina, 234 - Pina',
        phone: '(81) 3355-5678',
        hours: '7h às 17h',
        bairro: 'Pina'
      },
      // UPA - Recife
      {
        id: 6,
        name: 'UPA Torrões',
        type: 'UPA',
        lat: -8.0478,
        lng: -34.8772,
        address: 'Rua dos Torrões, 456 - Torrões',
        phone: '(81) 3355-9876',
        hours: '24h',
        bairro: 'Torrões'
      },
      {
        id: 7,
        name: 'UPA Casa Amarela',
        type: 'UPA',
        lat: -8.0356,
        lng: -34.9089,
        address: 'Av. Norte, 890 - Casa Amarela',
        phone: '(81) 3355-8765',
        hours: '24h',
        bairro: 'Casa Amarela'
      },
      // Hospitais - Recife
      {
        id: 8,
        name: 'Hospital da Restauração',
        type: 'Hospital',
        lat: -8.0589,
        lng: -34.8834,
        address: 'Av. Agamenon Magalhães, s/n - Derby',
        phone: '(81) 3184-1234',
        hours: '24h',
        bairro: 'Derby'
      },
      {
        id: 9,
        name: 'Hospital Getúlio Vargas',
        type: 'Hospital',
        lat: -8.0723,
        lng: -34.8945,
        address: 'Rua Senador José Henrique, 141 - Ilha do Leite',
        phone: '(81) 3421-5000',
        hours: '24h',
        bairro: 'Ilha do Leite'
      },
      // Farmácias Populares - Recife
      {
        id: 10,
        name: 'Farmácia Popular Boa Vista',
        type: 'Farmácia Popular',
        lat: -8.0634,
        lng: -34.8789,
        address: 'Rua da Soledade, 123 - Boa Vista',
        phone: '(81) 3355-9012',
        hours: '8h às 18h',
        bairro: 'Boa Vista'
      },
      {
        id: 11,
        name: 'Farmácia Popular Derby',
        type: 'Farmácia Popular',
        lat: -8.0567,
        lng: -34.8845,
        address: 'Rua do Derby, 345 - Derby',
        phone: '(81) 3355-0123',
        hours: '8h às 18h',
        bairro: 'Derby'
      }
    ],
    saopaulo: [
      // UBS - São Paulo
      {
        id: 12,
        name: 'UBS Vila Madalena',
        type: 'UBS',
        lat: -23.5505,
        lng: -46.6333,
        address: 'Rua Harmonia, 123 - Vila Madalena',
        phone: '(11) 3333-1234',
        hours: '7h às 17h',
        bairro: 'Vila Madalena'
      },
      {
        id: 13,
        name: 'UBS Jardins',
        type: 'UBS',
        lat: -23.5613,
        lng: -46.6565,
        address: 'Rua Estados Unidos, 456 - Jardins',
        phone: '(11) 3333-2345',
        hours: '7h às 17h',
        bairro: 'Jardins'
      },
      {
        id: 14,
        name: 'UBS Vila Olímpia',
        type: 'UBS',
        lat: -23.5955,
        lng: -46.6890,
        address: 'Rua Funchal, 789 - Vila Olímpia',
        phone: '(11) 3333-3456',
        hours: '7h às 17h',
        bairro: 'Vila Olímpia'
      },
      {
        id: 15,
        name: 'UBS Mooca',
        type: 'UBS',
        lat: -23.5505,
        lng: -46.5966,
        address: 'Rua da Mooca, 234 - Mooca',
        phone: '(11) 3333-4567',
        hours: '7h às 17h',
        bairro: 'Mooca'
      },
      {
        id: 16,
        name: 'UBS Ipiranga',
        type: 'UBS',
        lat: -23.5880,
        lng: -46.6106,
        address: 'Rua Bom Pastor, 567 - Ipiranga',
        phone: '(11) 3333-5678',
        hours: '7h às 17h',
        bairro: 'Ipiranga'
      },
      {
        id: 17,
        name: 'UBS Santana',
        type: 'UBS',
        lat: -23.5064,
        lng: -46.6291,
        address: 'Av. Cruzeiro do Sul, 890 - Santana',
        phone: '(11) 3333-6789',
        hours: '7h às 17h',
        bairro: 'Santana'
      },
      // UPA - São Paulo
      {
        id: 18,
        name: 'UPA 24h Vergueiro',
        type: 'UPA',
        lat: -23.5613,
        lng: -46.6342,
        address: 'Rua Vergueiro, 1000 - Liberdade',
        phone: '(11) 3333-9876',
        hours: '24h',
        bairro: 'Liberdade'
      },
      {
        id: 19,
        name: 'UPA 24h Vila Maria',
        type: 'UPA',
        lat: -23.5089,
        lng: -46.5789,
        address: 'Av. Guilherme Cotching, 1200 - Vila Maria',
        phone: '(11) 3333-8765',
        hours: '24h',
        bairro: 'Vila Maria'
      },
      {
        id: 20,
        name: 'UPA 24h Campo Limpo',
        type: 'UPA',
        lat: -23.6489,
        lng: -46.7456,
        address: 'Estrada de Itapecerica, 1500 - Campo Limpo',
        phone: '(11) 3333-7654',
        hours: '24h',
        bairro: 'Campo Limpo'
      },
      // Hospitais - São Paulo
      {
        id: 21,
        name: 'Hospital das Clínicas',
        type: 'Hospital',
        lat: -23.5558,
        lng: -46.6689,
        address: 'Rua Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César',
        phone: '(11) 2661-0000',
        hours: '24h',
        bairro: 'Cerqueira César'
      },
      {
        id: 22,
        name: 'Hospital Municipal do Tatuapé',
        type: 'Hospital',
        lat: -23.5401,
        lng: -46.5789,
        address: 'Av. Celso Garcia, 4815 - Tatuapé',
        phone: '(11) 2225-0000',
        hours: '24h',
        bairro: 'Tatuapé'
      },
      {
        id: 23,
        name: 'Hospital São Paulo',
        type: 'Hospital',
        lat: -23.5989,
        lng: -46.6445,
        address: 'Rua Napoleão de Barros, 715 - Vila Clementino',
        phone: '(11) 5576-4000',
        hours: '24h',
        bairro: 'Vila Clementino'
      },
      // Farmácias Populares - São Paulo
      {
        id: 24,
        name: 'Farmácia Popular Sé',
        type: 'Farmácia Popular',
        lat: -23.5507,
        lng: -46.6334,
        address: 'Praça da Sé, 111 - Centro',
        phone: '(11) 3333-9012',
        hours: '8h às 18h',
        bairro: 'Sé'
      },
      {
        id: 25,
        name: 'Farmácia Popular República',
        type: 'Farmácia Popular',
        lat: -23.5445,
        lng: -46.6445,
        address: 'Av. São Luís, 456 - República',
        phone: '(11) 3333-0123',
        hours: '8h às 18h',
        bairro: 'República'
      },
      {
        id: 26,
        name: 'Farmácia Popular Brás',
        type: 'Farmácia Popular',
        lat: -23.5389,
        lng: -46.6178,
        address: 'Rua do Gasômetro, 789 - Brás',
        phone: '(11) 3333-1357',
        hours: '8h às 18h',
        bairro: 'Brás'
      }
    ]
  };

  const cityCoordinates = {
    recife: { lat: -8.0476, lng: -34.8770, zoom: 11 },
    saopaulo: { lat: -23.5505, lng: -46.6333, zoom: 10 }
  };

  const getMarkerIcon = (type: string) => {
    const colors = {
      'UBS': '#22c55e',
      'UPA': '#ef4444',
      'Farmácia Popular': '#3b82f6',
      'Hospital': '#8b5cf6'
    };

    const icons = {
      'UBS': '🏥',
      'UPA': '🚑',
      'Farmácia Popular': '💊',
      'Hospital': '🏨'
    };

    return L.divIcon({
      html: `<div style="background-color: ${colors[type as keyof typeof colors] || '#6b7280'}; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 14px;">
        ${icons[type as keyof typeof icons] || '🏥'}
      </div>`,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const cityData = cityCoordinates[selectedCity];
    const map = L.map(mapRef.current).setView([cityData.lat, cityData.lng], cityData.zoom);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for health units
    const units = healthUnits[selectedCity];
    units.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], {
        icon: getMarkerIcon(unit.type)
      }).addTo(map);

      const popupContent = `
        <div class="p-3 max-w-xs">
          <h3 class="font-bold text-lg text-secondary mb-1">${unit.name}</h3>
          <p class="text-sm text-primary font-medium mb-2">${unit.type}</p>
          <p class="text-sm mb-1">${unit.address}</p>
          ${unit.bairro ? `<p class="text-sm text-gray-600 mb-1"><strong>Bairro:</strong> ${unit.bairro}</p>` : ''}
          ${unit.phone ? `<p class="text-sm mb-1"><strong>Telefone:</strong> ${unit.phone}</p>` : ''}
          ${unit.hours ? `<p class="text-sm"><strong>Horário:</strong> ${unit.hours}</p>` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    mapInstanceRef.current = map;
    setIsLoading(false);

    return () => {
      map.remove();
    };
  }, [selectedCity]);

  return (
    <div className="w-full">
      {/* City selector */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedCity('recife')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCity === 'recife'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Recife ({healthUnits.recife.length} unidades)
          </button>
          <button
            onClick={() => setSelectedCity('saopaulo')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCity === 'saopaulo'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            São Paulo ({healthUnits.saopaulo.length} unidades)
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>UBS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>UPA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span>Hospital</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span>Farmácia Popular</span>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-gray-600">Carregando mapa...</p>
            </div>
          </div>
        )}
        <div
          ref={mapRef}
          className="w-full h-96 md:h-[500px] rounded-lg shadow-lg border border-gray-200"
        />
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <Hospital className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm text-green-600 font-medium">UBS</p>
              <p className="text-lg font-bold text-green-800">
                {healthUnits[selectedCity].filter(u => u.type === 'UBS').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-sm text-red-600 font-medium">UPA</p>
              <p className="text-lg font-bold text-red-800">
                {healthUnits[selectedCity].filter(u => u.type === 'UPA').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2">
            <Hospital className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm text-purple-600 font-medium">Hospitais</p>
              <p className="text-lg font-bold text-purple-800">
                {healthUnits[selectedCity].filter(u => u.type === 'Hospital').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm text-blue-600 font-medium">Farmácias</p>
              <p className="text-lg font-bold text-blue-800">
                {healthUnits[selectedCity].filter(u => u.type === 'Farmácia Popular').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
