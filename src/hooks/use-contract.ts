"use client";
import { MarketplaceAddress, NFTAddress } from "@/constants/constanst";
import NFT from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";
import Market from "@/contracts/TuneVibe.sol/TuneVibe.json";
import { Contract } from "@ethersproject/contracts";
import { providers } from "ethers";
import { useEffect, useMemo, useState } from "react";

export const useContract = (type: "market" | "nft" = "market") => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [contract, setContract] = useState<Contract>();


  useEffect(() => {
    const getContract = async () => {
      try {
        const provider = new providers.Web3Provider(window.ethereum);
        await provider.send("eth_accounts", []);
        const signer = await provider.getSigner();
        const contract = new Contract(
          type == "market" ? MarketplaceAddress : NFTAddress,
          type == "market" ? Market.abi : NFT.abi,
          signer
        );
        setError(false);
        setContract(contract);
      } catch (err) {
        setError(true);
        setMessage((err as { message: string }).message);
        setContract(undefined);
      }
    };
    getContract();
    return;
  }, [type]);

  return useMemo(
    () => ({
      error,
      message,
      contract,
    }),
    [contract, error, message]
  );
};
