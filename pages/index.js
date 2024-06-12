import React, { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constantes
const TWITTER_HANDLE = "web3dev_";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    // Client-side only code here
  }, []);

  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://media.tenor.com/1mJ-tJSzvwsAAAAd/solana-sol.gif"
        alt="emoji"
      />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Loja de emojis 😈</p>
          <p className="sub-text">
            A única loja de emojis que aceita shitcoins
          </p>
        </header>

        <main>{publicKey ? "Conectado!" : renderNotConnectedContainer()}</main>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`contruido na @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
