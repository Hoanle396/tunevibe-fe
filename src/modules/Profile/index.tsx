"use client";
import Avatar from "@/components/Avatar";
import FormWrapper from "@/components/Form/FormWrapper";
import TextArea from "@/components/Form/TextArea";
import TextField from "@/components/Form/TextField";
import useToast from "@/hooks/use-toast";
import { cutString } from "@/libs/function";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

type Props = {};

const Profile = (props: Props) => {
  const { address } = useAccount();
  const { toast, context } = useToast();

  const form = useForm({
    mode: "all",
  });

  const onSubmit = async ({ name, description }: any) => {
    if (!name || !description) {
      toast.error("Please fill full information");
      return;
    } else {
    }
  };
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-row items-center gap-3 px-4 py-8 w-full ">
        <Avatar
          username={address ?? ""}
          className="w-40 h-40 border rounded-3xl"
        />
        <div className="flex flex-col w-full">
          <a className="text-[#8A8AA0] text-lg">Wallet Address</a>
          <a className="text-3xl text-white uppercase">
            {cutString(address ?? "", 10, 7)}
          </a>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <FormWrapper methods={form} onSubmit={onSubmit}>
        <h2 className="text-xl font-medium mb-2">Update profile</h2>
        <div className="py-4 max-w-3xl mx-auto flex flex-col gap-4">
          <TextField
            name="name"
            label="Name"
            placeholder="Enter name of the music"
          />
          <TextArea name="description" rows={5} label="Bio" />
          <button
            type="submit"
            className="flex disabled:bg-gray-400 w-full h-14 justify-center items-center border rounded-full text-white hover:bg-[#0d152a50] hover:ring-2 hover:ring-white"
          >
            Update
          </button>
        </div>
        {context}
      </FormWrapper>
    </div>
  );
};

export default Profile;
