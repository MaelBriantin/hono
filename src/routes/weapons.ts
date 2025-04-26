import { Hono } from "@hono/hono";
import weaponFile from "../data/weapon.json" with { type: "json" };

const classes = new Hono();

classes.get("/", (c) => {
  return c.json(weaponFile);
});

classes.get("/:name", (c) => {
  const name = c.req.param("name").toLowerCase();
  const weaponData = weaponFile.find((item) => item.name && item.name.toLowerCase() === name);
  if (weaponData) {
    return c.json(weaponData);
  } else {
    return c.notFound();
  }
});

classes.get("/type/:type", (c) => {
  const type = c.req.param("type").toLowerCase();
  const weaponData = weaponFile.filter((item) => item.type && item.type.toLowerCase() === type);
  if (weaponData.length > 0) {
    return c.json(weaponData);
  } else {
    return c.notFound();
  }
});

export default classes;