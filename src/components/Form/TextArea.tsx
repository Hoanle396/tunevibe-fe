"use client";
import { Skeleton } from "antd";
import { AreaHTMLAttributes, FC, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = AreaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label?: any;
  defaultValue?: string;
  loading?: boolean;
  rows?: number;
};

const TextArea: FC<Props> = ({
  name,
  defaultValue = "",
  label,
  className,
  rows = 9,
  loading = false,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-6 w-full ">
          <label
            htmlFor={name}
            className="block mb-2 text-lg font-medium text-white"
          >
            {label}
          </label>
          <div className="relative w-full">
            <textarea
              rows={rows}
              name="name"
              value={field.value}
              onChange={field.onChange}
              className={`ring-blue-500 ring-2 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-transparent placeholder-gray-300 text-white ${className}`}
              {...props}
            />
            {loading && (
              <Skeleton
                active
                className="text-white rounded-lg bg-[#0d152a50] w-full p-2 absolute top-0 left-0 right-0 bottom-0 h-full"
              />
            )}
          </div>
        </div>
      )}
    />
  );
};

export default memo(TextArea);
