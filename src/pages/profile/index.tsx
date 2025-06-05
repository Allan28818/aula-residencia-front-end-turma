import styles from "./styles.module.css";
import {TextInput} from "../../components/inputs/text-input/index";
import {DefaultButton} from "../../components/buttons/default-buttons";
import ReverseButton from "@/components/reverse-button/reverse-button";

export default function TelaProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.esquerda}>
        <div></div>
        <img
          src="/assets/kakashi-malvezzi.png"
          alt="Perfil"
          className={styles.img}
        />
          <div className={styles.textinputs}>
            <h2 className={styles.texto}>Nickname</h2>
            <TextInput />
            <h2 className={styles.texto}>Nome</h2>
            <TextInput />
            <h2 className={styles.texto}>Email</h2>
            <TextInput />
          </div>
        <div>
        </div>
      </div>

<div className={styles.direita}>
  <h2 className={styles.texto}>Bio</h2>
  <div className={styles.inputMaior}>
    <TextInput />
  </div>
    <div className={styles.butons}>
  <DefaultButton nameInside="Salvar"/>
  <ReverseButton texto={"Descartar"}/>
  </div>
</div>

    </div>
  );
}
