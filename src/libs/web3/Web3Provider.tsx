import { FCC } from "@/types";

import { bscTestnet } from "viem/chains";
import { WagmiProvider, createConfig, http } from "wagmi";

const config = createConfig({
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http(),
  },
});

const Web3Provider: FCC = ({ children }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};

export default Web3Provider;
