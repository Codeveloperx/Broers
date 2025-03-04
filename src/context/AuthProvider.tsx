import { useState, useEffect, useMemo } from "react";
import { AuthContext } from "./AuthContext";
import { User, AuthContextType } from "./types";
import { getStoredAuth, saveAuth, clearAuth } from "../util/authStorage";

type PropsType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { user, isAuthenticated } = getStoredAuth();
    setUser(user);
    setIsAuthenticated(isAuthenticated);
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === "admin@admin.com" && password === "Admin") {
      const userData: User = { email };
      saveAuth(userData);
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    clearAuth();
    setUser(null);
    setIsAuthenticated(false);
  };

  const contextValue = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
    }),
    [user, isAuthenticated, isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
