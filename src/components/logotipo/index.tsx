import Image from "next/image"

import styles from "@/components/logotipo/styles.module.css"
export function Logotipo(){
    return(<div className={styles.boxTitle}>
        <Image src="/assets/logo.svg" alt="logo" className={styles.logoImage} width={318} height={274}/>

        <div className={styles.logoText}>
        <span className={styles.dev}>DEV</span><span className={styles.chat}>CHAT</span>
          </div>
    </div>)
}