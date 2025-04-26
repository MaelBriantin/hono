export interface Class {
  name: string;
  description: string;
}

export enum WeaponType {
  Sword = "Sword",
  Bow = "Bow",
  Staff = "Staff",
  Dagger = "Dagger",
  Axe = "Axe",
}

export interface Weapon {
  name: string;
  description: string;
  type: WeaponType;
}
