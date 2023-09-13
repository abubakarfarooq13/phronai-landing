import Head from "next/head";
import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { CHome, Ecosystem, NftMarketPlace, PhronesesChain } from "@/components";
import Script from "next/script";

const FormularFont = localFont({
  src: [
    {
      path: "../assets/fonts/Formular-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <>
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
      <Head>
        <title>Phronesis: The Chain</title>
        <meta
          name="description"
          content="Phronesis is the first EVM, Proof-of-Stake, Layer 1 blockchain that uses the Sophia Protocol (ArAficial Intelligence StaAsAcal Consensus Mechanism) and Indirect-LTFM (Low TransacAon Fee Management) Protocol."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo_black.png" />
      </Head>
      <Box as="main" minH="100vh" className={FormularFont.className}>
        <PhronesesChain />
      </Box>
    </>
  );
}
