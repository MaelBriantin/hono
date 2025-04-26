import { Hono } from "@hono/hono";
import { basicAuth } from "@hono/hono/basic-auth";
import "@std/dotenv/load";

const admin = new Hono();

const isAuthEnabled = Deno.env.get("ADMIN_USERNAME") && Deno.env.get("ADMIN_PASSWORD");

if (isAuthEnabled) {
  admin.use(
    "/*",
    basicAuth({
      username: Deno.env.get("ADMIN_USERNAME") || "",
      password: Deno.env.get("ADMIN_PASSWORD") || "",
    }),
  );
}

admin.get("/", () => {
  return Response.json("You are authentified!");
});

export default admin;