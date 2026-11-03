import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DEMO_PASSWORD, DEMO_USER, type DemoUser } from '../data/demoUser';

type SignInResult = { ok: true } | { ok: false; error: string };

type AuthContextValue = {
  user: DemoUser | null;
  signIn: (codeOrEmail: string, password: string) => SignInResult;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);

  const signIn = useCallback((codeOrEmail: string, password: string): SignInResult => {
    const typed = codeOrEmail.trim().toLowerCase();
    if (typed === '' || password === '') {
      return { ok: false, error: 'Escribe tu código o correo institucional y tu contraseña.' };
    }
    const codeMatches = typed === DEMO_USER.code || typed === DEMO_USER.email;
    if (!codeMatches || password !== DEMO_PASSWORD) {
      return { ok: false, error: 'El código o la contraseña no coinciden.' };
    }
    setUser(DEMO_USER);
    return { ok: true };
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(() => ({ user, signIn, signOut }), [user, signIn, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
