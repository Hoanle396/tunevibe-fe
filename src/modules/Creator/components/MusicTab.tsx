"use client";
import { uploadFileToIPFS } from "@/apis/ipfs";
import { uploadTranscript } from "@/apis/transcript";
import FormWrapper from "@/components/Form/FormWrapper";
import TextArea from "@/components/Form/TextArea";
import TextField from "@/components/Form/TextField";
import useToast from "@/hooks/use-toast";
import { FCC } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import ImageUploadField from "./ImageUpLoadField";
import MusicUploadField from "./MusicUploadField";

type Props = {};

const MusicTab: FCC<Props> = (props: Props) => {
  const { toast, context } = useToast();
  const [file, setFile] = useState<File | null>(null);

  const form = useForm({});
  const { setValue } = form;

  const { mutate, isLoading } = useMutation(uploadTranscript, {
    onSuccess: ({ data }) => {
      setValue("content", data);
    },
    onError: ({ data }) => {
      toast.error("Error went detect lyrics");
    },
    onMutate: () => {
      setValue("content", "");
    },
  });

  const { mutateAsync: mutatePinIPFS } = useMutation(uploadFileToIPFS, {
    onSuccess: () => {
      toast.success("Successfully upload to ipfs");
    },
    onError: ({ data }) => {
      toast.error("Error went upload file");
    },
    onMutate: () => {},
  });

  const onChangeFile = (file: File) => {
    setFile(file);
    mutate(file);
  };

  const onSubmit = async ({ name, content, price, limit }: any) => {
    if (!name || !file || !content || !price || !limit) {
      toast.error("Please fill full information");
      return;
    } else {
      try {
        const { hash } = await mutatePinIPFS(file);
        console.log({ hash });
      } catch (error) {}
    }
  };
  return (
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
        <ImageUploadField
          control={form.control}
          name="thumbnail"
          label="Thumbnail Image"
          onToggle={() => {}}
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
      {context}
    </FormWrapper>
  );
};

export default MusicTab;
