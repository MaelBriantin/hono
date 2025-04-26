import classData from "../data/class.json" with { type: "json" };
import Class from "../model/Class.ts";
import { NotFoundException } from "../utils/exceptions.ts";

class ClassController {
  constructor() {
  }

  getAllClasses(): Response {
    return Response.json(classData.map((item) => Class.fromJson(item)));
  }

  getClassByName(name: string): Response {
    const classFound = classData.find((item) => item.name && item.name.toLowerCase() === name);
    if (classFound) {
      return Response.json(Class.fromJson(classFound));
    } else {
      return NotFoundException.response(`Class with name ${name} not found`);
    }
  }
}

export default new ClassController();