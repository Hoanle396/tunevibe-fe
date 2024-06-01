import { useCallback, useMemo } from "react";

import useContract from "./use-contract";
import useToast from "./use-toast";

const useMint = () => {
  const { toast, context } = useToast();
  const { contract } = useContract();
  const resale = useCallback(
    async (url: string, amount: number) => {
      try {
        let transaction = await contract?.safeMint(url, amount);
        await transaction.wait();
        toast.success("Your NFT has been create.");
        return transaction
      } catch (e) {
        console.error(e);
        toast.error("Error went execute transaction");
      }
    },
    [contract, toast]
  );
  return useMemo(() => ({ resale, context }), [resale, context]);
};

export default useMint;
