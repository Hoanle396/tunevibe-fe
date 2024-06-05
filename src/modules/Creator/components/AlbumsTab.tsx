"use client";
import { CREATE_ALBUM } from "@/@apollo/queries/albums";
import { GET_ME } from "@/@apollo/queries/artist";
import { uploadFileToIPFS } from "@/apis/ipfs";
import FormWrapper from "@/components/Form/FormWrapper";
import TextField from "@/components/Form/TextField";
import useToast from "@/hooks/use-toast";
import { FCC } from "@/types";
import { useMutation as useApollo, useQuery } from "@apollo/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageUploadField from "./ImageUpLoadField";

type Props = {};

const AlbumTab: FCC<Props> = (props: Props) => {
  const { toast, context } = useToast();
  const [artist, setArtist] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm({
    mode: "all",
  });
  useQuery(GET_ME, {
    onCompleted: (data) => {
      setArtist(data?.getMe?.id ?? 0);
    },
    onError: () => {
      toast.error("Please create your profile first!");
    },
  });

  const [execute, { loading }] = useApollo(CREATE_ALBUM, {
    onCompleted: () => {
      toast.success("Create Album successfully!");
      form.reset();
    },
    onError: () => {
      toast.error("Can't create your album!");
    },
  });

  const { mutateAsync: mutatePinIPFS, isPending } = useMutation({
    mutationFn: uploadFileToIPFS,
  });

  const onChangeFile = (file: File) => {
    setFile(file);
  };

  const onSubmit = async ({ name }: any) => {
    if (!name || !file) {
      toast.error("Please fill full information");
      return;
    } else {
      try {
        const { hash } = await mutatePinIPFS(file);
        execute({
          variables: {
            input: {
              artist,
              name,
              cover: hash,
            },
          },
        });
      } catch (error) {}
    }
  };
  return (
    <FormWrapper methods={form} onSubmit={onSubmit} className="pb-20">
      <h2 className="text-xl font-medium mb-2">New Album</h2>
      <div className="py-4 max-w-lg mx-auto flex flex-col gap-4">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter name of the music"
        />
        <ImageUploadField
          name="thumbnail"
          label="Thumbnail Image"
          onToggle={onChangeFile}
        />
        <button
          disabled={loading || isPending}
          type="submit"
          className="flex disabled:bg-gray-400 w-full h-14 justify-center items-center border rounded-full text-white hover:bg-[#0d152a50] hover:ring-2 hover:ring-white"
        >
          Create new Album
        </button>
      </div>
      {context}
    </FormWrapper>
  );
};

export default AlbumTab;
