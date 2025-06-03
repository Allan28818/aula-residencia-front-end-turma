import styles from "./reverse-button.module.css";
import { useState } from "react";

interface ReverseButtonProps {

  texto: React.ReactNode;
}

export default function ReverseButton(children: ReverseButtonProps) {
  
  const[clickedButton, setClickedButton] = useState<boolean>(false);
  
  const{ texto } = children;

  return (
    <button onClick={()=>setClickedButton(!clickedButton)} className={ clickedButton ? `${styles.button} ${styles.clickedReverseButton}` : `${styles.button} ${styles.normalReverseButton}`}>
     { texto }
    </button>
  );
}

export { ReverseButton };