import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from 'react';
import Menu from '../components/Menu.js';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

  function _app() {
    return (
      <>
        <Menu />
        <div style={{ marginLeft: 80, padding: 20 }}>
          <h1>Texto</h1>
          <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</p>
        </div>
      </>
    );
  }

}

export default _app;
