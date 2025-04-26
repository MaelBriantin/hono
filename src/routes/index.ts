import { Hono } from "@hono/hono";
import classRoutes from "./classes.ts";
import adminRoutes from "./admin.ts";
import weaponRoutes from "./weapons.ts";
import images from "./images.ts";

const router = new Hono();

router.route('/classes', classRoutes);
router.route('/admin', adminRoutes);
router.route('/weapons', weaponRoutes);
router.route('/images', images);

router.get("/", (c) => {
  return c.text("Welcome to Deno Dungeons API!");
});

export default router;