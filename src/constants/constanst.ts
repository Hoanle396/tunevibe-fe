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

export const MarketplaceAddress = "0x6d544EE02f84f8D14c5eCEC9aa9BF525AB542afc";
export const NFTAddress = "0xdff7D3abF84f88C8726FBCe4A7AC3DC7741F470F";

export { default as NFT } from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";
export { default as Market } from "@/contracts/TuneVibe.sol/TuneVibe.json";