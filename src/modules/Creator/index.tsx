"use client";
import AudioCard from "@/components/AudioLive/AudioCard/AudioCard";
import NotFound from "@/components/ui/not-found/NotFound";
import MusicTab from "./components/MusicTab";
import { Tab, Tabs } from "./components/Tabs";
import AlbumsTab from "./components/AlbumsTab";
type Props = {};

const Creator = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      {/* <div className="w-fit max-w-md">
        <AudioCard />
      </div> */}
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
