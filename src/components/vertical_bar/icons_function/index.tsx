import { SideBarEnum, SideBarMapIconProps } from "@/models/SideBarOptions"
import Image from "next/image"
import styles from "@/components/vertical_bar/icons_function/styles.module.css"
import path from "path";
import icons from "react-icons"
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { type } from "os";
import { NarutoIcon } from "@/components/icons/naruto-icon";

interface SideBarIconProps{
    variant: SideBarEnum,
    active: boolean
}

export default function SideBarIcon(props: SideBarIconProps){
    const {variant, active} = props;
    
    const iconsMapper: SideBarMapIconProps = {
        addContactIcon: MdPersonAddAlt1,
        chatIcon: BsFillChatLeftTextFill,
        exitIcon: RxExit,
        profileIcon: NarutoIcon
    }

    const SelectedIcon = iconsMapper[variant];

    return (
        <button className={active? styles.buttonClicked : styles.button}>
            <SelectedIcon className={styles.reactIcon}/>
        </button>
    )
} 