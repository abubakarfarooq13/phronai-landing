import Head from "next/head";
import localFont from "next/font/local";
import { CHome, Ecosystem, NftMarketPlace } from "@/components";
import { Box } from "@chakra-ui/react";

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
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="By owning your NFTs, you decide. Keep them, trade them, sell them. Everything you want in the same place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        // pt={{ base: "70px", "1350px": "120px" }}
        bgColor="#000"
        color="#fff"
      >
        <main className={FormularFont.className}>
          <NftMarketPlace />
        </main>
      </Box>
    </>
  );
}
