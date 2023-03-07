// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    css: [
        '~/assets/css/animate.css',
        '~/assets/css/icofont.min.css',
        '~/assets/css/style.css',
        '~/assets/css/swiper.min.css'

      ],
      app:{
        head: {
          script: [
            {
              src: "~/assets/js/jquery.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/bootstrap.bundle.min.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/waypoints.min.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/jquery.counterup.min.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/wow.min.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/isotope.pkgd.min.js",
              async: true,
              crossorigin: "anonymous"
            },
            {
              src: "~/assets/js/functions.js",
              async: true,
              crossorigin: "anonymous"
            },
          ],
        }
    }
  
})
