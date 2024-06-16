import { useCallback, useMemo } from "react";

import { MessageInstance } from "antd/es/message/interface";
import { ethers } from "ethers";
import useFee from "./use-fee";

const useMint = (toast?: MessageInstance) => {
  const { fee, contract } = useFee();

  const mint = useCallback(
    async (url: string, amount: number, price: string = "0") => {
      try {
        const unitPrice = ethers.parseEther(price);
        const tx = await contract?.safeMint(url, amount, unitPrice, {
          value: fee,
        });
        await tx.wait();
        let transaction = await contract?.tokenByHash(url);
        toast && toast.success("Your NFT has been create.");

        return { id: transaction ? transaction[0] : -1 };
      } catch (e) {
        console.error(e);
        toast && toast.error("Error went execute transaction");
        return { id: undefined };
      }
    },
    [contract, fee, toast]
  );
  return useMemo(() => ({ mint }), [mint]);
};

export default useMint;
