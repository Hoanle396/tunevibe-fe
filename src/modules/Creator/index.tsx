"use client";
import AudioCard from "@/components/AudioLive/AudioCard/AudioCard";
import FormWrapper from "@/components/Form/FormWrapper";
import NotFound from "@/components/ui/not-found/NotFound";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MusicUploadField from "./components/MusicUploadField";
import { Tab, Tabs } from "./components/Tabs";
import TextArea from "@/components/Form/TextArea";
import TextField from "@/components/Form/TextField";
import { useMutation } from "react-query";
import { uploadTranscript } from "@/apis/transcript";
import { message } from "antd";
import { uploadFileToIPFS } from "@/apis/ipfs";
type Props = {};

const Creator = (props: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [file, setFile] = useState<File | null>(null);

  const form = useForm({});
  const { setValue } = form;

  const { mutate, isLoading } = useMutation(uploadTranscript, {
    onSuccess: ({ data }) => {
      setValue("content", data);
    },
    onError: ({ data }) => {
      messageApi.error("Error went detect lyrics");
    },
    onMutate: () => {
      setValue("content", "");
    },
  });

  const { mutateAsync: mutatePinIPFS } = useMutation(uploadFileToIPFS, {
    onSuccess: () => {
      messageApi.success("Successfully upload to ipfs");
    },
    onError: ({ data }) => {
      messageApi.error("Error went upload file");
    },
    onMutate: () => {},
  });

  const onChangeFile = (file: File) => {
    setFile(file);
    mutate(file);
  };

  const onSubmit = async ({ name, content, price, limit }: any) => {
    if (!name || !file || !content || !price || !limit) {
      messageApi.error("Please fill full information");
      return;
    } else {
      try {
        const { hash } = await mutatePinIPFS(file);
        console.log({ hash });
      } catch (error) {}
    }
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
            <div className="py-4 max-w-lg mx-auto flex flex-col gap-4">
              <TextField
                name="name"
                label="Name"
                placeholder="Enter name of the music"
              />
              <MusicUploadField
                control={form.control}
                name="music"
                onToggle={onChangeFile}
              />
              <TextArea name="content" label="Lyrics" loading={isLoading} />
              <TextField
                name="price"
                label="Price to download"
                type="number"
                placeholder="10 BNB"
              />
              <TextField
                name="limit"
                label="Limit download"
                type="number"
                placeholder="10"
              />
              <button
                disabled={isLoading}
                type="submit"
                className="flex disabled:bg-gray-400 w-full h-14 justify-center items-center border rounded-full text-white hover:bg-[#0d152a50] hover:ring-2 hover:ring-white"
              >
                Mint and Sale Now
              </button>
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
      {contextHolder}
    </div>
  );
};

export default Creator;
