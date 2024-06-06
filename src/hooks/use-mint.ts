import { useCallback, useMemo } from "react";

import { MessageInstance } from "antd/es/message/interface";
import useContract from "./use-contract";

const useMint = (toast?: MessageInstance) => {
  const { contract } = useContract("nft");
  const mint = useCallback(
    async (url: string, amount: number) => {
      try {
        const tx = await contract?.safeMint(url, amount);
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
    [contract, toast]
  );
  return useMemo(() => ({ mint }), [mint]);
};

export default useMint;
