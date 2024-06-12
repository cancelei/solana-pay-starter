import React from "react";
import App from "next/app";
import WalletProviderSetup from "../components/WalletProvider";
import "../styles/globals.css";
import "../styles/App.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <WalletProviderSetup>
        <Component {...pageProps} />
      </WalletProviderSetup>
    );
  }
}

export default MyApp;
