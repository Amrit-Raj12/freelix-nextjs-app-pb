/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")
module.exports = {
  i18n,
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images**",
      },
      {
        protocol: "https",
        hostname: "images.thedirect.com",
        port: "",
        pathname: "/media/article_full/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/1200/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/M/**",
      },
      {
        protocol: "https",
        hostname: "posterspy.com",
        port: "",
        pathname: "/wp-content/uploads/2023/09/**",
      },
      {
        protocol: "https",
        hostname: "images.moviesanywhere.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        port: "",
        pathname: "/ffe/siteui/acquisition/ourStory/fuji/desktop/**",
      },
      {
        protocol: "https",
        hostname: "occ-0-6245-2164.1.nflxso.net",
        port: "",
        pathname: "/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/wp/**",
      },

      {
        protocol: "https",
        hostname: "regalcdn.azureedge.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

// https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d

// https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg
