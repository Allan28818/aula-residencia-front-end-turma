import styles from "./styles.module.css";
import Input from "../input"; // ajuste o caminho
import {DefaultButton} from "../../components/buttons/default-buttons";

export default function TelaProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.esquerda}>
        <img
          src="/assets/kakashi-malvezzi.png"
          alt="Perfil"
          className={styles.img}
        />
          <div className="styles.textinputs">
            <h2 className={styles.texto}>Nickname</h2>
            <Input />
          </div>
          <div className="styles.textinputs">
            <h2 className={styles.texto}>Nome</h2>
            <Input />
          </div>
          <div className="styles.textinputs">
            <h2 className={styles.texto}>Email</h2>
            <Input />
          </div>
        <div>
        </div>
      </div>

<div className={styles.direita}>
  <h2 className={styles.texto}>Bio</h2>
  <div className={styles.inputMaior}>
    <Input />
  </div>
    <div>
  <DefaultButton nameInside=""/>
  </div>
</div>

    </div>
  );
}
