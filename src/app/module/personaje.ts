type uprgadesType = {
  name: string;
  value: string;
}

type skillTalentsType = {
  name: string;
  unlock: string;
  description: string;
  upgrades: Array<uprgadesType>;
  type: string;
}

type passiveTalentsType = {
  name: string;
  unlock: string;
  descripcion: string;
  level?: number;
}

type constellationsType = {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface Personaje {
  name: string;
  title: string;
  vision: string;
  weapon: string;
  affiliation: string;
  rarity: number;
  constellation: string;
  description: string;
  skillTalents: Array<skillTalentsType>;
  passiveTalents: Array<passiveTalentsType>;
  constellations: Array<constellationsType>;
  visionKey: string;
  weaponType: string;
}
