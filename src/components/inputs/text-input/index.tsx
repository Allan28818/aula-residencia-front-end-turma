import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ value, onChange, className, ...rest }: TextInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input 
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className || ''}`}
        {...rest}
      />
    </div>
  );
}
