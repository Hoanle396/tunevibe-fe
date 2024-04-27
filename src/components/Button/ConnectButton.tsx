import { useEthers } from "@usedapp/core";
import Button from ".";
import Avatar from "../Avatar";
import { cutString } from "@/libs/function";
import { useWeb3Modal } from "@web3modal/ethers5/react";

export const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  if (account) {
    return (
      <Button onClick={() => deactivate()} className="flex items-center gap-2">
        <Avatar username={account} className="w-6 h-6 border rounded-full" />
        {cutString(account)}
      </Button>
    );
  } else
    return (
      <Button onClick={() => activateBrowserWallet()} className="uppercase">
        Connect Wallet
      </Button>
    );
};
