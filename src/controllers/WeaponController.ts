import weaponData from "../data/weapon.json" with { type: "json" };
import Weapon from "../model/Weapon.ts";
import { NotFoundException } from "../utils/exceptions.ts";

class WeaponController {
  constructor() {
  }

  getAllWeapons(): Response {
    return Response.json(weaponData.map((item) => Weapon.fromJson(item)));
  }

  getWeaponByName(name: string): Response {
    const weaponFound = weaponData.find((item) => item.name && item.name.toLowerCase() === name);
    if (weaponFound) {
      return Response.json(Weapon.fromJson(weaponFound));
    } else {
      return NotFoundException.response(`Weapon with name ${name} not found`);
    }
  }

  getWeaponByType(type: string): Response {
    const weaponFound = weaponData.find((item) => item.type && item.type.toLowerCase() === type);
    if (weaponFound) {
      return Response.json(Weapon.fromJson(weaponFound));
    } else {
      return NotFoundException.response(`Weapon with type ${type} not found`);
    }
  }
}

export default new WeaponController();