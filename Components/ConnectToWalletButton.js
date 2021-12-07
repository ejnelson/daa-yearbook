// import React, { useMemo, useCallback } from "react";
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   getLedgerWallet,
//   getPhantomWallet,
//   getSlopeWallet,
//   getSolflareWallet,
//   getSolletExtensionWallet,
//   getSolletWallet,
//   getTorusWallet,
// } from "@solana/wallet-adapter-wallets";
// import {
//   WalletModalProvider,
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import { clusterApiUrl } from "@solana/web3.js";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
// // Default styles that can be overridden by your app
// require("@solana/wallet-adapter-react-ui/styles.css");
// import { useWalletNfts } from "@nfteyez/sol-rayz-react";

// export const Wallet = () => {
//   // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
//   const network = WalletAdapterNetwork.Mainnet;

//   // You can also provide a custom RPC endpoint
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
//   // Only the wallets you configure here will be compiled into your application
//   const wallets = useMemo(
//     () => [
//       getPhantomWallet(),
//       getSlopeWallet(),
//       getSolflareWallet(),
//       getTorusWallet({
//         options: { clientId: "Get a client ID @ https://developer.tor.us" },
//       }),
//       getLedgerWallet(),
//       getSolletWallet({ network }),
//       getSolletExtensionWallet({ network }),
//     ],
//     [network]
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           <WalletMultiButton />
//           <WalletDisconnectButton />
//           <Logger />
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// const Logger = () => {
//   const { connection } = useConnection();
//   const wallet = useWallet();
//   console.log("connection", connection);
//   console.log("wallet", wallet);
//   const { publicKey } = wallet;

//   // within component
//   const { nfts, isLoading, error } = useWalletNfts({
//     publicAddress: publicKey,
//     // pass your connection object to use specific RPC node
//     connection,
//   });
//   console.log("nfts", nfts);
//   return <div>yo</div>;
// };
