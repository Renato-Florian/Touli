// "Mapas" de pantallas. TypeScript los usa para avisarte si escribes mal el nombre de una pantalla.
export type RootStackParamList = {
  Login: undefined;
  Main: undefined; // contiene las 5 pestañas
  Notificaciones: undefined;
};

export type MainTabParamList = {
  Inicio: undefined;
  Cursos: undefined;
  Touli: undefined;
  Agenda: undefined;
  Perfil: undefined;
};
