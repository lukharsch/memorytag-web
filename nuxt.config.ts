import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
  nitro: {
    preset: "static",
  },
  app: {
    head: {
      title: "MemoryTag",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Mit MemoryTag bleiben deinen digitalen Erinnerungen für immer erhalten. Teile deine Fotos und Alben einfach mit Freunden und Familie.",
        },
        { name: "author", content: "MemoryTag" },
        {
          name: "keywords",
          content: "MemoryTag, Fotos, Alben, Teilen, NFC, Erinnerungen",
        },
        { property: "og:title", content: "MemoryTag" },
        {
          property: "og:description",
          content:
            "Mit MemoryTag bleiben deinen digitalen Erinnerungen für immer erhalten. Teile deine Fotos und Alben einfach mit Freunden und Familie.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/favicon.png" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
});
