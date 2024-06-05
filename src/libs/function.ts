import { IPFS_URL } from "@/constants/constanst";

export const cutString = (
  str?: string,
  start: number = 5,
  end: number = 5
): string => {
  if (!str) return "";
  if (str.length <= start + end) return str;
  return str.substring(0, start) + "..." + str.substring(str.length - end);
};

export const getErrorMessage = (error: any) => {
  if (error?.info?.error?.data?.code === -32000) {
    if (error?.info?.error?.data?.message) {
      return "Your account has insufficient balance";
    } else {
      return "Something went wrong when execute transaction";
    }
  }
  return "Something went wrong when execute transaction";
};

export const getStorage = (key: string): string => {
  try {
    return localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
};

export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const IPFS = (hash: string): string => {
  if (IPFS_URL.charAt(IPFS_URL.length - 1) == "/") return IPFS_URL + hash;
  return IPFS_URL + "/" + hash;
};
