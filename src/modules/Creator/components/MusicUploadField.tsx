"use client";
import { FCC } from "@/types";
import Image from "next/image";
import type { BaseSyntheticEvent } from "react";
import { useRef } from "react";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { BsFillFileMusicFill } from "react-icons/bs";
import AudioCard from "./AudioCard";

interface Props {
  label?: string;
  title?: string;
  name: string;
  hideError?: boolean;
  onToggle: (file: File) => void;
  disabled?: boolean;
  control: Control<FieldValues, any>;
}

const MusicUploadField: FCC<Props> = ({
  name,
  hideError,
  title,
  label,
  disabled = false,
  onToggle,
  control,
  ...props
}) => {
  const { setValue } = useFormContext();
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
          <div className="w-full max-w-full aspect-video flex flex-col gap-8 items-center justify-center rounded-2xl border-[2px] border-white border-dashed">
            {field.value ? (
              <div className="w-full h-full p-1 shadow-[rgba(149,157,165,0.2)0px8px24px] relative">
                <div className="relative w-full h-full block">
                  <AudioCard src={field.value}>
                    {!disabled && (
                      <div className="self-center">
                        <button
                          className="rounded-lg px-3 py-1 bg-white text-accent tex-lg font-semibold"
                          onClick={onToggleChooseFile}
                        >
                          reload
                        </button>
                      </div>
                    )}
                  </AudioCard>
                </div>
              </div>
            ) : (
              <div
                onClick={onToggleChooseFile}
                className="flex w-full h-full rounded-2xl justify-center flex-col gap-4 items-center cursor-pointer hover:bg-[#E05BFF10]"
              >
                <BsFillFileMusicFill size={48} />
                <span className="text-2xl font-bold lg:text-3xl ">
                  Drop file here
                </span>
                <p className="text-lg font-medium lg:text-xl">
                  Accept wma, mp3, wav, flac, m4a
                </p>
                <p className="text-lg font-medium lg:text-xl">
                  Or choose file here
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
            accept="audio/*"
            style={{ display: "none" }}
            ref={refFile}
            onChange={onChooseFile}
          />
        </div>
      )}
    />
  );
};

export default MusicUploadField;
