import SideBar from "@/components/vertical_bar/bar_function"
import { SideBarEnum } from "@/models/SideBarOptions";
import Contacts from "@/components/contacts"
import styles from "@/styles/pages/add-contacts.module.css"
import { SearchInput } from "@/components/inputs/search-input";
import LogoType from "@/components/component-logo"
import { useState } from "react"

export default function AddContact() {
  const [textInput, setTextInput] = useState<string>(" ");

  return (
    <div className={styles.div}>
     <SideBar activeButton= {SideBarEnum.addContactIcon}/> 
      <div className={styles.divPageElements}>
        <div style={{marginLeft: "2.18vw", marginTop: "1.32vw"}}>
        <LogoType/>
        </div>
        <div className={styles.divContacts}>
          <SearchInput textInput={textInput} setTextInput={setTextInput}/>
          <Contacts textInput={textInput} setTextInput={setTextInput}/>
        </div>
      </div>
    </div>
  ); 
}