import { Hono } from "@hono/hono";
import classFile from "../data/class.json" with { type: "json" };

const classes = new Hono();

classes.get("/", (c) => {
  return c.json(classFile);
});

classes.get("/:name", (c) => {
  const name = c.req.param("name").toLowerCase();
  const classData = classFile.find((item) => item.name && item.name.toLowerCase() === name);
  if (classData) {
    return c.json(classData);
  } else {
    return c.notFound();
  }
});

export default classes;