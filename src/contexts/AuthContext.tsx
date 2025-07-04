
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  ubsReferencia?: {
    nome: string;
    endereco: string;
    cidade: 'recife' | 'saopaulo';
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Carregar usuário do localStorage ao inicializar
    const savedUser = localStorage.getItem('mapSaude_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular autenticação - em produção, isso seria feito no backend
    const users = JSON.parse(localStorage.getItem('mapSaude_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userToSet = { ...foundUser };
      delete userToSet.password; // Não manter senha na sessão
      setUser(userToSet);
      localStorage.setItem('mapSaude_user', JSON.stringify(userToSet));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem('mapSaude_users') || '[]');
    
    // Verificar se usuário já existe
    if (users.find((u: any) => u.email === email)) {
      return false;
    }
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password // Em produção, isso seria hasheado
    };
    
    users.push(newUser);
    localStorage.setItem('mapSaude_users', JSON.stringify(users));
    
    // Fazer login automático após registro
    const userToSet = { ...newUser };
    delete userToSet.password;
    setUser(userToSet);
    localStorage.setItem('mapSaude_user', JSON.stringify(userToSet));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mapSaude_user');
  };

  const updateUserProfile = (data: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('mapSaude_user', JSON.stringify(updatedUser));
    
    // Atualizar também na lista de usuários
    const users = JSON.parse(localStorage.getItem('mapSaude_users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...data };
      localStorage.setItem('mapSaude_users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUserProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
