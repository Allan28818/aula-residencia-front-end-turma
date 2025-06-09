import { useState } from "react";

import styles from "./styles.module.css"

interface TextAreaProps {
  maxLength?: number;
}

export function TextArea({ maxLength }: TextAreaProps) {
    return (
      <div className={styles.textarea}>
        <textarea maxLength={maxLength}/>
      </div>
    );
  }
