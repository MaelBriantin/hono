import { Hono } from "@hono/hono";
import classRoutes from "./classes.ts";
import adminRoutes from "./admin.ts";
import weaponRoutes from "./weapons.ts";

const router = new Hono();

router.route('/classes', classRoutes);
router.route('/admin', adminRoutes);
router.route('/weapons', weaponRoutes);

export default router;