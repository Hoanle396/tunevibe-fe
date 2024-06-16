"use client";
import { FCC } from "@/types";
import Image from "next/image";
import type { BaseSyntheticEvent } from "react";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BsFillFileImageFill } from "react-icons/bs";

interface Props {
  label?: string;
  title?: string;
  name: string;
  hideError?: boolean;
  onToggle: (file: File) => void;
  disabled?: boolean;
  square?: boolean;
}

const ImageUploadField: FCC<Props> = ({
  name,
  hideError,
  title,
  label,
  disabled = false,
  onToggle,
  square = false,
  ...props
}) => {
  const { setValue, control } = useFormContext();

  const refFile = useRef<HTMLInputElement>(null);

  const onChooseFile = (e: BaseSyntheticEvent) => {
    const { files } = e.target;
    if (files.length > 0) {
      onToggle(files[0]);
      setValue(name, URL.createObjectURL(files[0]), { shouldValidate: true });
    }

    e.target.value = null;
  };

  const onToggleChooseFile = () => {
    if (!disabled) {
      refFile.current?.click();
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <label
            htmlFor={name}
            className="block mb-2 text-lg font-medium text-white"
          >
            {label}
          </label>
          <div
            className={`w-full max-w-full flex flex-col gap-8 items-center justify-center rounded-2xl border-[2px] border-white border-dashed  
            ${square ? "aspect-square" : "h-56"}`}
          >
            {field.value ? (
              <div className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={field.value}
                    alt=""
                    fill
                    className="z-1 aspect-square rounded-xl"
                  />
                  {!disabled && (
                    <div className="absolute z-10 self-center top-0 bottom-0 flex w-full justify-center">
                      <button
                        type="button"
                        className="rounded-lg px-3 py-1 bg-white text-accent text-lg font-semibold"
                        onClick={onToggleChooseFile}
                      >
                        reload
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                onClick={onToggleChooseFile}
                className="flex w-full h-full rounded-2xl justify-center flex-col gap-2 items-center cursor-pointer hover:bg-[#E05BFF10]"
              >
                <BsFillFileImageFill size={32} />
                <span className="text-xl font-bold lg:text-2xl ">
                  Drop file here
                </span>
                <p className="text-md font-medium lg:text-lg">
                  Accept png, jpg, svg, webp
                </p>
                <button
                  type="button"
                  className="btn-accent rounded-md px-4 py-2 font-semibold"
                >
                  Bowse
                </button>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={refFile}
            onChange={onChooseFile}
          />
        </div>
      )}
    />
  );
};

export default ImageUploadField;
