import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import api from '../api/axios';

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem('token')
  );

  const login = async (username: string, password: string) => {
    // Ajuste o endpoint e o shape do body conforme seu backend
    const { data } = await api.post('/auth/login', { username, password });
    const jwt = data.access_token; // ou data.access_token, depende do seu backend
    localStorage.setItem('token', jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}