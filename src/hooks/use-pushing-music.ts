import { useCallback, useMemo } from "react";

import { ethers } from "ethers";
import useContract from "./use-contract";
import useToast from "./use-toast";
import useFee from "./use-fee";

const usePushingMusic = () => {
  const { toast, context } = useToast();
  const { contract } = useContract();
  const { fee, loading } = useFee();

  const createSale = useCallback(
    async (tokenId: string, price: string, amount: number) => {
      try {
        const unitPrice = ethers.parseEther(price);
        let transaction = await contract?.MakeMusicNFT(
          tokenId,
          unitPrice,
          amount,
          {
            value: !loading && ethers.parseEther(fee),
          }
        );
        await transaction.wait();
        toast.success("Your NFT has been listed.");
      } catch (e) {
        console.error(e);
        toast.error("Error went execute transaction");
      }
    },
    [contract, fee, loading, toast]
  );
  return useMemo(() => ({ createSale, context }), [createSale, context]);
};

export default usePushingMusic;
