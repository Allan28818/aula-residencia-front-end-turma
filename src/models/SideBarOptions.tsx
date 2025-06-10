import { FC, ReactElement } from "react"
import { IconType } from "react-icons"

enum SideBarEnum {
    chatIcon = "chatIcon",
    addContactIcon = "addContactIcon",
    profileIcon = "profileIcon",
    exitIcon = "exitIcon"
}

export type SideBarMapIconProps = {
    [key in keyof typeof SideBarEnum]: IconType | FC;
}

export { SideBarEnum }