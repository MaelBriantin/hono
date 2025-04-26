import { Hono } from "@hono/hono";
import ClassController from "../controllers/ClassController.ts";
const classes = new Hono();

classes.get("/", () => {
  return ClassController.getAllClasses();
});

classes.get("/:name", (c) => {
  const name = c.req.param("name").toLowerCase();
  return ClassController.getClassByName(name);
});

export default classes;