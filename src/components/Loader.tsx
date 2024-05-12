import React from "react"
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className="bg-black h-[700px] md:h-screen flex items-center justify-center">
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader
