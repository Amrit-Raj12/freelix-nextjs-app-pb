// components/Layout.tsx
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"
import MovieHeader from "./MovieHeader"
import UserAuthHeader from "./UserAuthHeader"
import Footer from "./Footer"
import Header from "./Header"
import LanguageSelector from "./LanguageSelector"

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname()

  // console.log('pathname', pathname)

  const headerFunction = () => {
    switch (pathname) {
      case "/browse":
        return <MovieHeader />

      // case '/users':
      //   return <UserAuthHeader />

      case "/auth/login":
        return <Header />

      case "/auth/get-password-token":
        return <Header />

      case "/auth/reset-password":
        return <Header />

      default:
        return null
    }
  }

  return (
    <div
      className={`flex flex-col min-h-screen overflow-x-hidden w-[120%] md:w-full overflow-hidden ${
        pathname === "/recomended" ? "bg-black" : ""
      }`}
    >
      {headerFunction()}
      {children}
      {pathname === "/browse" ? "" : <Footer />}
    </div>
  )
}

export default Layout
