import { IPFS_URL } from "@/constants/constanst";
import axios from "axios";

let request = axios.create({
  baseURL: IPFS_URL,
});

const handleError = async (error: any) => {
  const data = error?.response?.data;
  return Promise.reject(data);
};

request.interceptors.response.use((response) => response.data, handleError);

export { request };
export * from "./queries";
export * from "./types";
