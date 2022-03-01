import React, { createContext, useState, useContext, ReactNode } from "react";
import api from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const {
      data: { token, user },
    } = await api.post("/sessions", {
      email,
      password,
    });
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setData({ token, user });
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
