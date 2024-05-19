export const AI_URL = process.env.AI_URL || "http://localhost:5000";
export const IPFS_URL = process.env.IPFS_URL || "http://localhost:3001";
export const IPFS_API_KEY = process.env.IPFS_API_KEY || "12345";

export const GRAPHQL_URL =
  process.env.GRAPHQL_URL || "http://localhost:4000/graphql";

export const STORAGE_KEY = {
  TOKEN: "token",
} as const;
