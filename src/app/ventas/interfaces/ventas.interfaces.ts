export enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
  Negro = 'Negro',
  Blanco = 'Blanco'
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}