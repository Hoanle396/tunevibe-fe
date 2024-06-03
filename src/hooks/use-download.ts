import { useCallback, useMemo } from "react";

import useContract from "./use-contract";
import useToast from "./use-toast";

const useDownload = () => {
  const { toast, context } = useToast();
  const { contract } = useContract();
  const mint = useCallback(
    async (url: string, amount: number) => {
      try {
        let transaction = await contract?.buy(url, amount);
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
  return useMemo(() => ({ mint, context }), [mint, context]);
};

export default useDownload;
