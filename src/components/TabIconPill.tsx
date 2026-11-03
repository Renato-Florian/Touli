import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';

// Área del icono de la barra inferior: 44 x 30, con fondo violeta suave si la pestaña está activa.
export function TabIconPill({ focused, children }: { focused: boolean; children: React.ReactNode }) {
  return <View style={[styles.pill, focused && styles.pillActive]}>{children}</View>;
}

const styles = StyleSheet.create({
  pill: {
    width: 44,
    height: 30,
    borderRadius: radius.r12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillActive: { backgroundColor: colors.brand.soft },
});
