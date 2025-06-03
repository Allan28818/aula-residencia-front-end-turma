import React from "react";
import styles from './menu.module.css';
import { FaCommentAlt, FaUserAlt, FaAngellist, FaSignOutAlt } from "react-icons/fa";

export function Icon1() {
  return <FaCommentAlt size={24} />;
}
export function Icon2() {
  return <FaUserAlt size={24} />;
}
export function Icon3() {
  return <FaAngellist size={24} />;
}
export function Icon4() {
  return <FaSignOutAlt size={24} />;
}

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