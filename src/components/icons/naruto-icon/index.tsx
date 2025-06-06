import Image from "next/image"
import styles from "@/components/vertical_bar/icons_function/styles.module.css"

function NarutoIcon() {
    return <Image src="/assets/profileIcon.svg" alt="Ícone Naruto" width={45} height={45} className={styles.icon}/>
}

export { NarutoIcon }