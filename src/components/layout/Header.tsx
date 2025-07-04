
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/auth/AuthModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Medicamentos', href: '/medicamentos' },
    { name: 'Mapa', href: '/mapa' },
    { name: 'Unidades', href: '/unidades' },
    { name: 'Comunidade', href: '/comunidade' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contatos', href: '/contatos' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">mS</span>
          </div>
          <span className="text-xl font-bold text-secondary">mapSaúde</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-slate-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-2">
          {isAuthenticated ? (
            <Link to="/perfil">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                {user?.name?.split(' ')[0] || 'Perfil'}
              </Button>
            </Link>
          ) : (
            <AuthModal>
              <Button size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            </AuthModal>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t pt-4">
                {isAuthenticated ? (
                  <Link to="/perfil" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      {user?.name?.split(' ')[0] || 'Perfil'}
                    </Button>
                  </Link>
                ) : (
                  <AuthModal>
                    <Button className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Entrar
                    </Button>
                  </AuthModal>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
