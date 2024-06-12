import React from "react";
import WalletProvider from "../components/WalletProvider";
import "../styles/globals.css";
import "../styles/App.css";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;
