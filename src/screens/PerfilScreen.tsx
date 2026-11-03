import React from 'react';
import { PlaceholderScreen } from './PlaceholderScreen';
import { ActionButton } from '../components/ActionButton';
import { useAuth } from '../context/AuthContext';

// Pantalla "Perfil" (provisional). Incluye "Cerrar sesión" para poder probar el login varias veces.
export default function PerfilScreen() {
  const { user, signOut } = useAuth();
  return (
    <PlaceholderScreen context="ESTUDIANTE TLS" title="Perfil">
      <ActionButton label={`Cerrar sesión (${user?.name ?? ''})`} onPress={signOut} showArrow={false} />
    </PlaceholderScreen>
  );
}
