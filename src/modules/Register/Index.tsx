"use client";
import { REGISTER_QUERY } from "@/@apollo/queries/auth";
import FormWrapper from "@/components/Form/FormWrapper";
import TextField from "@/components/Form/TextField";
import { STORAGE_KEY } from "@/constants/constanst";
import useToast from "@/hooks/use-toast";
import { setStorage } from "@/libs/function";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

const Register = () => {
  const { toast, context } = useToast();
  const { push } = useRouter();
  const { address: wallet } = useAccount();
  const [mutate, {}] = useMutation(REGISTER_QUERY, {
    onCompleted: ({ data }) => {
      setStorage(STORAGE_KEY.TOKEN, data?.createUser?.token || "");
      toast.success("Registration successful");
      push("/");
    },
    onError: () => {
      toast.error("Failed to register");
    },
    errorPolicy: "none",
  });
  const form = useForm({});
  const onSubmit = ({ email, password }: any) => {
    console.log({ wallet, email, password });

    if (!wallet || !email || !password) {
      toast.error("Please enter your information");
      return;
    }
    mutate({ variables: { wallet, email, password } });
  };
  return (
    <FormWrapper
      methods={form}
      onSubmit={onSubmit}
      className="h-[calc(100vh-100px)] w-full flex items-center"
    >
      <div className="p-8 max-w-xl mx-auto w-full flex flex-col gap-4 items-center border-2 rounded-xl border-white bg-[linear-gradient(180deg,#000f1f,#0c2a50)]">
        <h2 className="text-5xl font-medium mb-2">Register</h2>
        <TextField
          name="wallet"
          label="Enter your wallet address"
          disabled
          value={wallet}
          placeholder="Enter your wallet address"
        />
        <TextField
          name="email"
          label="Enter your email address"
          type="email"
          placeholder="Enter your email address"
        />
        <TextField
          name="password"
          label="Enter your password"
          type="password"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="flex disabled:bg-gray-400 w-full h-14 justify-center items-center border rounded-full text-white hover:bg-[#0d152a50] hover:ring-2 hover:ring-white"
        >
          Register
        </button>
      </div>
      {context}
    </FormWrapper>
  );
};

export default Register;
