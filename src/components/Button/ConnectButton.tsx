import { cutString } from "@/libs/function";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Button from ".";
import Avatar from "../Avatar";

export const ConnectButton = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();
  if (isConnected) {
    return (
      <Button onClick={() => open()} className="flex items-center gap-2">
        <Avatar
          username={address ?? ""}
          className="w-6 h-6 border rounded-full"
        />
        {cutString(address)}
      </Button>
    );
  }
  return (
    <Button onClick={() => open()} className="uppercase">
      Connect Wallet
    </Button>
  );
};
