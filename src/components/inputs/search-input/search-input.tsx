import styles from "./search-input.module.css";
import { CiSearch } from "react-icons/ci";


function SearchInput() {

    return (

        <div className={styles.inputWrapper}>
            <CiSearch className={styles.ciSearch} />
            <input type="text" placeholder="Pesquisar" className={styles.input}/>
        </div>
    );
}

export { SearchInput }