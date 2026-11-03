import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type Props = {
  label: string;
  onPress: () => void;
  showArrow?: boolean;
  disabled?: boolean;
};

// Botón de acción "Estilo=Primario" (y "Deshabilitado") de Figma.
export function ActionButton({ label, onPress, showArrow = true, disabled = false }: Props) {
  const textColor = disabled ? colors.disabled.foreground : colors.text.inverse;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: disabled ? colors.disabled.background : colors.brand.primary },
        pressed && styles.pressed,
      ]}
    >
      <Text style={[typography.accion, { color: textColor }]}>{label}</Text>
      {showArrow && <ArrowRight size={14} color={textColor} strokeWidth={2.2} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 46,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.s8,
  },
  pressed: { opacity: 0.85 },
});
