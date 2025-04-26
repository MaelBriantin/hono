import { Hono } from "@hono/hono";
import WeaponController from "../controllers/WeaponController.ts";

const classes = new Hono();

classes.get("/", () => {
  return WeaponController.getAllWeapons();
});

classes.get("/:name", (c) => {
  const name = c.req.param("name").toLowerCase();
  return WeaponController.getWeaponByName(name)
});

classes.get("/type/:type", (c) => {
  const type = c.req.param("type").toLowerCase();
  return WeaponController.getWeaponByType(type)
});

export default classes;