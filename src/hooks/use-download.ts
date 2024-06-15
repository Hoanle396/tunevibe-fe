import { useCallback, useMemo } from "react";

import { MessageInstance } from "antd/es/message/interface";
import useFee from "./use-fee";

const useDownload = (toast?: MessageInstance) => {
  const { contract } = useFee();

  const buy = useCallback(
    async (url: string, amount: number) => {
      try {
        let tokenId = await contract?.tokenByHash(url);

        let transaction = await contract?.buyNFT(tokenId[0], amount, {
          value: tokenId[3],
        });
        await transaction.wait();
        toast?.success("Your Music already to download now .");
        return transaction;
      } catch (e) {
        console.error(e);
        toast?.error("Error went execute transaction");
      }
    },
    [contract, toast]
  );
  return useMemo(() => ({ buy }), [buy]);
};

export default useDownload;
