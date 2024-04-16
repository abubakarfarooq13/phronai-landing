import Head from "next/head";
import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { CHome, Ecosystem, NftMarketPlace, PhronesesChain } from "@/components";
import Script from "next/script";
import { useEffect } from "react";
import NewPhronZero from "@/components/NewPhronZero";

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
        <title>Phron AI: The Chain</title>
        <meta
          name="description"
          content="From static to dynamic. One step beyond."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box
        pt={{ base: "70px", "1350px": "120px" }}
        bgColor="#03020b"
        color="#fff"
        as="main"
        minH="100vh"
        className={FormularFont.className}
      >
        <PhronesesChain />
      </Box>
    </>
  );
}
