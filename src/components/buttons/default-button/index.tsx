import styles from "./styles.module.css";
import { useState } from "react";

interface ButtonProps {
  nameInside: string;
}

export function DefaultButton({ nameInside }: ButtonProps) {
  return <button className={styles.primaryButton}>{nameInside}</button>;
}
