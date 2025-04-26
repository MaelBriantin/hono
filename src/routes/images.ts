import { Hono } from "@hono/hono";
import { InternalServerException, NotFoundException } from "../utils/exceptions.ts";

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
    if (error instanceof Deno.errors.NotFound) {
      return NotFoundException.response(`Image ${name}.png not found`);
    }
    return InternalServerException.response();
  }
});

export default images;