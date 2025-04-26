import "@std/dotenv/load";
import { WeaponType } from "../types/data.ts";
import Class from "./Class.ts";
import classData from "../data/class.json" with { type: "json" }; // Importer les données des classes
import { InvalidArgumentException } from "../utils/exceptions.ts";

const validClassNames = classData.map(c => c.name);

class Weapon {
  constructor(
    public name: string,
    public description: string,
    public type: WeaponType,
    public allowedClasses: Class['name'][],
  ) {}

  private static validateJsonData(data: Record<string, unknown>): void {
    if (typeof data.name !== 'string' || !data.name) {
      throw new InvalidArgumentException("Invalid weapon data: 'name' is missing or not a string.");
    }
    if (typeof data.description !== 'string') {
      throw new InvalidArgumentException("Invalid weapon data: 'description' is missing or not a string.");
    }
    if (typeof data.type !== 'string' || !data.type) {
      throw new InvalidArgumentException("Invalid weapon data: 'type' is missing or not a string.");
    }
    if (!Object.values(WeaponType).includes(data.type as WeaponType)) {
      throw new InvalidArgumentException(`Invalid weapon data: 'type' ("${data.type}") is not a valid WeaponType.`);
    }
    if (!Array.isArray(data.allowedClasses) || !data.allowedClasses.every(item => typeof item === 'string')) {
      throw new InvalidArgumentException("Invalid weapon data: 'allowedClasses' must be an array of strings.");
    }

    // Nouvelle validation : vérifier que chaque classe autorisée est valide
    const invalidClasses = (data.allowedClasses as string[]).filter(className => !validClassNames.includes(className));
    if (invalidClasses.length > 0) {
        throw new Error(`Invalid weapon data: 'allowedClasses' contains invalid class names: ${invalidClasses.join(', ')}.`);
    }
  }

  static fromJson(json: unknown): Weapon {
    if (typeof json !== 'object' || json === null) {
      throw new Error("Invalid weapon data: input must be an object.");
    }
    const data = json as Record<string, unknown>;

    this.validateJsonData(data);

    return new Weapon(
      data.name as string,
      data.description as string,
      data.type as WeaponType,
      data.allowedClasses as Class['name'][],
    );
  }
}

export default Weapon;