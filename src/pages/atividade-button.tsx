"use client";
import { useState } from "react";
import {
  DefaultButton
} from "@/components/buttons/default-buttons";
import styles from "@/components/buttons/styles.module.css";

export default function ButtonFunc() {
  const [titulo, setTitulo] = useState<string>("TEXT");

  return (
    <button className={styles.box}>
      <DefaultButton nameInside={titulo} />
    </button>
  );
}
