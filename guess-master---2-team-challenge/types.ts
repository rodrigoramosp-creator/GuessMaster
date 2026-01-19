
export enum Category {
  ANIMALS = 'Animales',
  COUNTRIES = 'Países',
  BRANDS = 'Marcas',
  MIMICRY = 'Mímicas',
  GEOGRAPHY = 'Geografía',
  ANATOMY = 'Anatomía',
  MUSIC = 'Música',
  ART = 'Arte',
  SPORTS = 'Deportes',
  FOOD = 'Comida',
  CHARACTERS = 'Personajes',
  FAMOUS_PEOPLE = 'Personas Célebres',
  PROFESSIONS = 'Profesiones',
  PERU_PRESIDENTS = 'Presidentes del Perú',
  BOOKS = 'Libros',
  POKEMON = 'Pokémon'
}

export interface WordItem {
  text: string;
  subtext?: string;
}

export type Team = {
  name: string;
  score: number;
  color: string;
};

export type GameState = 'setup' | 'category-selection' | 'waiting' | 'playing' | 'round-results' | 'game-over';

export interface RoundResult {
  word: WordItem;
  correct: boolean;
}

export interface GameSettings {
  roundDuration: number;
  categories: Category[];
}
