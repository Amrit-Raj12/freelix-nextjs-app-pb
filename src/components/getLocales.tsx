// type Type = {
//   en: () => Promise<{
//     Welcome: string
//   }>
//   hi: () => Promise<{
//     welcome: string
//   }>
// }

// const dictionaries: Type = {
//   en: () => import("../../public/locales/en.json").then((r) => r.default),
//   hi: () => import("../../public/locales/hi.json").then((r) => r.default),
// }

// export const getLocales = (lang) => {
//   return dictionaries[lang]()
// }
