import { useCallback, useMemo } from "react";

import { MessageInstance } from "antd/es/message/interface";
import { ethers } from "ethers";
import useFee from "./use-fee";

const usePushingMusic = (toast?: MessageInstance) => {
  const { fee, contract } = useFee();

  const pushing = useCallback(
    async (tokenId: number, amount: number, price: string = "0") => {
      try {
        const unitPrice = ethers.parseEther(price).toString();

        let transaction = await contract?.MakeMusicNFT(
          tokenId,
          unitPrice,
          amount,
          {
            value: fee.toString(),
          }
        );
        await transaction.wait();
        toast && toast.success("Your NFT has been listed.");
      } catch (e) {
        console.error(e);
        toast && toast.error("Error went execute transaction");
      }
    },
    [contract, fee, toast]
  );
  return useMemo(() => ({ pushing }), [pushing]);
};

export default usePushingMusic;
