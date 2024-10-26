import { createContext, useState } from "react";
import * as authFunctions from "../../../middlewares/auth";

interface AuthContextType {
  user: any;
  getUser: () => void;
  setUser: (user: any) => void;
  createSession: (user: any, redirectPath?: string) => void;
  updateUser: (user: any) => void;
  updateStatusUser: (user: any) => void;
  login: (email: string, password: string) => Promise<any>;
  logout: (destinity?: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

function useAuthProvider() {
  return { ...authFunctions };
}

export function AuthMiddleware({ children }: { children: any }) {
  const auth = useAuthProvider();
  if (!auth.getUser()) {
    location.href = `/?next=${location.pathname}`;
    return;
  }
  return <>{children}</>;
}

export function AuthProvider({ children }: { children: any }) {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={{ ...auth, user: auth.getUser() }}>
      {children}
    </AuthContext.Provider>
  );
}
