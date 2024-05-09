"use client";
import { message } from "antd";
import { useMemo } from "react";

const useToast = () => {
  const [toast, context] = message.useMessage();

  return useMemo(
    () => ({
      toast,
      context,
    }),
    [context, toast]
  );
};

export default useToast;
