import { Dispatch, SetStateAction } from "react"

export type contactsProps = {
    nickName:string,
    nome:string,
    email:string,
    bio:string,
    profileImage:string
}

export type InputProps = {
    textInput: string,
    setTextInput: Dispatch<SetStateAction<string>>
}