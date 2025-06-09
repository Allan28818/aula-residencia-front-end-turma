import { useState } from "react";
import styles  from "@/styles/pages/input.module.css";

export default function Input() {
    return (
      <>
      <div className="inputTexto">
        <input type="text" className={styles.inputTexto} />
        </div>
      </>
    );
  }