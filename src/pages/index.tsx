import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Script from "next/script";
import NewHome from "@/components/NewHome";
import { urbanistFont } from "@/components/fonts";
import LightHome from "@/components/LightHome";

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
      <Head>
        {/* Basic SEO */}
        <title>AI-Powered for Builders. One Prompt for Everyone.</title>
        <meta
          name="description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt."
        />
        <meta
          name="keywords"
          content="openPhron, PhronAI, AI Agents, smart contracts, dApps, blockchain, decentralized AI, AI Oracles"
        />
        <meta name="author" content="PhronAI" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://phronai.vercel.app" />

        {/* Favicons */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#000000" />

        {/* Open Graph (Facebook, LinkedIn, Discord, Telegram) */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PhronAI" />
        <meta property="og:url" content="https://phronai.vercel.app" />
        <meta
          property="og:title"
          content="AI-Powered for Builders. One Prompt for Everyone."
        />
        <meta
          property="og:description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt."
        />
        <meta
          property="og:image"
          content="https://phronai.vercel.app/assets/cover.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card (X.com) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Phron_ai" />
        <meta name="twitter:creator" content="@Phron_ai" />
        <meta name="twitter:url" content="https://phronai.vercel.app" />
        <meta
          name="twitter:title"
          content="AI-Powered for Builders. One Prompt for Everyone."
        />
        <meta
          name="twitter:description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt."
        />
        <meta
          name="twitter:image"
          content="https://phronai.vercel.app/assets/cover.png"
        />
      </Head>
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
