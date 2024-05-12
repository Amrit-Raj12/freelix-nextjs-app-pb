import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

const LanguageSelector = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, undefined, { locale })
  }

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        {t("common:english")}
      </button>
      <button onClick={() => changeLanguage("hi")}>{t("common:hindi")}</button>
    </div>
  )
}

export default LanguageSelector
