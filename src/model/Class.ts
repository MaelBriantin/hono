import type { ClassData } from "@types";
import "@std/dotenv/load";

class Class {
  constructor(
    public name: string,
    public description: string,
    public image: string | null = null,
  ) {}

  static fromJson(json: ClassData): Class {
    return new Class(
      json.name,
      json.description,
      Deno.env.get("BASE_URL") + `/images/deno-${json.name.toLowerCase()}`,
    );
  }
}

export default Class;