import { useState } from "react";

import styles from "./styles.module.css"

interface TextInputProps {
  value: string;
}

export function TextArea() {
    return (
      <div className={styles.textarea}>
        <textarea/>
      </div>
    );
  }
