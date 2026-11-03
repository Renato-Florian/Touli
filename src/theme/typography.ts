import type { TextStyle } from 'react-native';

// Nombres de fuente tal como los registra @expo-google-fonts/inter.
// En React Native no se usa fontWeight con fuentes personalizadas:
// cada peso es una "familia" distinta.
export const fonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
  extraBold: 'Inter_800ExtraBold',
} as const;

// Estilos de texto de Figma ("Touli/..."). lineHeight = tamaño x porcentaje de Figma.
export const typography = {
  marca: { fontFamily: fonts.bold, fontSize: 40 }, // Touli/Marca
  tituloPrincipal: { fontFamily: fonts.bold, fontSize: 28, lineHeight: 32 }, // 115%
  tituloDeVista: { fontFamily: fonts.bold, fontSize: 28, lineHeight: 32 }, // 115%
  encabezado: { fontFamily: fonts.semiBold, fontSize: 16, lineHeight: 21 }, // 130%
  cuerpo: { fontFamily: fonts.regular, fontSize: 12 },
  accion: { fontFamily: fonts.semiBold, fontSize: 12 },
  ayuda: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15 }, // 140%
  etiqueta: { fontFamily: fonts.semiBold, fontSize: 10, lineHeight: 13 }, // 130%
  navegacionBase: { fontFamily: fonts.medium, fontSize: 9 },
  navegacion: { fontFamily: fonts.bold, fontSize: 9 },
} satisfies Record<string, TextStyle>;
