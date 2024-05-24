"use client";
/* eslint-disable react/jsx-no-duplicate-props */
import { FC, InputHTMLAttributes, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: any;
  defaultValue?: string;
};

const TextField: FC<Props> = ({
  name,
  defaultValue = "",
  type = "text",
  label,
  className,
  ...props
}) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-6 w-full">
          <label
            htmlFor={name}
            className="block mb-2 text-lg font-medium text-white"
          >
            {label}
          </label>
          <input
            {...props}
            {...field}
            name={name}
            type={type}
            className={`ring-blue-500 ring-2 h-14 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-transparent placeholder-gray-300 text-white ${className}`}
          />
        </div>
      )}
    />
  );
};

export default memo(TextField);
