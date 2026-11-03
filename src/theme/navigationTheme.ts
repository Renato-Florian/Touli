import { DefaultTheme, type Theme } from '@react-navigation/native';
import { colors } from './colors';

// Le dice a React Navigation que use los colores de Touli (fondo, bordes, etc.).
export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.brand.primary,
    background: colors.background.page,
    card: colors.surface.card,
    text: colors.text.primary,
    border: colors.border.default,
    notification: colors.brand.accent,
  },
};
