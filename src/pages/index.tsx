import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Script from "next/script";
import NewHome from "@/components/NewHome";
import { urbanistFont } from "@/components/fonts";
import LightHome from "@/components/LightHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://phronai.vercel.app/"), // base URL for generating absolute URLs
  title: "AI-Powered for Builders. One Prompt for Everyone.",
  description:
    "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
  keywords: [
    "openPhron",
    "PhronAI",
    "AI Agents",
    "smart contracts",
    "dApps",
    "blockchain",
    "decentralized AI",
    "AI Oracles",
  ],
  authors: [{ name: "PhronAI" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://phronai.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phronai.vercel.app/",
    siteName: "PhronAI",
    title: "AI-Powered for Builders. One Prompt for Everyone.",
    description:
      "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
    images: [
      {
        url: "https://phronai.vercel.app/assets/cover.png",
        width: 1200,
        height: 630,
        alt: "PhronAI Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Phron_ai",
    creator: "@Phron_ai",
    title: "AI-Powered for Builders. One Prompt for Everyone.",
    description:
      "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
    images: ["https://phronai.vercel.app/assets/cover.png"],
  },
  icons: {
    icon: [
      {
        url: "https://phronai.vercel.app/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://phronai.vercel.app/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://phronai.vercel.app/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  themeColor: "#000000",
};

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B3SKQRMJ1F"
      ></Script>
      <Script
        id="google-tags"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-B3SKQRMJ1F');
              `,
        }}
      ></Script>
      {/* <Script defer type="module" src="/canvas.js"></Script> */}
      {/* <Head>
        <title>AI-Powered for Builders. One Prompt for Everyone.</title>
        <meta
          name="description"
          // content="One step beyond with artificial intelligence, bringing the first AI Layer 0 Platform. Create your Layer 1 Blockchain in minutes."
          content="Train AI models and earn from the network. Launch L1s, deploy smart contract,leverage AI Agents to manage your contract, and create AI-powered Oracles. All with just a promt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <Box
        // pt={{ base: "70px", "1350px": "80px" }}
        bgColor="#fff"
        color="#000"
        as="main"
        minH="100vh"
        style={urbanistFont.style}
      >
        <LightHome />
      </Box>
    </>
  );
}
