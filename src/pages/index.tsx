import Header from "@/components/Header"
import EnjoyPage from "@/components/Enjoy"
import DownloadPage from "@/components/Download"
import WatchPage from "@/components/Watch"
import CreatePage from "@/components/Create"
import FAQPage from "@/components/FAQ"
import { useRouter } from "next/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import AudienceType from "@/components/AudienceType"
import MovieCategories from "@/components/MovieCategories"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import TotalClient from "@/components/TotalClients"
import Popular from "@/components/Popular"

interface AnimatedComponentProps {
  children: React.ReactNode
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  // const { t, i18n } = useTranslation()
  // const router = useRouter()

  // const handleChange = (locale: any) => {
  //   // i18n.changeLanguage(locale)
  //   router.push(router.pathname, router.asPath, { locale })
  // }

  return (
    <div className="bg-black">
      <AnimatedComponent>
        <Header />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900" />
      <AnimatedComponent>
        <AudienceType />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <EnjoyPage />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <MovieCategories />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <TotalClient />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <Popular />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      {/* <AnimatedComponent>
        <DownloadPage />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <WatchPage />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
      <AnimatedComponent>
        <CreatePage />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " /> */}
      <AnimatedComponent>
        <FAQPage />
      </AnimatedComponent>
      <div className="h-[8px] bg-gray-900 " />
    </div>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
