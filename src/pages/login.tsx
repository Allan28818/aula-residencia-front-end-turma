import { PasswordInput } from "@/components/inputs/password-input";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <PasswordInput onChange={(text) => setPassword(text)} value={password} />
    </>
  );
}
