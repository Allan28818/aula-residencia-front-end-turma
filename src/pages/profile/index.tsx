import styles from "./styles.module.css";
import { TextInput } from "@/components/inputs/text-input";
import { DefaultButton } from "@/components/buttons/default-button";
import ReverseButton from "@/components/buttons/reverse-button";
import minhaImagem from "../../../public/assets/kakashi-malvezzi.png";
import { GiStarShuriken } from "react-icons/gi";
import { TextArea } from "@/components/inputs/text-area";

export default function TelaProfile() {
  return (
    <div className={styles.body}>
      <div className={styles.profisoria}> {/*SUBSTITUIR ESSA DIV PELO COMPONENTE "SIDEBAR" OBS: NO CSS TAMBÉM*/}
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <span>asd</span>
      </div>
      <div className={styles.white_box}> 
        <div className={styles.logo_place}><p>teste</p></div>{/*SUBSTITUIR ESSA DIV PELO COMPONENTE "LOGOTIPO OBS: NO CSS TAMBÉM"*/}
      <div className={styles.container}>
        <div className={styles.profile_box}>
          <div className={styles.left}>
            <img src={minhaImagem.src} alt="Imagem Teste" /> {/*Substituir pela foto funcional e remover o css dessa*/}
            <div className={styles.textinputs}>
              <div className={styles.inputs}>
                <span>Nickname</span>
                <TextInput />
              </div>
              <div className={styles.inputs}>
                <span>Nome</span>
                <TextInput />
              </div>
              <div className={styles.inputs}>
                <span>Email</span>
                <TextInput />
              </div>
            </div>
          </div>
          <div className={styles.mid}><hr /><GiStarShuriken className={styles.shuriken_icon}/> <hr /></div>
          <div className={styles.right}>
              <div>
                <span>Bio</span>
                <TextArea />
              </div>
              <div className={styles.buttons}>
                <div className={styles.box}>
                  <DefaultButton nameInside="Salvar"/>
                </div>
                <div className={styles.box}>
                  <ReverseButton texto="Descartar"/>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
