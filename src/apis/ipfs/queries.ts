import { IPFS_API_KEY } from "@/constants/constanst";
import { request } from ".";
import { IResponsePinIPFS } from "./types";

export const uploadFileToIPFS = (file: File): Promise<IResponsePinIPFS> => {
  const formData = new FormData();
  formData.append("file", file);
  return request({
    method: "POST",
    url: "/pinIpfs",
    headers: {
      Authorization: IPFS_API_KEY
    },
    data: formData,
  });
};
