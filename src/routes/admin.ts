import { Hono } from "@hono/hono";
import { basicAuth } from "@hono/hono/basic-auth";

const admin = new Hono();

admin.use(
  "/*",
  basicAuth({
    username: "admin",
    password: "secret",
  }),
);

admin.get("/", (c) => {
  return c.text("You are authorized!");
});

export default admin;