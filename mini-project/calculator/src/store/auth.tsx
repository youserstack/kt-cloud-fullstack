import { createContext, useState } from "react";

type AuthUser = { id: string; name: string };

// 컨텍스트는 변수로
export const AuthContext = createContext<{
  user: AuthUser | null;
  login: (name: string) => boolean;
  logout: () => void;
}>({
  user: null,
  login: () => false,
  logout: () => {},
});

// 프로바이더는 컴포넌트로
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (name: string) => {
    if (name === "admin") {
      setUser({ id: "sdhflksdhfslf", name });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
