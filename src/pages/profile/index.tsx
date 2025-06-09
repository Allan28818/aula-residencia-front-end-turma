import styles from "./styles.module.css";
import { TextInput } from "@/components/inputs/text-input";
import { DefaultButton } from "@/components/buttons/default-button";
import ReverseButton from "@/components/buttons/reverse-button";
import minhaImagem from "../../../public/assets/kakashi-malvezzi.png";
import { GiStarShuriken } from "react-icons/gi";
import { TextArea } from "@/components/inputs/text-area";
import SideBar from "@/components/vertical_bar/bar_function"
import { Logotipo } from "@/components/logo";
import modificarFotoIcon from "../../../public/assets/iconeEditarFoto.svg"
import { ProfileImage } from "@/components/profile"

export default function TelaProfile() {
  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.white_box}>
        <Logotipo />
        <div className={styles.container}>
          <div className={styles.profile_box}>
            <div className={styles.left}>

            <ProfileImage/>

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
            <div className={styles.mid}><hr /><GiStarShuriken className={styles.shuriken_icon} /> <hr /></div>
            <div className={styles.right}>
              <div className={styles.bio}>
                <span>Bio</span>
                <TextArea maxLength={500}/>
              </div>
              <div className={styles.buttons}>
                <div className={styles.box}>
                  <DefaultButton nameInside="Salvar" />
                </div>
                <div className={styles.box}>
                  <ReverseButton texto="Descartar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
