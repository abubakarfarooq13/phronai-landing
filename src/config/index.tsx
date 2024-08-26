import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
// import { mainnet, sepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

// testnet phron chain

import { type Chain } from "viem";

// Phron AI
// RPC: testnet.phron.ai
// ChainId: 4477
// Currency: PHRON

export const phronai = {
  id: 7744,
  name: "PhronAI",
  nativeCurrency: { name: "PHRON", symbol: "TPHR", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet.phron.ai"] },
  },
  blockExplorers: {
    default: { name: "Phronscan", url: "https://testnet.phronscan.io" },
  },
  // contracts: {
  //   ensRegistry: {
  //     address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  //   },
  //   ensUniversalResolver: {
  //     address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
  //     blockCreated: 16773775,
  //   },
  //   multicall3: {
  //     address: "0xca11bde05977b3631167028862be2a173976ca11",
  //     blockCreated: 14353601,
  //   },
  // },
} as const satisfies Chain;

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WEB3_MODAL_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "PhronAI",
  description: "PhronAI",
  url: "https://phron.ai", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [phronai], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: false, // Optional - true by default
  enableInjected: false, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: false, // Optional - true by default
  connectors: [metaMask()],

  // ...wagmiOptions, // Optional - Override createConfig parameters
});
