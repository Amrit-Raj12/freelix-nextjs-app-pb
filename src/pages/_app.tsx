import Layout from "@/components/Layout"
import "@/styles/globals.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { ThemeProvider } from "@material-tailwind/react"
import type { AppProps } from "next/app"
import React, { useEffect, useState } from "react"
import { Provider } from "react-redux"
import store, { persistor } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { useRouter } from "next/router"
import { appWithTranslation } from "next-i18next"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // useEffect(() => {
  //   const handleContextMenu = (event: MouseEvent) => {
  //     event.preventDefault() // Prevent context menu
  //     debugger
  //     // if (router.pathname !== "/404") {
  //     //   router.push("/404") // Redirect to 404 page if not already on it
  //     //   debugger // Pause script execution
  //     // }
  //   }

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (
  //       // (event.ctrlKey || event.metaKey) &&
  //       // (event.shiftKey || event.altKey) &&
  //       // (event.key === "I" || event.key === "i")
  //       (event.ctrlKey && event.shiftKey) ||
  //       (event.metaKey && event.altKey)
  //     ) {
  //       event.preventDefault()
  //       // alert("Hmmm..., trying to inspect")

  //       // if (router.pathname !== "/404") {
  //       //   router.push("/404") // Redirect to 404 page if not already on it
  //       //   debugger // Pause script execution
  //       // }
  //     }
  //   }

  //   window.addEventListener("contextmenu", handleContextMenu)
  //   window.addEventListener("keydown", handleKeyDown)

  //   return () => {
  //     window.removeEventListener("contextmenu", handleContextMenu)
  //     window.removeEventListener("keydown", handleKeyDown)
  //   }
  // }, [router])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  )
}

export default appWithTranslation(App)
