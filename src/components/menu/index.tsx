import React from "react";
import styles from './menu.module.css';
import {  Icon1, Icon2, Icon3, Icon4 } from './icons'; // ou o caminho correto

export default function Menu() {
  return (
    <div className={styles.drawer}>
      <div className={styles.topIcons}>
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
      <div className={styles.bottomIcon}>
        <Icon4 />
      </div>
    </div>
  );
}