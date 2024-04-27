"use client";

import { FCC } from "@/types";
import { BSCTestnet } from "@usedapp/core";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "YOUR_PROJECT_ID";

// 2. Set chains
const mainnet = {
  chainId: BSCTestnet.chainId,
  name: "BSCTestnet",
  currency: "BNB",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: BSCTestnet.chainId, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export const Web3Modal: FCC = ({ children }) => {
  return <div>{children}</div>;
};
