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
        <title>Open Phron | AI Web 3.0 Development, made easy.</title>
        <meta
          name="description"
          content="From imagination to implementation The road towards the future"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
