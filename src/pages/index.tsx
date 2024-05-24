import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Script from "next/script";
import NewHome from "@/components/NewHome";
import { interFont, plusJakartaSans } from "@/components/fonts";

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
        <title>Welcome to PhronZero</title>
        <meta
          name="description"
          content="One step beyond with artificial intelligence, bringing the first AI Layer 0 Platform. Create your Layer 1 Blockchain in minutes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        // pt={{ base: "70px", "1350px": "80px" }}
        bgColor="#000"
        color="#fff"
        as="main"
        minH="100vh"
        style={plusJakartaSans.style}
      >
        {/* <PhronesesChain /> */}
        {/* <NewPhronZero /> */}
        <NewHome />
      </Box>
    </>
  );
}
