import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import { BiSearch } from "react-icons/bi";
import { InputProps } from "@/models/contactProps";

function SearchInput(inputProps:InputProps) {

    return (

        <div className={styles.inputWrapper}>
            <BiSearch className={styles.BiSearch} />
            <input type="text" placeholder="Pesquisar" className={styles.input} 
            onChange={(event) => inputProps.setTextInput(event.target.value)}
            value={inputProps.textInput? inputProps.textInput : undefined}/>
        </div>
    );
}

export { SearchInput }