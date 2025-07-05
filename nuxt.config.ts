export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: ["@/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_utils.scss" as *;',
          api: "modern-compiler",
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      title: "DOGADOGA",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "We’re DogaDoga, a creative agency built for brands ready to leave a mark. We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects. ",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "og:image:width",
          content: "600",
        },
        {
          property: "og:image:height",
          content: "314",
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          property: "og:description",
          content:
            "We’re DogaDoga, a creative agency built for brands ready to leave a mark. We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects. ",
        },
        {
          property: "og:title",
          content: "DOGADOGA",
        },
        {
          property: "og:site_name",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: { port: 6969 },
});
