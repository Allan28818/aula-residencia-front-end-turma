import React from "react";
import './Menu.css';
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
    <div className="drawer">
      <div className="topIcons">
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
      <div className="bottomIcon">
        <Icon4 />
      </div>
    </div>
  );
}