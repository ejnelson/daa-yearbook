import Head from "next/head";
import { Book } from "../Components/Book";
import React, { useMemo, useCallback, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");
import { useWalletNfts } from "@nfteyez/sol-rayz-react";

export default function Home() {
  const [isYearBookOpen, setIsYearBookOpen] = useState(false);
  const [isYearBookDisplayed, setIsYearBookDisplayed] = useState(false);

  // // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = "mainnet-beta";

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: { clientId: "Get a client ID @ https://developer.tor.us" },
      }),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  const onClickYearBook = () => {
    setIsYearBookOpen(!isYearBookOpen);
    if (!isYearBookOpen) {
      setTimeout(() => setIsYearBookDisplayed(true), 1000);
    } else {
      setIsYearBookDisplayed(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>DAA Yearbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full flex-1  text-center"
        style={{ overflow: "hidden !important" }}
      >
        <div
          style={{
            backgroundImage: 'url("/degenacademy.jpeg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "fixed",
            marginLeft: "auto",
            height: 600,
            width: 1200,
          }}
        ></div>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <div style={{ zIndex: 999, position: "fixed", top: 25, right: 25 }}>
              <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </WalletModalProvider>
            </div>
            {!isYearBookDisplayed ? (
              <div
                className={isYearBookOpen ? "openYearbook" : "unopenedYearbook"}
                onClick={onClickYearBook}
                style={{
                  backgroundImage: 'url("/yearbookcoverbrown.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "90%",
                }}
              ></div>
            ) : null}
            {isYearBookDisplayed ? (
              <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <Book />
              </div>
            ) : null}
          </WalletProvider>
        </ConnectionProvider>
      </main>
      {/* 
      <footer className="flex items-center justify-center w-full h-24 ">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
