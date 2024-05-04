"use client";
import AudioCard from "@/components/AudioLive/AudioCard/AudioCard";
import FormWrapper from "@/components/Form/FormWrapper";
import NotFound from "@/components/ui/not-found/NotFound";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MusicUploadField from "./components/MusicUploadField";
import { Tab, Tabs } from "./components/Tabs";
type Props = {};

const Creator = (props: Props) => {
  const form = useForm({});
  const [file, setFile] = useState<File | null>(null);
  const onSubmit = async (data: any) => {
    console.log("Please enter full image, name, description and price");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="w-fit max-w-md">
        <AudioCard />
      </div>
      <Tabs>
        <Tab label="Music">
          <FormWrapper methods={form} onSubmit={onSubmit} className="pb-20">
            <h2 className="text-xl font-medium mb-2">Music Upload</h2>
            <div className="py-4 max-w-md mx-auto">
              <MusicUploadField
                control={form.control}
                name="image"
                onToggle={(file) => {
                  setFile(file);
                }}
              />
            </div>
          </FormWrapper>
        </Tab>
        <Tab label="Albums">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Albums Content</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </p>
          </div>
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
