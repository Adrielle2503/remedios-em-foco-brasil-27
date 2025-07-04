
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, MapPin, LogOut, Save } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const UserProfile = () => {
  const { user, updateUserProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    cpf: user?.cpf || '',
    ubsNome: user?.ubsReferencia?.nome || '',
    ubsEndereco: user?.ubsReferencia?.endereco || '',
    ubsCidade: user?.ubsReferencia?.cidade || 'recife' as 'recife' | 'saopaulo'
  });

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const handleSave = () => {
    updateUserProfile({
      name: formData.name,
      cpf: formData.cpf,
      ubsReferencia: {
        nome: formData.ubsNome,
        endereco: formData.ubsEndereco,
        cidade: formData.ubsCidade
      }
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      cpf: user?.cpf || '',
      ubsNome: user?.ubsReferencia?.nome || '',
      ubsEndereco: user?.ubsReferencia?.endereco || '',
      ubsCidade: user?.ubsReferencia?.cidade || 'recife' as 'recife' | 'saopaulo'
    });
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Meu Perfil
            </div>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                disabled
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: formatCPF(e.target.value) })}
              disabled={!isEditing}
              maxLength={14}
              placeholder="000.000.000-00"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-t pt-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">UBS de Referência</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Select
                value={formData.ubsCidade}
                onValueChange={(value: 'recife' | 'saopaulo') => setFormData({ ...formData, ubsCidade: value })}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recife">Recife</SelectItem>
                  <SelectItem value="saopaulo">São Paulo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubs-nome">Nome da UBS</Label>
              <Input
                id="ubs-nome"
                value={formData.ubsNome}
                onChange={(e) => setFormData({ ...formData, ubsNome: e.target.value })}
                disabled={!isEditing}
                placeholder="Ex: UBS Boa Viagem"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubs-endereco">Endereço da UBS</Label>
              <Input
                id="ubs-endereco"
                value={formData.ubsEndereco}
                onChange={(e) => setFormData({ ...formData, ubsEndereco: e.target.value })}
                disabled={!isEditing}
                placeholder="Ex: Av. Boa Viagem, 123 - Boa Viagem"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
                <Button variant="outline" onClick={handleCancel} className="flex-1">
                  Cancelar
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="w-full">
                Editar Perfil
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {user.ubsReferencia && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Sua UBS de Referência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{user.ubsReferencia.nome}</h3>
              <p className="text-gray-600">{user.ubsReferencia.endereco}</p>
              <p className="text-sm text-gray-500 capitalize">
                {user.ubsReferencia.cidade === 'saopaulo' ? 'São Paulo' : 'Recife'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserProfile;
