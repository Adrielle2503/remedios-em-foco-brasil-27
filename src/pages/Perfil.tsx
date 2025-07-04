
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import UserProfile from '@/components/auth/UserProfile';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, LogIn } from 'lucide-react';
import AuthModal from '@/components/auth/AuthModal';

const Perfil = () => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        {isAuthenticated ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Meu Perfil
              </h1>
              <p className="text-xl text-gray-600">
                Gerencie suas informações e UBS de referência
              </p>
            </div>
            <UserProfile />
          </>
        ) : (
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-blue-100 rounded-full w-fit mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl text-secondary">
                  Faça login para continuar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Para acessar seu perfil e registrar sua UBS de referência, 
                  você precisa fazer login ou criar uma conta.
                </p>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowAuthModal(true)}
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Entrar ou Cadastrar
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal} 
      />
    </Layout>
  );
};

export default Perfil;
