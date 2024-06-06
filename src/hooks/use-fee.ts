import { useCallback, useEffect, useMemo, useState } from "react";

import { ethers } from "ethers";
import useContract from "./use-contract";

const useFee = () => {
  const { contract } = useContract();

  const [loading, setLoading] = useState(false);
  const [fee, setFee] = useState<string>("0");
  const loadFee = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contract.getFunction("getListingFee").call(null);
      setFee(data.toString());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [contract]);

  useEffect(() => {
    loadFee();
  }, [loadFee]);

  return useMemo(
    () => ({
      loading,
      contract,
      fee,
    }),
    [contract, fee, loading]
  );
};

export default useFee;
