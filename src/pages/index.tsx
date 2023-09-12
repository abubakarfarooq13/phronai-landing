import Head from "next/head";
import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { CHome, Ecosystem, NftMarketPlace, PhronesesChain } from "@/components";

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
        <title>Phronesis: The Chain</title>
        <meta
          name="description"
          content="By applying AI statistical algorithms, Phronesis Chain provides the fastest Layer 1 Blockchain with the best Web 3.0 infrastructure for game developers"
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
