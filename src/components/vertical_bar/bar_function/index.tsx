import styles from "@/components/vertical_bar/bar_function/styles.module.css"
import Image from "next/image"
import SideBarIcon from "@/components/vertical_bar/icons_function"
import { SideBarEnum } from "@/models/SideBarOptions"
import Link from "next/link";

import { MdPersonAddAlt1 } from "react-icons/md";

interface sideBarProps{
    activeButton: SideBarEnum;
}

export default function SideBar(props: sideBarProps){
    const { activeButton } = props;

    return (
        <div className={styles.sideBar}>
            <div className={styles.divIcons}>
                <Link href={"http://localhost:3000"} className={styles.link}>
                <SideBarIcon variant= {SideBarEnum.chatIcon} active= {activeButton === SideBarEnum.chatIcon}/>
                </Link>
                <Link href={"http://localhost:3000/add-contact"} className={styles.link}>
                <SideBarIcon variant= {SideBarEnum.addContactIcon} active= {activeButton === SideBarEnum.addContactIcon}/>
                </Link>
                <Link href={"http://localhost:3000/profile"} className={styles.link}>
                <SideBarIcon variant= {SideBarEnum.profileIcon} active= {activeButton === SideBarEnum.profileIcon}/>
                </Link>
           </div>
           <div>
                <SideBarIcon variant={SideBarEnum.exitIcon} active={false}/>
           </div>
        </div>
    )

} 