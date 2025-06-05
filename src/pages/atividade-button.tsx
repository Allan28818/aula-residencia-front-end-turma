"use client";
import { useState } from "react";

import { Logotipo } from "@/components/logotipo/";

export default function ButtonFunc() {
  const [titulo, setTitulo] = useState<string>("TEXT");

  return (
    <Logotipo />
  );
}
