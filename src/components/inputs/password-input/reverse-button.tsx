import styles from "./reverse-button.module.css";

interface ReverseButtonProps {
  variant: "variant1" | "variant2" | "variant3";
  children: React.ReactNode;
}

export default function ReverseButton({ variant, children }: ReverseButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      { children }
    </button>
  );
}

export { ReverseButton };