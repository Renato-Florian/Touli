// Colores de Touli, copiados de la colección de variables "Touli · Color" de Figma.
// Regla: Figma "brand/primary" -> código colors.brand.primary
export const colors = {
  brand: {
    primary: '#7f19ff', // violeta/600
    deep: '#4f1899', // violeta/800
    soft: '#f0e8ff', // violeta/050
    accent: '#ff6a00', // naranja/500
    accentInk: '#4a2100', // naranja/900
    accentSoft: '#fff2e8', // naranja/050
  },
  text: {
    primary: '#182b43', // neutro/900
    secondary: '#56657b', // neutro/600
    muted: '#8b97a8', // neutro/400
    inverse: '#ffffff',
    inverseMuted: '#ddc7ff', // violeta/200
  },
  background: {
    page: '#f7f8fc', // neutro/050
  },
  surface: {
    card: '#ffffff',
    input: '#eef1f5', // neutro/100
  },
  border: {
    default: '#d8dfe8', // neutro/200
  },
  info: { foreground: '#0284c7', soft: '#e9f6fe' },
  success: { foreground: '#14804a', soft: '#ecfdf3' },
  error: { foreground: '#b42332', soft: '#fff1f2' },
  warning: { foreground: '#4a2100', soft: '#fff2e8' },
  disabled: { background: '#d8dfe8', foreground: '#56657b' },
  mascot: { purple: '#702182', gold: '#ffd22e', orange: '#ee8500' },
  accentPink: { foreground: '#d70a63', soft: '#fff0f6' },
} as const;
