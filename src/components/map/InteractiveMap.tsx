
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
  type: 'UBS' | 'UPA' | 'Farmácia Popular';
  lat: number;
  lng: number;
  address: string;
  phone?: string;
  hours?: string;
}

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedCity, setSelectedCity] = useState<'recife' | 'saopaulo'>('recife');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data para demonstração
  const healthUnits: Record<string, HealthUnit[]> = {
    recife: [
      {
        id: 1,
        name: 'UBS Boa Viagem',
        type: 'UBS',
        lat: -8.1131,
        lng: -34.8901,
        address: 'Av. Boa Viagem, 123 - Boa Viagem',
        phone: '(81) 3355-1234',
        hours: '7h às 17h'
      },
      {
        id: 2,
        name: 'UPA Torrões',
        type: 'UPA',
        lat: -8.0478,
        lng: -34.8772,
        address: 'Rua dos Torrões, 456 - Torrões',
        phone: '(81) 3355-5678',
        hours: '24h'
      },
      {
        id: 3,
        name: 'Farmácia Popular Casa Amarela',
        type: 'Farmácia Popular',
        lat: -8.0389,
        lng: -34.9067,
        address: 'Estrada do Arraial, 789 - Casa Amarela',
        phone: '(81) 3355-9012',
        hours: '8h às 18h'
      }
    ],
    saopaulo: [
      {
        id: 4,
        name: 'UBS Vila Madalena',
        type: 'UBS',
        lat: -23.5505,
        lng: -46.6333,
        address: 'Rua Harmonia, 123 - Vila Madalena',
        phone: '(11) 3333-1234',
        hours: '7h às 17h'
      },
      {
        id: 5,
        name: 'UPA Liberdade',
        type: 'UPA',
        lat: -23.5613,
        lng: -46.6342,
        address: 'Rua da Liberdade, 456 - Liberdade',
        phone: '(11) 3333-5678',
        hours: '24h'
      },
      {
        id: 6,
        name: 'Farmácia Popular Sé',
        type: 'Farmácia Popular',
        lat: -23.5507,
        lng: -46.6334,
        address: 'Praça da Sé, 789 - Centro',
        phone: '(11) 3333-9012',
        hours: '8h às 18h'
      }
    ]
  };

  const cityCoordinates = {
    recife: { lat: -8.0476, lng: -34.8770, zoom: 12 },
    saopaulo: { lat: -23.5505, lng: -46.6333, zoom: 11 }
  };

  const getMarkerIcon = (type: string) => {
    const colors = {
      'UBS': '#22c55e',
      'UPA': '#ef4444',
      'Farmácia Popular': '#3b82f6'
    };

    return L.divIcon({
      html: `<div style="background-color: ${colors[type as keyof typeof colors] || '#6b7280'}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        ${type === 'UBS' ? '🏥' : type === 'UPA' ? '🚑' : '💊'}
      </div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
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
        <div class="p-2">
          <h3 class="font-bold text-lg text-secondary">${unit.name}</h3>
          <p class="text-sm text-primary font-medium">${unit.type}</p>
          <p class="text-sm mt-1">${unit.address}</p>
          ${unit.phone ? `<p class="text-sm"><strong>Telefone:</strong> ${unit.phone}</p>` : ''}
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
            Recife
          </button>
          <button
            onClick={() => setSelectedCity('saopaulo')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCity === 'saopaulo'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            São Paulo
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
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
