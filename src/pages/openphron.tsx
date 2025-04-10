import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { interFont } from "@/components/fonts";
import OpenPhron from "@/components/OpenPhron";

const openphron = () => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B3SKQRMJ1F"
        ></script>
        <script
          id="google-tags"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-B3SKQRMJ1F');
              `,
          }}
        ></script>
        <title>openPhron: Supercharge Web3 with AI</title>
        <meta
          name="description"
          content="Redefining Blockchain Through AI-Driven Enhancements, allowing Smarter Contracts, Powerful AI Oracles, and AI Developer Tools."
        />
        <link rel="canonical" href="https://app.openphron.ai" />
      </Head>
      <Box pt={{ sm: "180px", md: "150px" }}>
        <main id="openphron-page" style={interFont.style}>
          <OpenPhron />
        </main>
      </Box>
    </>
  );
};

export default openphron;
