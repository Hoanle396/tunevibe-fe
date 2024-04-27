import { FCC } from "@/types";
import { BSCTestnet, Config, DAppProvider } from "@usedapp/core";
import React from "react";

const config: Config = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSCTestnet.chainId]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
};

const Web3Provider: FCC = ({ children }) => {
  return <DAppProvider config={config}>{children}</DAppProvider>;
};

export default Web3Provider;
