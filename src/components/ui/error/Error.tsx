import { useRouter, usePathname } from "next/navigation";
import { Result } from "antd";

import MainButton from "../button/MainButton";

const Error = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  const path = usePathname();
  const backAction = path.split("/")[1];

  const backClickHandler = () => {
    router.push(`/${backAction}`);
  };

  return (
    <Result
      status="error"
      title={<p className="text-white text-3xl">An error has occurred</p>}
      subTitle={
        <p className="text-white text-xl">
          Please check and modify the following information before resubmitting.
        </p>
      }
      extra={[
        <div
          key="console"
          className="flex flex-col w-full justify-center items-center"
        >
          <MainButton type="primary" className="mb-2 max-w-52" onClick={reset}>
            Try Again
          </MainButton>
          <MainButton
            type="primary-outline"
            className="mb-2 max-w-52"
            onClick={backClickHandler}
          >
            Back To {backAction}
          </MainButton>
        </div>,
      ]}
    ></Result>
  );
};

export default Error;
