import readContacts from "@/pages/api/readContacts"
import { contactsProps } from "@/models/contactProps"
import { useState, useEffect, Dispatch, SetStateAction } from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import { GoPlus } from "react-icons/go";
import { TextInput } from "../inputs/text-input"
import { DefaultButton } from "../buttons/default-button"
import ReverseButton from "../buttons/reverse-button"
import { InputProps } from "@/models/contactProps";
import { IoClose } from "react-icons/io5";

export default function Contacts(inputProps:InputProps ){
    const [contactsDict, setContactsDict] = useState<contactsProps[]>([]);
    const [addContact, setAddContact] = useState<boolean>(false);
    const [clickIndex, setClickIndex] = useState<number>(-1);
    const [contactActive, setContactActive] = useState<boolean>(false);
    const [info, setInfo] = useState<contactsProps>();
    let hasContact = false;

    useEffect(() => {

        fetch("/api/readContacts").then((res) => res.json()).then((data: contactsProps[]) => {
            setContactsDict(data)
        }).catch((error) =>{
            console.error("Erro ao coletar os dados", error);
        })
    }, [])

    function clickContact(index:number, value?:contactsProps){
        setClickIndex(index);
        setAddContact(false);
        if(index === -1){
            setContactActive(false);
            return
        }
        else setContactActive(true);
        setInfo(value)
    }

    function addContactInfo(){
        return (
        <div className={styles.DivContactInfo} style={contactActive? {display: "flex"} : {display: "none"}}>
            <div className={styles.DivContactInfoImage}>
                <div className={styles.DivImageInfo}>
                    <Image src={
                        ("./assets/" + (info?.profileImage? info?.profileImage : "kakashiProfile.svg"))
                    } alt="ProfileImage" fill className={styles.ImageInfo}/>
                </div>
                <IoClose className={styles.IconInfo} onClick={() => clickContact(-1)}/>
            </div>
            <div className={styles.TextInfo}>
                <div><p>NickName:</p> <p className={styles.info}>{info?.nickName}</p></div>
                <div><p>Nome:</p> <p className={styles.info}>{info?.nome}</p></div>
                <div><p>Email:</p> <p className={styles.info}>{info?.email}</p></div>
                <div><p>Bio:</p></div>
            </div>
            <div className={styles.DivDescribe}>
               <p>{info?.bio}</p>
            </div>
            <button className={styles.button} onClick={() => setAddContact(true)}>
                <p>ADICIONAR</p>
            </button>        
        </div>
        )
    }

    function addContactConfig(){
        return (
        <div className={styles.DivContactInfo} style={{justifyContent: "normal"}}>
            <div className={styles.DivContactInfoImage}>
                <div className={styles.DivImageInfo}>
                    <Image src={
                        ("./assets/" + (info?.profileImage? info?.profileImage : "kakashiProfile.svg"))
                    } alt="ProfileImage" fill className={styles.ImageInfo}/>
                </div>
                <IoClose className={styles.IconInfo} onClick={() => clickContact(-1)}/>
            </div>
            <div className={styles.TextInfo}>
                <div><p>NickName:</p> <p className={styles.info}>{info?.nickName}</p></div>
                <div><p>Nome:</p> <p className={styles.info}>{info?.nome}</p></div>
                <div><p>Email:</p> <p className={styles.info}>{info?.email}</p></div>
            </div>
            <div style={{marginTop:"5vh"}}>
                <p className={styles.TextTopInput}>NOME DO CONTATO:</p>
                <TextInput/>
            </div>
            <div className={styles.divButtons}>
                <button className={styles.button}>
                    <p>Salvar</p>
                </button>
                <button className={`${styles.button} ${styles.reverseButton}`} onClick={() => setAddContact(false)}>
                    <p>Cancelar</p>
                </button>
            </div>
        </div>
        )
    }

    console.log(contactsDict);

    return( 
    <div className={styles.DivContacts}>
        {addContact? addContactConfig() : addContactInfo()}
        <div className={styles.DivContactsNames}>
            {contactsDict.map((value, index) => {
                let srcImage = "./assets/";
                srcImage += value.profileImage;

                if(value.nome.toUpperCase().includes(inputProps.textInput.toUpperCase()) || 
                value.nickName.includes(inputProps.textInput.toUpperCase())){
                    hasContact = true;
                    return (
                        <div className={styles.Contact}>
                            <div className={styles.ImageDiv}>
                                <Image src={srcImage} alt="ProfileImage" fill className={styles.Image}/>
                            </div>
                            <div className={styles.ContactInfo}>
                                <p className={styles.NickName}>{value.nickName}</p>
                                <p className={styles.Name}>{value.nome}</p>
                            </div>
                            {
                                (clickIndex === index)?
                                <IoClose className={styles.Icon} onClick={()=> clickContact(-1, value)}/>:
                                <GoPlus className={styles.Icon} onClick={()=> clickContact(index, value)}/>
                            }

                        </div>
                    )
                }
            })}

            {hasContact? null : <Image src="./assets/contactNotFound.svg" 
            width={330} height={328} alt="Contato não encontrado" className={styles.ImageNotFound}/>}
        </div> 
    </div>
    )
}