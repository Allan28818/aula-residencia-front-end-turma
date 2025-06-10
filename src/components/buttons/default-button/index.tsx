import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  nameInside: string;
  type?: "button" | "submit" | "reset";
}

export function DefaultButton({ nameInside, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button 
      className={`${styles.primaryButton} ${className || ''}`}
      type={type}
      {...rest}
    >
      {nameInside}
    </button>
  );
}
