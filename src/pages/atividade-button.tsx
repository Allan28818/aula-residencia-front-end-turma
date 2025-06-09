"use client";
import { Logotipo } from "@/components/logo";
import { useState } from "react";

export default function ButtonFunc() {
  return (
    <button className={styles.box}>
      <DefaultButton nameInside={titulo} />
    </button>
  );
}
