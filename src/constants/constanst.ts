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

export const MarketplaceAddress = "0xf544bD63E4954fEdf0B57717Dd2CB1C761fb15F6";
export const NFTAddress = "0xC29feEd294AD6aeBDcd263E31A447CEA60E005c9";

export { default as NFT } from "@/contracts/MusicTuneVibe.sol/MusicTuneVibe.json";
export { default as Market } from "@/contracts/TuneVibe.sol/TuneVibe.json";