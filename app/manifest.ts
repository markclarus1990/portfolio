import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mark Michael Angelo Clarus | Full Stack Developer",
    short_name: "Mark Clarus",
    description:
      "Full Stack Developer specializing in building scalable web applications, mobile apps, and enterprise software.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
