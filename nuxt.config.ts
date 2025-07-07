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
            "DogaDoga is a creative agency that turns bold ideas into sharp content. From video and campaigns to AI-driven storytelling, we make brands impossible to ignore.",
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
          property: "og:image",
          content: "/og.png",
        },
        {
          property: "og:description",
          content:
            "DogaDoga is a creative agency that turns bold ideas into sharp content. From video and campaigns to AI-driven storytelling, we make brands impossible to ignore. ",
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
			link: [{ rel: "icon", type: "image/png", href: "/fav_2.png" }],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: { port: 6969 },
});
