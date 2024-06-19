import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { request } from ".";
import { IResponseTranscriptMusic, Result } from "./types";

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

export const getRecommend = (userId: string): Promise<Result> => {
  return request({
    method: "POST",
    url: "/api/recommend",
    data: { userId },
  });
};

export const useRecommend = (
  userId?: string,
  option?: UseQueryOptions<Result, Error>
) => {
  return useQuery<Result, Error>(
    {
      queryKey: ["recommend", userId],
      queryFn: () => getRecommend(userId!),
      enabled: !!userId,
      ...option
   },
  );
};
