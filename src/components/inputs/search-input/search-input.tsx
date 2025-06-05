import styles from "./search-input.module.css";


function SearchInput() {

    return (

        <div className={styles.inputWrapper}>
            <img src= "/assets/search-icon.svg" alt="Pesquisar" className={styles.searchIcon}/>
            <input type="text" placeholder="Pesquisar" className={styles.input}/>
        </div>
    );
}

export { SearchInput }