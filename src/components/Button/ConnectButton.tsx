import { cutString, getStorage, setStorage } from "@/libs/function";
import { useEthers } from "@usedapp/core";
import Button from ".";
import Avatar from "../Avatar";
import { useQuery } from "@apollo/client";
import { LOGIN_QUERY, LOGIN_WALLET_QUERY } from "@/@apollo/queries/auth";
import Loading from "../ui/loading/Loading";
import { usePathname, useRouter } from "next/navigation";
import { STORAGE_KEY } from "@/constants/constanst";
import { useEffect } from "react";

export const ConnectButton = () => {
  const { account: wallet, deactivate, activateBrowserWallet } = useEthers();
  const { push } = useRouter();

  const path = usePathname();

  const { loading, refetch } = useQuery(LOGIN_WALLET_QUERY, {
    variables: {
      wallet,
    },
    onCompleted: ({ data }) => {
      setStorage(STORAGE_KEY.TOKEN, data?.loginWallet?.token || "");
    },
    onError: ({ graphQLErrors }) => {
      path !== "/register" && push("/register");
    },
    skip: !wallet,
  });

  useEffect(() => {
    if (wallet) refetch();
  }, [refetch, wallet]);

  if (loading) return <Loading />;

  if (wallet) {
    return (
      <Button onClick={deactivate} className="flex items-center gap-2">
        <Avatar username={wallet} className="w-6 h-6 border rounded-full" />
        {cutString(wallet)}
      </Button>
    );
  } else
    return (
      <Button onClick={activateBrowserWallet} className="uppercase">
        Connect Wallet
      </Button>
    );
};
