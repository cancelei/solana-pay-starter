import React, { useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HeadComponent from '../components/Head';

const TWITTER_HANDLE = "web3dev_";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { connect, connected } = useWallet();

  const handleConnectWallet = useCallback(() => {
    connect().catch(() => {});
  }, [connect]);

  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Loja de emojis 😈</p>
          <p className="sub-text">A única loja de emojis que aceita shitcoins</p>
        </header>

        <main>
          <img className='gif-image' src="https://media.tenor.com/1mJ-tJSzvwsAAAAd/solana-sol.gif" alt="emoji" />
          {!connected && (
            <WalletMultiButton className="connect-wallet-button" />
          )}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
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
