"use client";
import { MarketplaceAddress, NFTAddress } from "@/constants/constanst";
import NFT from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";
import Market from "@/contracts/TuneVibe.sol/TuneVibe.json";
import {
  BrowserProvider,
  Contract,
  JsonRpcProvider,
  JsonRpcSigner,
  ethers,
} from "ethers";
import { useMemo } from "react";
import { useConfig, useWalletClient } from "wagmi";

const useContract = (type: "market" | "nft" = "market") => {
  const { data: walletClient } = useWalletClient({ chainId: 97 });

  function walletClientToSigner(walletClient: any) {
    const { account, chain, transport } = walletClient;
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    };
    const provider = new BrowserProvider(transport, network);
    const signer = new JsonRpcSigner(provider, account.address);
    return signer;
  }

  return useMemo(
    () => ({
      contract: new ethers.Contract(
        type == "market" ? MarketplaceAddress : NFTAddress,
        type == "market" ? Market.abi : NFT.abi,
        walletClient ? walletClientToSigner(walletClient) : undefined
      ),
    }),
    [type, walletClient]
  );
};

export default useContract;

export function useContractNoSigner(type: "market" | "nft" = "market") {
  const { chains } = useConfig();

  const rpcUrls = useMemo(
    () => chains.find((x) => x.id == 97)?.rpcUrls,
    [chains]
  );

  return useMemo(() => {
    const rpc = rpcUrls?.default ?? rpcUrls?.public;
    return {
      contract: new Contract(
        type == "market" ? MarketplaceAddress : NFTAddress,
        type == "market" ? Market.abi : NFT.abi,
        new JsonRpcProvider(rpc?.http[0])
      ),
    };
  }, [rpcUrls?.default, rpcUrls?.public, type]);
}
