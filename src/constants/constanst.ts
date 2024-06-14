export const AI_URL = process.env.AI_URL || "http://localhost:5000";
export const IPFS_URL = process.env.IPFS_URL || "http://localhost:3000";
export const IPFS_API_KEY = process.env.IPFS_API_KEY || "12345";

export const GRAPHQL_URL =
  process.env.GRAPHQL_URL || "http://localhost:4000/graphql";

export const STORAGE_KEY = {
  TOKEN: "token",
} as const;

export const MAIN_ROUTE = ["/market", "/pricing", "/register", "/"];
export const NO_PLAY_ROUTE = ["/creator", "/profile"];

export const MarketplaceAddress = "0x15f485d943832e0A33f23f6010800e491250ac24";
export const NFTAddress = "0x15f485d943832e0A33f23f6010800e491250ac24";

export { default as NFT } from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";
export { default as Market } from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";