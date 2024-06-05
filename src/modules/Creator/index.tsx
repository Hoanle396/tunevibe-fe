"use client";
import NotFound from "@/components/ui/not-found/NotFound";
import { getStorage } from "@/libs/function";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import AlbumsTab from "./components/AlbumsTab";
import MusicTab from "./components/MusicTab";
import { Tab, Tabs } from "./components/Tabs";
import Albums from "./components/Albums";
type Props = {};

const Creator = (props: Props) => {
  const { push } = useRouter();
  const token = getStorage("token");

  const { address } = useAccount();

  if (!token || !address) {
    push("/music");
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      <Albums />
      <Tabs>
        <Tab label="Music">
          <MusicTab />
        </Tab>
        <Tab label="Albums">
          <AlbumsTab />
        </Tab>
        <Tab label="MV">
          <div className="py-4">
            <NotFound>function</NotFound>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Creator;
