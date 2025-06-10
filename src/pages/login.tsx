import { LoginForm } from "@/components/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - DevChat</title>
        <meta name="description" content="Faça login no DevChat" />
      </Head>
      <LoginForm
        backgroundImage="/assets/fundo_Login.png"
        iconImage="/assets/naruto_Login.png"
        smokeImage='/assets/smoke_login.png'
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          
    </>
  );
}
