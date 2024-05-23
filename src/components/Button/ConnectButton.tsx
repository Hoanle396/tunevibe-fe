import { LOGIN_WALLET_QUERY } from "@/@apollo/queries/auth";
import { STORAGE_KEY } from "@/constants/constanst";
import { cutString, setStorage } from "@/libs/function";
import { useQuery } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import Button from ".";
import Avatar from "../Avatar";
import Loading from "../ui/loading/Loading";

export const ConnectButton = () => {
  const { address: wallet } = useAccount();
  const { connect } = useConnect();
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
      <Button onClick={() => {}} className="flex items-center gap-2">
        <Avatar username={wallet} className="w-6 h-6 border rounded-full" />
        {cutString(wallet)}
      </Button>
    );
  } else
    return (
      <Button
        onClick={() =>
          connect({
            connector: metaMask(),
          })
        }
        className="uppercase"
      >
        Connect Wallet
      </Button>
    );
};
