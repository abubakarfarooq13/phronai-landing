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
        <title>AI-Powered for Builders. One Prompt for Everyone.</title>
        <meta
          name="description"
          // content="One step beyond with artificial intelligence, bringing the first AI Layer 0 Platform. Create your Layer 1 Blockchain in minutes."
          content="Train AI models and earn from the network. Launch L1s, deploy smart contract,leverage AI Agents to manage your contract, and create AI-powered Oracles. All with just a promt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
