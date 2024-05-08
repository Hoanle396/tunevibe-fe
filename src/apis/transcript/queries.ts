import { request } from ".";
import { IResponseTranscriptMusic } from "./types";

export const uploadTranscript = (
  file: File
): Promise<IResponseTranscriptMusic> => {
  const formData = new FormData();
  formData.append("audio", file);
  return request({
    method: "POST",
    url: "/api/predict",
    data: formData,
  });
};
