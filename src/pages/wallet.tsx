import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { PhronWallet } from "@/components";
import { interFont } from "@/components/fonts";

export default function WalletPage() {
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
        <title>PhronAI Wallet</title>
        <meta
          name="description"
          content="Your decentralized gateway to storing your assets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box bgColor="#fff" color="#000">
        <main id="wallet-page" style={interFont.style}>
          <PhronWallet />
        </main>
      </Box>
    </>
  );
}
