// DATOS FICTICIOS para la demostración. No son credenciales reales.
// Para entrar en el login de demostración usa:
//   Código o correo: u20210045  (o u20210045@tls.edu.pe)
//   Contraseña:      touli123
export const DEMO_PASSWORD = 'touli123';

export type DemoUser = {
  name: string;
  code: string;
  email: string;
  career: string;
  cycle: string;
};

export const DEMO_USER: DemoUser = {
  name: 'Juan Renato',
  code: 'u20210045',
  email: 'u20210045@tls.edu.pe',
  career: 'Diseño Gráfico & Comunicación',
  cycle: 'Ciclo 5 · Turno Mañana',
};
