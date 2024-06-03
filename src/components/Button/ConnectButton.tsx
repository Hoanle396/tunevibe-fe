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
import { useAuthStore } from "@/store/auth-store";

export const ConnectButton = () => {
  const { address: wallet } = useAccount();
  const { connect } = useConnect();
  const { push } = useRouter();
  const { login } = useAuthStore();

  const path = usePathname();
  useQuery(LOGIN_WALLET_QUERY, {
    variables: {
      wallet,
    },
    onCompleted: (data) => {
      setStorage(STORAGE_KEY.TOKEN, data?.loginWallet?.token || "");
      login(data?.loginWallet?.token ?? "", data?.loginWallet?.user?.id ?? 0);
    },
    onError: ({ graphQLErrors }) => {
      path !== "/register" && push("/register");
    },
    skip: !wallet,
  });

  if (wallet) {
    return (
      <Button
        onClick={() => {}}
        className="flex items-center gap-2"
        icon={
          <Avatar username={wallet} className="w-6 h-6 border rounded-full" />
        }
      >
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
