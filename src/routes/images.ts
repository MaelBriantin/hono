import { Hono } from "@hono/hono";

const images = new Hono();

images.get("/:name", async (c) => {
  const name = c.req.param("name").toLowerCase();
  try {
    const imagePath = `../data/images/${name}.png`;
    const imageUrl = new URL(imagePath, import.meta.url);
    
    const file = await Deno.open(imageUrl, { read: true });

    const contentType = "image/png";

    return new Response(file.readable, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    if (error instanceof Deno.errors.NotFound) {
      console.error(`File not found at path calculated for: ${name}`);
      return c.notFound();
    }
    console.error(`Error serving image ${name}.png:`, error);
    return c.text("Internal Server Error", 500);
  }
});

export default images;