export const AI_URL = process.env.AI_URL || "http://localhost:5000";
export const IPFS_URL = process.env.IPFS_URL || "http://localhost:3001";
export const IPFS_API_KEY = process.env.IPFS_API_KEY || "12345";

export const GRAPHQL_URL =
  process.env.GRAPHQL_URL || "http://localhost:4000/graphql";

export const STORAGE_KEY = {
  TOKEN: "token",
} as const;

export const MAIN_ROUTE = ["/market", "/pricing", "/register", "/"];
export const NO_PLAY_ROUTE = ["/creator", "/profile"];

export const NFTAddress = "0x31d7208f4de3cd60851b3fcfcb00c90ad14da390";
export const MarketplaceAddress = "0x5b62df065734e38963178e06f50c2fb71ba07fe3";
