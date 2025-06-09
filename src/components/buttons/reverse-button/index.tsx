import styles from "./styles.module.css";
import { useState } from "react";

interface ReverseButtonProps {

  texto: React.ReactNode;
}

export default function ReverseButton(props: ReverseButtonProps) {
  
  const[clickedButton, setClickedButton] = useState<boolean>(false);
  
  const{ texto } = props;

  return (
  <button 
    onClick={() => setClickedButton(clickedButton)} className={styles.button}>
    { texto }
  </button>
);
}

export { ReverseButton };