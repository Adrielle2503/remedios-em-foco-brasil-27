
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu, X, User, ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/auth/AuthModal';
import UserProfile from '@/components/auth/UserProfile';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Medicamentos', href: '/medicamentos' },
    { name: 'Mapa', href: '/mapa' },
    { name: 'Unidades', href: '/unidades' },
    { name: 'Links Oficiais', href: '/links-oficiais' },
    { name: 'Comunidade', href: '/comunidade' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contatos', href: '/contatos' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleAuthClick = () => {
    if (user) {
      setShowUserProfile(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`${
            isActive(item.href)
              ? 'text-primary font-semibold'
              : 'text-slate-600 hover:text-primary'
          } transition-colors duration-200 ${
            mobile ? 'block py-2 text-base' : 'text-sm'
          } ${item.name === 'Links Oficiais' ? 'flex items-center gap-1' : ''}`}
          onClick={() => mobile && setMobileMenuOpen(false)}
        >
          {item.name}
          {item.name === 'Links Oficiais' && <ExternalLink className="h-3 w-3" />}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="bg-primary p-2 rounded-lg shadow-md">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary">mapSaúde</span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-8">
                <NavLinks />
              </nav>
            )}

            {/* Desktop Auth Button */}
            {!isMobile && (
              <Button
                onClick={handleAuthClick}
                variant={user ? "outline" : "default"}
                size="sm"
                className="shadow-md hover:shadow-lg transition-all duration-200"
              >
                <User className="h-4 w-4 mr-2" />
                {user ? user.name : 'Entrar'}
              </Button>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between pb-6 border-b">
                      <Link 
                        to="/" 
                        className="flex items-center space-x-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="bg-primary p-2 rounded-lg">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-secondary">mapSaúde</span>
                      </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-6">
                      <div className="space-y-1">
                        <NavLinks mobile />
                      </div>
                    </nav>

                    {/* Mobile Auth Button */}
                    <div className="pt-6 border-t">
                      <Button
                        onClick={() => {
                          handleAuthClick();
                          setMobileMenuOpen(false);
                        }}
                        variant={user ? "outline" : "default"}
                        className="w-full shadow-md"
                      >
                        <User className="h-4 w-4 mr-2" />
                        {user ? user.name : 'Entrar / Cadastrar'}
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal} 
      />

      {/* User Profile Modal */}
      <UserProfile 
        open={showUserProfile} 
        onOpenChange={setShowUserProfile} 
      />
    </>
  );
};

export default Header;
