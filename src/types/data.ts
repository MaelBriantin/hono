type Class = {
  name: string;
  description: string;
  image?: string | null;
}

enum WeaponType {
  Sword = "Sword",
  Bow = "Bow",
  Staff = "Staff",
  Dagger = "Dagger",
  Axe = "Axe",
}

type Weapon = {
  name: string;
  description: string;
  type: 'Sword' | 'Bow' | 'Staff' | 'Dagger' | 'Axe';
  allowedClasses: Class['name'][];
}

export type { Class, Weapon };
export { WeaponType };
