import { useState } from "react";

import SharinganOpened from "../../../../public/assets/sharingan_closed.svg";
import SharinganClosed from "../../../../public/assets/sharingan-closed.svg";

import styles from "./styles.module.css";

interface PasswordInputProps {
  value: string;
  onChange: (text: string) => void;
}

function PasswordInput(props: PasswordInputProps) {
  const { value, onChange } = props;

  const [isEyeOpened, setIsEyeOpened] = useState<boolean>(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        type={isEyeOpened ? "text" : "password"}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
      <button
        className={styles.button}
        onClick={() => setIsEyeOpened(!isEyeOpened)}>
        {isEyeOpened ? (
          <SharinganOpened className={styles.eyeIcon} />
        ) : (
          <SharinganClosed className={styles.eyeIcon} />
        )}
      </button>
    </div>
  );
}

export { PasswordInput };
