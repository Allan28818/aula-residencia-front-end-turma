import { useState } from "react";
import { toast } from "react-toastify";
import { PasswordInput } from "../inputs/password-input";
import styles from "./styles.module.css";
import { TextInput } from "../inputs/text-input";
import { DefaultButton } from "../buttons/default-button";

interface LoginFormProps {
  backgroundImage: string;
  iconImage: string;
}

export function LoginForm({ backgroundImage, iconImage }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("O e-mail é obrigatório");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido");
      return;
    }

    if (!password) {
      setPasswordError("A senha é obrigatória");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    toast.success("Login realizado com sucesso!");

    if (email === "erro@teste.com") {
      toast.error("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.leftPanel}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img src={iconImage} alt="Ícone" className={styles.iconImage} />
        <div className={styles.welcomeText}>BEM VINDO DE VOLTA</div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.loginContainer}>
          <h1 className={styles.loginTitle}>LOGIN</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <TextInput
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? styles.inputError : ""}
              />
              {emailError && (
                <span className={styles.errorMessage}>{emailError}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Senha</label>
              <PasswordInput
                value={password}
                onChange={(text) => setPassword(text)}
              />
              {passwordError && (
                <span className={styles.errorMessage}>{passwordError}</span>
              )}
            </div>

            <DefaultButton 
              nameInside="ENTRAR" 
              type="submit"
              className={styles.btnEntrar}
            />

            <div className={styles.divider}></div>

            <div className={styles.cadastroLink}>
              <a href="/register">Cadastro</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}